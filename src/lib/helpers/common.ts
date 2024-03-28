import { BotContext } from "../botContext";

export const filterChatType = (ctx: BotContext) => ctx.chat?.type === "private";
