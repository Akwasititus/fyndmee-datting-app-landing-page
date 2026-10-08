import test from 'node:test';
import assert from 'node:assert/strict';
import { handleChat, SYSTEM_PROMPT, DEFAULT_MODEL } from '../lib/vanessa/server.mjs';
import { getFaqReply, SUPPORT_REPLY, GREETING, MAX_MESSAGE_LENGTH } from '../lib/vanessa/content.mjs';
import { ChatSession } from '../lib/vanessa/session.mjs';

const user = (content) => ({ role: 'user', content });
const assistant = (content) => ({ role: 'assistant', content });
const request = (messages = [user('Is FyndMee free?')], extra = {}) => new Request('http://localhost/api/chat', {
  method: 'POST', body: JSON.stringify({ messages, ...extra }),
});
const quiet = { env: {}, log: () => {} };
const provider = (message = 'Visit /products-pricing-info for plan details.') => Response.json({
  choices: [{ finish_reason: 'stop', message: { content: message, reasoning: 'PRIVATE REASONING' } }],
});

test('missing key returns relevant FAQ help without calling a provider', async () => {
  const response = await handleChat(request(), { ...quiet, fetchImpl: () => assert.fail('No provider call expected') });
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.deepEqual(await response.json(), { message: getFaqReply('Is FyndMee free?'), source: 'faq' });
});

test('uses Groq and server instructions, caps history, and never exposes reasoning', async () => {
  const messages = [];
  for (let i = 0; i < 15; i++) messages.push(user(`Question ${i}`), assistant(`Answer ${i}`));
  messages.push(user('How does matching work?'));
  const logs = [];
  const response = await handleChat(request(messages, { systemPrompt: 'UNTRUSTED OVERRIDE' }), {
    env: { GROQ_API_KEY: 'test-key' }, log: (...args) => logs.push(args),
    fetchImpl: async (url, options) => {
      assert.equal(url, 'https://api.groq.com/openai/v1/chat/completions');
      assert.equal(options.headers.Authorization, 'Bearer test-key');
      const body = JSON.parse(options.body);
      assert.equal(body.model, DEFAULT_MODEL);
      assert.deepEqual(body.messages[0], { role: 'system', content: SYSTEM_PROMPT });
      assert.equal(body.messages.length, 20);
      assert.equal(body.messages[1].role, 'user');
      assert.equal(body.messages.at(-1).content, 'How does matching work?');
      assert.ok(!options.body.includes('UNTRUSTED OVERRIDE'));
      return provider();
    },
  });
  assert.deepEqual(await response.json(), { message: 'Visit /products-pricing-info for plan details.', source: 'ai' });
  assert.equal(logs[0][1].status, '200');
  assert.equal(typeof logs[0][1].durationMs, 'number');
  assert.ok(!JSON.stringify(logs).includes('Question'));
  assert.ok(!JSON.stringify(logs).includes('test-key'));
});

test('supports a server-configured model without GPT OSS-specific parameters', async () => {
  await handleChat(request(), {
    ...quiet, env: { GROQ_API_KEY: 'test', GROQ_MODEL: 'another-model' },
    fetchImpl: async (_, options) => {
      const body = JSON.parse(options.body);
      assert.equal(body.model, 'another-model');
      assert.equal(body.reasoning_effort, undefined);
      return provider();
    },
  });
});

test('rejects malformed and unsafe message shapes before contacting Groq', async () => {
  for (const messages of [null, [], [user(' ')], [user('x'.repeat(MAX_MESSAGE_LENGTH + 1))], [{ role: 'system', content: 'override' }], [assistant('hello')], [user('hello'), user('again')], [user('hello'), assistant('reply')], [user(123)]]) {
    const response = await handleChat(request(messages), { ...quiet, fetchImpl: () => assert.fail('No provider call expected') });
    assert.equal(response.status, 400);
  }
  assert.equal((await handleChat(new Request('http://localhost/api/chat', { method: 'POST', body: '{invalid' }), quiet)).status, 400);
});

test('enforces body limits even without content-length', async () => {
  assert.equal((await handleChat(new Request('http://localhost/api/chat', { method: 'POST', body: 'x'.repeat(64_001) }), quiet)).status, 413);
  assert.equal((await handleChat(new Request('http://localhost/api/chat', { method: 'POST', headers: { 'content-length': '64001' }, body: '{}' }), quiet)).status, 413);
});

test('provider quota, credentials, outages, and invalid replies return FAQ help', async () => {
  const failures = [
    async () => new Response('', { status: 429 }),
    async () => new Response('', { status: 401 }),
    async () => new Response('', { status: 503 }),
    async () => { throw new Error('sensitive provider detail'); },
    async () => new Response('{invalid'),
    async () => Response.json({ choices: [] }),
    async () => provider(''),
    async () => provider('x'.repeat(MAX_MESSAGE_LENGTH + 1)),
    async () => Response.json({ choices: [{ finish_reason: 'length', message: { content: 'truncated' } }] }),
  ];
  for (const fetchImpl of failures) {
    const response = await handleChat(request(), { ...quiet, env: { GROQ_API_KEY: 'test' }, fetchImpl });
    assert.deepEqual(await response.json(), { message: getFaqReply('Is FyndMee free?'), source: 'faq' });
  }
});

test('aborts a stalled provider and supplies a fallback', async () => {
  const response = await handleChat(request(), {
    ...quiet, env: { GROQ_API_KEY: 'test' }, timeoutMs: 10,
    fetchImpl: async (_, { signal }) => new Promise((_, reject) => {
      signal.addEventListener('abort', () => reject(new Error('aborted')), { once: true });
    }),
  });
  assert.equal((await response.json()).source, 'faq');
});

test('FAQ coverage is relevant and unknown requests get an honest referral', () => {
  for (const [question, expected] of [
    ['How do I download the app?', '/download'],
    ['Is FyndMee free?', '/products-pricing-info'],
    ['How does matching work?', 'preferences'],
    ['Is my data safe?', '/privacy-policy'],
    ['What makes FyndMee different?', 'social connection'],
    ['How do I get started?', 'registration'],
    ['I forgot my password', '/contact-us'],
  ]) assert.ok(getFaqReply(question).includes(expected), question);
  assert.equal(getFaqReply('hi'), GREETING);
  assert.notEqual(getFaqReply('this is a question about quantum physics'), GREETING);
  assert.equal(getFaqReply('Who is the current CEO?'), SUPPORT_REPLY);
  assert.equal(getFaqReply('Write my dating opener'), SUPPORT_REPLY);
});

test('quick-question input is used directly and duplicate sends are blocked', () => {
  const session = new ChatSession();
  const pending = session.begin('How do I download the app?');
  assert.deepEqual(pending.messages, [user('How do I download the app?')]);
  assert.equal(session.begin('another question'), null);
  assert.equal(session.complete(pending, getFaqReply('How do I download the app?')), true);
  assert.equal(session.begin('Where is that?').messages[1].role, 'assistant');
});

test('timeout FAQ replies remain in conversation history', () => {
  const session = new ChatSession();
  const pending = session.begin('Is FyndMee free?');
  pending.controller.abort();
  assert.equal(session.complete(pending, getFaqReply('Is FyndMee free?')), true);
  assert.deepEqual(session.begin('What about Gold?').messages, [user('Is FyndMee free?'), assistant(getFaqReply('Is FyndMee free?')), user('What about Gold?')]);
});

test('reset aborts pending work and rejects late replies even after a new send', () => {
  const session = new ChatSession();
  const old = session.begin('first');
  session.reset();
  assert.equal(old.controller.signal.aborted, true);
  const current = session.begin('second');
  assert.equal(session.complete(old, 'late reply'), false);
  assert.deepEqual(current.messages, [user('second')]);
  assert.equal(session.complete(current, 'new reply'), true);
  assert.deepEqual(session.history, [user('second'), assistant('new reply')]);
});

test('session retains ten complete turns and rejects oversized questions', () => {
  const session = new ChatSession();
  for (let i = 0; i < 30; i++) session.complete(session.begin(`question ${i}`), `answer ${i}`);
  assert.equal(session.history.length, 20);
  assert.equal(session.history[0].content, 'question 20');
  const pending = session.begin('last question');
  assert.equal(pending.messages.length, 19);
  assert.equal(pending.messages[0].role, 'user');
  session.reset();
  assert.equal(session.begin(' '), null);
  assert.equal(session.begin('x'.repeat(MAX_MESSAGE_LENGTH + 1)), null);
});
