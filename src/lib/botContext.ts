import { SessionFlavor, type Context } from "grammy";

import { type ChatMembersFlavor } from "@grammyjs/chat-members";
import { type ConversationFlavor } from "@grammyjs/conversations";
import { FileFlavor } from "@grammyjs/files";
import { I18nFlavor } from "@grammyjs/i18n";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";
import { User } from "@prisma/client";

export type Sessions = {
  user: User | null;
};

export type SessionData = {
  __language_code?: string;
};

export type BotContext = ParseModeFlavor<
  FileFlavor<
    Context &
      ChatMembersFlavor &
      ConversationFlavor &
      SessionFlavor<Sessions> &
      I18nFlavor &
      SessionFlavor<SessionData>
  >
>;

export function initial(): Sessions {
  return {
    user: null,
  };
}
