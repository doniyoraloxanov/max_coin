import { Bot, session, webhookCallback } from "grammy";

import { hydrateReply } from "@grammyjs/parse-mode";
import { BotContext, initial } from "@webbot/lib/botContext";
import { onStart } from "@webbot/lib/commands/onStart";
import { catchError } from "@webbot/lib/handlers/onError";
import { filterChatType } from "@webbot/lib/helpers/common";
import { i18n } from "@webbot/lib/helpers/constants";

enum COMMANDS {
  START = "start",
  HELP = "help",
  INSTRUCTIONS = "instructions",
  SETTINGS = "settings",
  FEEDBACK = "feedback",
}

const bot = new Bot<BotContext>(process.env.BOT_TOKEN!);

bot.use(hydrateReply);

bot.use(session({ initial }));

bot.use(i18n);

const filteredBot = bot.filter(filterChatType);

filteredBot.hears("ping", async (ctx) => {
  await ctx.api.setMyCommands([
    {
      command: COMMANDS.START,
      description: "Start the bot",
    },

    {
      command: COMMANDS.INSTRUCTIONS,
      description: "View Instructions",
    },

    {
      command: COMMANDS.FEEDBACK,
      description: "Leave Feedback",
    },
    {
      command: COMMANDS.SETTINGS,
      description: "Open Settings",
    },
  ]);
});

filteredBot.command(COMMANDS.START, onStart);

bot.on("message:text", onStart);

bot.catch(catchError);

export default webhookCallback(bot, "next-js");
