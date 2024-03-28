import { BotContext } from "@webbot/lib/botContext";

const handleMessage = async (ctx: BotContext) => {
  await ctx.reply("Hello!, Welcome to MOB");
};

export { handleMessage };
