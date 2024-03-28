import { SessionFlavor, type Context } from "grammy";

import type { ParseModeFlavor } from "@grammyjs/parse-mode";
import { User } from "grammy/types";

export type Sessions = {
  user: User | null;
};

export type SessionData = {
  __language_code?: string;
};

export type BotContext = ParseModeFlavor<
  Context & SessionFlavor<Sessions> & SessionFlavor<SessionData>
>;

export function initial(): Sessions {
  return {
    user: null,
  };
}
