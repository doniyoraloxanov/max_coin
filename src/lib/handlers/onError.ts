import { BotError, Context, GrammyError, HttpError } from "grammy";
import { DEVELOPER_ID, isEmpty } from "../utils/common";

export const errorMsgBuilder = (errorRes: any) => {
  let err = errorRes?.response?.data || errorRes?.response?.body || errorRes;

  let msg = "";
  if (err && typeof err === "object" && !isEmpty(err)) {
    Object.keys(err).forEach((key) => {
      if (err[key] && Array.isArray(err[key]) && err[key].length > 0) {
        err[key].forEach((error: string) => {
          msg += `${error}\n`;
        });
      } else if (typeof err[key] === "string") {
        msg += `${err[key]}\n`;
      }
    });
  }
  return msg || "Something went wrong";
};

export const catchError = async (err: BotError<Context>) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`, err);
  const e = err.error;
  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
    if (e.description.includes("bot was blocked by the user")) return;

    await ctx.reply("An error occurred while handling your request.");
    await ctx.api.sendMessage(
      DEVELOPER_ID,
      `Error in request: ${e.description}`
    );
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    await ctx.reply(errorMsgBuilder(err));
    await ctx.reply("An unknown error occurred. Please try again later.");
    await ctx.api.sendMessage(DEVELOPER_ID, `Unknown error: ${e}`);
    console.error("Unknown error:", e);
  }
};
