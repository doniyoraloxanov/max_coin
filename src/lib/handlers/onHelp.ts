import { BotContext } from "../botContext";

export const onHelp = async (ctx: BotContext) => {
  await ctx.replyWithHTML("Max bot | Coming Soon");
};
