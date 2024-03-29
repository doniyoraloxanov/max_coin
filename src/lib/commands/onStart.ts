import { getReferrerId } from "@/lib/helpers/getters";
import {
  INDIRECT_INVITE_POINTS,
  PointReasons,
  REFERRAL_ONE_USER,
} from "@/utils/constant";
import { prisma } from "@/utils/prisma";
import { ReferalStatus } from "@prisma/client";
import { BotContext } from "@webbot/lib/botContext";
import { InlineKeyboard } from "grammy";

const onStart = async (ctx: BotContext) => {
  console.log("started", ctx.from);

  if (ctx.match) {
    if (ctx.match && ctx.match.includes("refer")) {
      await ctx.replyWithHTML(
        ctx.t("excitementMess", {
          link: `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=${ctx.from?.id}`,
        }),
        {
          reply_markup: new InlineKeyboard().url(
            "Share Referral Link",
            `https://t.me/share/url?text=🎁 Join CoinMax and start Earning 🎁🎁🎁 on CoinMax&url=https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=${ctx.from?.id}`
          ),
        }
      );

      return;
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        id: ctx.from?.id.toString(),
      },
    });

    const referrerId = getReferrerId(ctx.match);

    if (!existingUser && referrerId) {
      const referrer = await prisma.user.findUnique({
        where: {
          id: referrerId.toString(),
        },
        include: {
          referredUsers: true,
        },
      });

      if (referrer) {
        const createdUser = await prisma.user.create({
          data: {
            id: ctx.from?.id.toString(),
            username: ctx.from?.username,
            firstName: ctx.from?.first_name!,
            lastName: ctx.from?.last_name,
            languageCode: ctx.from?.language_code,
            referralStatus: ReferalStatus.ACTIVE,
            referredById: referrer.id,
          },
        });

        // ctx.session.user = createdUser;

        // TODO: One user referral points: 100
        try {
          await prisma.point.create({
            data: {
              amount: REFERRAL_ONE_USER,
              pointReason: PointReasons.REFERRAL,
              userId: referrer.id,
            },
          });

          await ctx.api.sendMessage(
            String(referrerId),
            "Yout got 100 points for inviting a user."
          );
        } catch (err) {
          console.log(
            "Error is occured while giving one user referral point",
            err
          );
        }

        // TODO: Indirect referral points: 20
        try {
          if (referrer.referredById) {
            await prisma.point.create({
              data: {
                amount: INDIRECT_INVITE_POINTS,
                pointReason: PointReasons.INDIRECT_REFERRAL,
                userId: referrer.referredById,
              },
            });

            await ctx.api.sendMessage(
              String(referrer.referredById),
              "Yout got 20 points for indirect referral."
            );
          }
        } catch (err) {
          console.log(
            "Error is occured while giving indirect referral point",
            err
          );
        }
      }
    }
  } else {
    const createdUser = await prisma.user.upsert({
      where: {
        id: ctx.from?.id.toString(),
      },
      update: {
        id: ctx.from?.id.toString(),
        username: ctx.from?.username,
        firstName: ctx.from?.first_name!,
        lastName: ctx.from?.last_name,
        languageCode: ctx.from?.language_code,
      },
      create: {
        id: ctx.from?.id.toString(),
        username: ctx.from?.username,
        firstName: ctx.from?.first_name!,
        lastName: ctx.from?.last_name,
        languageCode: ctx.from?.language_code,
      },
    });

    // ctx.session.user = createdUser;
  }

  await ctx.reply("Hello!, Welcome to RadndomCoin", {
    reply_markup: new InlineKeyboard().webApp("Launch App", process.env.HOST!),
  });
};
export { onStart };
