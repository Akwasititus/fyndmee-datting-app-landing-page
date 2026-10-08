// Shared public support copy. Sources: /download, /products-pricing-info,
// /privacy-policy, /safety, /contact-us. Prices and direct store links are unconfirmed.
export const MAX_MESSAGE_LENGTH = 2000;
export const MAX_HISTORY_MESSAGES = 20;
export const GREETING = "Hey! I'm Vanessa 👋 Here to help you get the most out of Fynd Mee. Need a hand with your profile, matching, plans, or something else?";
export const SUPPORT_REPLY = "I don't have confirmed information about that. Please visit /contact-us or email info@fyndmee.app so the Fynd Mee team can help. I can't access or change your account.";

// Published website descriptions for generative replies, separate from outage FAQs.
export const PRODUCT_FACTS = [
  'Fynd Mee is a dating and social connection platform for adults aged 18 and over. It also describes friendship and networking connections. Source: /about-us.',
  'The published onboarding describes profile prompts, interests, detailed preferences, and up to six profile photos. General advice about honest bios, clear recent photos, and describing real interests is appropriate. Source: /about-us.',
  'The website describes matching around shared interests, hobbies, career preferences, values, and lifestyle. It describes profiles, likes, and messaging after matching. Internal ranking rules, specific settings, and effects of login frequency are not confirmed. Do not claim that logging in or swiping more trains the algorithm or increases matches. Sources: /about-us and the homepage.',
  'The website describes free access and optional paid plans. Exact current prices and availability must be checked in the app before purchasing. Source: /products-pricing-info.',
  'Published Plus features: unlimited Likes, unlimited Passport Mode, one Supa Like every month, a 15-minute Boost, an ad-free experience, and priority support. Source: /products-pricing-info.',
  'Published Gold features: everything in Plus, See Who Liked You, two 15-minute Boosts monthly, three Supa Likes every month, advanced match filters, and priority customer support. Source: /products-pricing-info.',
  'Published Royal features: everything in Gold, a VIP badge, one 30-minute Boost monthly, five Supa Likes every month, global access, and premium customer support. Source: /products-pricing-info.',
  'A Supa Like expresses stronger interest. A Boost is a visibility feature. Neither guarantees a match. Source: /products-pricing-info.',
  'The /download page currently links to general Apple App Store and Google Play pages, not confirmed direct app listings. Do not invent store URLs or claim availability on a particular device.',
  'Safety guidance is at /safety and data practices are at /privacy-policy. Do not guarantee safety, authenticity, verification of every profile, or end-to-end encryption. Never request passwords, verification codes, payment details, or sensitive personal data.',
  'Account access, billing decisions, refunds, deletion, and moderation actions require the Fynd Mee support team. Vanessa cannot perform them or submit a ticket. Contact: info@fyndmee.app or /contact-us.',
];

export const FAQS = [
  {
    id: 'account',
    pattern: /\b(login|log in|sign in|password|account|delete|refund|charged|billing|payment|crash|bug|error|not working|stuck|problem|issue)\b/i,
    answer: "For account or technical issues, try restarting the app and checking for an update. Never share your password or verification codes here. For login, deletion, billing, or unresolved issues, visit /contact-us or email info@fyndmee.app; I can't access or change your account.",
  },
  {
    id: 'safety',
    pattern: /\b(safe|safety|privacy|secure|security|data|encrypt(?:ed|ion)?|verif(?:y|ied|ication)|report|block|harass(?:ment)?|scam|fake|abuse)\b/i,
    answer: "Keep passwords, verification codes, payment details, and sensitive personal information private. Visit /safety for safety guidance and /privacy-policy for how Fynd Mee describes its data practices. For suspicious accounts or a safety concern, contact info@fyndmee.app. Verification cannot guarantee someone's intentions or your safety.",
  },
  {
    id: 'pricing',
    pattern: /\b(free|cost|price|prices|pricing|premium|subscription|paid|pay|membership|upgrade|plus|gold|royal|boost|supa likes?|rewind|unlimited likes)\b/i,
    answer: "Fynd Mee's website describes free access with optional paid upgrades, including Plus, Gold, and Royal. Visit /products-pricing-info for the published plan and add-on details, and check the app for current prices and availability before purchasing. I can't confirm exact prices or what is included in your account.",
  },
  {
    id: 'download',
    pattern: /\b(download|install|app store|appstore|play store|playstore|google play|ios|iphone|android|get the app)\b/i,
    answer: "Visit /download for Fynd Mee's download information. The website currently links to the general Apple App Store and Google Play pages, so I can't confirm a direct listing or availability for your device. If you can't find the app, email info@fyndmee.app for the official link.",
  },
  {
    id: 'onboarding',
    pattern: /\b(get(?:ting)? started|sign up|signup|register|registration|create a profile|set up|setup|onboarding|profile|bio)\b/i,
    answer: "To get started, visit /download, then follow the app's registration prompts when it is available on your device. Use accurate profile information and describe your interests and what kind of connection you're looking for. Which part of getting started do you need help with?",
  },
  {
    id: 'matching',
    pattern: /\b(match(?:es|ing)?|algorithm|compatib(?:le|ility)|swip(?:e|ing)|recommendations?|suggestions?|find people)\b/i,
    answer: "Fynd Mee's website describes matching around interests, preferences, and the connections you're looking for. Keep your profile and preferences up to date to help people understand what you want. I can't inspect your matches, guarantee a connection, or confirm how the matching algorithm works internally.",
  },
  {
    id: 'features',
    pattern: /\b(features?|tools|different|friend(?:s|ship)?|networking|community|hobbies|what is fynd\s?mee|about fynd\s?mee|what can i do|messag(?:e|ing))\b/i,
    answer: "Fynd Mee is a dating and social connection platform focused on meaningful connections, including friendships and networking. Its website describes profiles, matching, and messaging, plus optional plan features. Visit /products-pricing-info for published upgrade details; availability may vary, and I can't check your account.",
  },
  { id: 'identity', pattern: /\b(vanessa|assistant|chatbot|who are you)\b/i, answer: GREETING },
  { id: 'thanks', pattern: /^(thanks|thank you|that's helpful|that is helpful)[!.\s]*$/i, answer: "You're welcome! Let me know if you have another question about Fynd Mee." },
  { id: 'greeting', pattern: /^(hi|hello|hey|good morning|good afternoon|good evening)[!.\s]*$/i, answer: GREETING },
];

export function getFaqReply(message) {
  return FAQS.find((faq) => faq.pattern.test(message.trim()))?.answer ?? SUPPORT_REPLY;
}
