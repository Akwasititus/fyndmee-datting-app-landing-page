import { MAX_HISTORY_MESSAGES, MAX_MESSAGE_LENGTH } from './content.mjs';

// Per-widget memory only: no storage, cookies, or database writes.
export class ChatSession {
  constructor() {
    /** @type {Array<{role: 'user' | 'assistant', content: string}>} */
    this.history = [];
    /** @type {{controller: AbortController, messages: Array<{role: 'user' | 'assistant', content: string}>} | null} */
    this.pending = null;
  }

  begin(text) {
    const content = text.trim();
    if (this.pending || !content || content.length > MAX_MESSAGE_LENGTH) return null;
    /** @type {Array<{role: 'user' | 'assistant', content: string}>} */
    const messages = [...this.history, { role: 'user', content }].slice(-(MAX_HISTORY_MESSAGES - 1));
    const request = { controller: new AbortController(), messages };
    this.pending = request;
    return request;
  }

  complete(request, reply) {
    // A timed-out request can complete with FAQ help; reset clears pending.
    if (this.pending !== request) return false;
    this.history = [...request.messages, { role: 'assistant', content: reply }].slice(-MAX_HISTORY_MESSAGES);
    this.pending = null;
    return true;
  }

  reset() {
    this.pending?.controller.abort();
    this.pending = null;
    this.history = [];
  }
}
