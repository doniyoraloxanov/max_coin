"use client";

import { useEffect, useState } from "react";
import BackButton from "@/components/BackButton";
import { Box } from "@/components/Box";
import Icon from "@/components/Icon";
import RippleBase from "@/components/RippleBase";
import { Typography } from "@/components/Typography";
import AnimatedNumbers from "@/external/AnimatedNumbers";
import { getTelegram } from "@/utils/getters";
import classnames from "classnames/bind";
import { useRouter } from "next/navigation";
import styles from "./ReferalHome.module.scss";
import ReferredUsers from "./ReferredUsers";
import BonuseList from "./BonuseList";
import Image from "next/image";
import SendGift from "./SendGift";

const cn = classnames.bind(styles);

const ReferalHome = () => {
  const [isSendGiftOpen, setIsSendGiftOpen] = useState(true);

  const router = useRouter();
  const telegram = getTelegram();

  useEffect(() => {
    if (telegram && telegram.themeParams?.secondary_bg_color) {
      telegram.setHeaderColor(telegram.themeParams.secondary_bg_color);
    }
  }, [telegram]);

  return (
    <div className={cn("referral")}>
      <div className="container">
        <Box className={cn("referral__main")}>
          <BackButton isBackable={true} onClick={router.back} />
          <Typography className={cn("referral__main-title")} variant="h1">
            MOB
          </Typography>
          <RippleBase
            className={cn("referral__main-leaders")}
            onClick={() => {
              router.push("/referrals/leaderboard");
            }}
          >
            <span className={cn("referral__main-leaders-coins")}>
              +
              <AnimatedNumbers
                includeComma
                transitions={(index) => ({
                  type: "spring",
                  duration: index + 0.3,
                })}
                className={cn("container")}
                fontStyle={{
                  fontSize: 14,
                  color: "#efb832",
                  fontWeight: "bold",
                }}
                animateToNumber={27.5}
              />
              <Image src="/icons/coin.svg" alt="coin" width={20} height={20} />
            </span>
            <span className={cn("referral__main-leaders-text")}>
              <b> Top 300</b> leaders
            </span>
            <Icon
              className={cn("referral__main-leaders-right")}
              icon="right"
              size="sm"
              color="text"
            />
          </RippleBase>

          <BonuseList />

          <Typography className={cn("referral__main-heading")} variant="h2">
            Frends list
          </Typography>

          <ReferredUsers />

          <button
            onClick={() => {
              telegram?.openLink(
                `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
              );
              telegram?.close();
            }}
            className={cn("referral__button")}
          >
            Invite a fren
          </button>
          <SendGift
            onClose={() => setIsSendGiftOpen(false)}
            isOpen={isSendGiftOpen}
          />
        </Box>
      </div>
    </div>
  );
};

export default ReferalHome;
