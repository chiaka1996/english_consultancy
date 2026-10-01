/**
 * WhatsApp Configuration for English Lab Consultancy
 *
 * Requirements:
 * - Country code followed by phone number.
 * - Do NOT include the "+" symbol or leading "0".
 *
 * Example: "2348012345678" or "2348146450315"
 *
 * You can change your WhatsApp phone number here in one central place,
 * or configure NEXT_PUBLIC_WHATSAPP_NUMBER in your .env.local file.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "2348146450315";
