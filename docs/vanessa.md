# Vanessa setup

Vanessa is the support widget on the homepage. It follows the user's language and formality when understood, including casual English and Pidgin. It calls Groq through `/api/chat`, with no paid backup. Missing credentials, provider errors, quota exhaustion, timeouts, and unusable replies produce shared FAQ answers. If the website API itself is unreachable, the widget uses the same FAQ copy locally.

## Enable free AI

1. Create a free account at [Groq Console](https://console.groq.com/keys) and create an API key. Keep the account on the free plan; do not configure paid backup or automatic upgrades.
2. Add `GROQ_API_KEY` to `.env.local` for development and to the server environment on Vercel. Never use a `NEXT_PUBLIC_` prefix or put the key in the browser. The old `ANTHROPIC_API_KEY` is no longer used by Vanessa.
3. Optionally set `GROQ_MODEL=openai/gpt-oss-20b`, the default. Confirm it is available on your account's free plan. Changing to a different model requires checking its free eligibility and reply quality.
4. Enable zero data retention in the Groq account's Data Controls. This cannot be enabled by the code; see [Groq data settings](https://console.groq.com/docs/your-data).
5. Restart the local server or redeploy after setting server environment variables. Check a reply for `source: "ai"` in the `/api/chat` response. Without a key, `source: "faq"` is expected.

Groq applies organization-wide request and token quotas, so free AI is not unlimited. Check the account's exact [limits](https://console.groq.com/settings/limits). This code never calls Anthropic or another paid backup. The provider account's billing configuration controls whether Groq itself can charge.

## Content and behavior

Edit `lib/vanessa/content.mjs` to maintain `PRODUCT_FACTS` and the separate outage FAQ answers. The server uses the facts to generate natural answers instead of treating canned FAQ replies as instructions. Review facts against product information before adding claims. Website store links are currently generic, and exact pricing is unconfirmed; use page referrals until those details are verified.

Vanessa cannot inspect accounts, matches, billing, or moderation actions. Unknown facts and account-specific problems go to `/contact-us` or `info@fyndmee.app`. Conversations are kept in page memory only. The chat code logs provider status and duration without prompts, replies, or API keys. The privacy page discloses the Groq message flow.

## API and checks

POST `/api/chat` with `{ "messages": [{ "role": "user", "content": "Is FyndMee free?" }] }`. History must alternate user and assistant, starting and ending with a user message. Each message is limited to 2,000 characters; the provider receives the latest ten turns including the current question. Browser-supplied system instructions are ignored.

Success: `{ "message": "...", "source": "ai" }` or `{ "message": "...", "source": "faq" }`. Malformed input returns 400; a body larger than 64,000 bytes returns 413. Responses are not cached. The provider timeout is 15 seconds; the browser timeout is 20 seconds. Reset/unmount cancels pending work, and late responses are discarded.

Run `npm test`, `npx tsc --noEmit`, and `npm run build`. Tests use a simulated provider and no credentials. Before deployment with AI enabled, check onboarding, plans, matching, safety, account issues, follow-ups, unknown features, and attempts to override Vanessa's instructions using the live free model. Look for accurate, brief answers and support referrals, not promises of account access or unconfirmed prices.

If Turbopack compilation stalls locally on Windows, `npm run build -- --webpack` provides an alternative production validation. The project still uses its existing default build command.
