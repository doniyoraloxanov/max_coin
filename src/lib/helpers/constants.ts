import { MemorySessionStorage } from "grammy";
import { type ChatMember } from "grammy/types";
import path from "path";

export const adapter = new MemorySessionStorage<ChatMember>();

export type GenerationResponse = {
  artifacts: Array<{
    base64: string;
    seed: number;
    finishReason: string;
  }>;
};

export const channelId = process.env.CHANNEL_ID;
export const channelLink = process.env.CHANNEL_LINK!;
export const communityChatLink = process.env.COMMUNITY_CHAT_LINK!;
export const communityChatId = process.env.COMMUNITY_CHAT_ID!;

export const inlineKeyboards = {
  instruction: "Instruction",
  contact: "Contact",
};

export const COMMANDS = {
  START: "start",
  SETTINGS: "settings",
  FEEDBACK: "feedback",
  INSTRUCTIONS: "instructions",
  HELP: "help",
};

const langPath = path.join(process.cwd(), "src/lib/locale");

export const keyboards = {
  instruction: "📖 Instructions",
  feedback: "📣 Feedback",
  settings: "Settings",
  referral: "🌟 Referral Competition",
};

export const POINT = 3;
