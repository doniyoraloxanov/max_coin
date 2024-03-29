import { BotContext } from "@webbot/lib/botContext";
import { InlineKeyboard } from "grammy";

export const getUsername = (user: any) =>
  user.first_name || user.last_name || user.username || "";

const onStart = async (ctx: BotContext) => {
  if (ctx.match) {
    if (ctx.match && ctx.match.includes("refer")) {
      await ctx.replyWithHTML(
        `🔗 Referral Link: <code>${`${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=${ctx.from?.id}`}</code>`,
        {
          reply_markup: new InlineKeyboard().url(
            "Share Referral Link",
            `https://t.me/share/url?text=🎁 Join max and start Earning 🎁🎁🎁 &url=${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=${ctx.from?.id}`
          ),
        }
      );

      return;
    }
  }

  await ctx.reply("Hello!, Welcome to max", {
    reply_markup: new InlineKeyboard().webApp(
      "Launch App",
      process.env.NEXT_PUBLIC_AP_URL ?? "https://max-coin.vercel.app"
    ),
  });
};

export { onStart };
