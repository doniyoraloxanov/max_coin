import { BotContext } from "../botContext";

export const onHelp = async (ctx: BotContext) => {
  await ctx.replyWithHTML("max bot | Coming Soon");
};
