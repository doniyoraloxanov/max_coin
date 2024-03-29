import { BotContext } from "@webbot/lib/botContext";

const handleMessage = async (ctx: BotContext) => {
  await ctx.reply("Hello!, Welcome to Max");
};

export { handleMessage };
