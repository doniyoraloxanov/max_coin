"use client";

import { levels } from "@/app/constants";
import { Typography } from "@/components/Typography";
import classNames from "classnames/bind";
import styles from "./DetailsContent.module.scss";
import Image from "next/image";
import { Box } from "@/components/Box";
import { getTelegram } from "@/utils/getters";

const cn = classNames.bind(styles);

const ReferralContent = () => {
  const telegram = getTelegram();

  return (
    <div className={cn("content")}>
      <Typography variant="h2">Invite Fren, get bonuses</Typography>
      <Box className={cn("content-list")}>
        <Box className={cn("content-list__item")}>
          <Box className={cn("content-list__item-sticker")}>
            <Image src="/icons/coin.svg" alt="tick" width={40} height={40} />
          </Box>
          <div>
            <Typography className={cn("content-list__item-title")} variant="h4">
              Invite fren
            </Typography>
            <div className={cn("content-list__item-text")}>
              <Image src="/icons/coin.svg" alt="tick" width={15} height={15} />
              <span className={cn("content-list__item-text-number")}>
                2,500
              </span>
              <span>for you and fren</span>
            </div>
          </div>
        </Box>
        <Box className={cn("content-list__item")}>
          <Box className={cn("content-list__item-sticker")}>
            <Image
              src="/icons/tg-premium.svg"
              alt="tick"
              width={40}
              height={40}
            />
          </Box>
          <div>
            <Typography className={cn("content-list__item-title")} variant="h4">
              Fren with <span>Telegram Premium</span>
            </Typography>
            <div className={cn("content-list__item-text")}>
              <Image src="/icons/coin.svg" alt="tick" width={15} height={15} />
              <span className={cn("content-list__item-text-number")}>
                50,000
              </span>
              <span>for you and fren </span>
            </div>
          </div>
        </Box>
      </Box>

      <Typography variant="h2">Fren level up bonus</Typography>
      <p className={cn("content__heading")}>
        <span>Level up</span>
        <span>Regular</span>
        <span>Premium</span>
      </p>

      <div className={cn("content__list")}>
        {levels.map((bonus, index) => (
          <div key={index} className={cn("content__item")}>
            <div className={cn("content__item-title")}>
              <Image
                src={bonus.icon}
                alt={bonus.title}
                width={25}
                height={28}
              />
              <Typography variant="h3">{bonus.title}</Typography>
            </div>

            <Typography variant="h4" className={cn("content__point")}>
              +{" "}
              {bonus.points.regular
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
            <Typography variant="h4" className={cn("content__point")}>
              +{" "}
              {bonus.points.regular
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </Typography>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          telegram?.openLink(
            `${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
          );
          telegram?.close();
        }}
        className={cn("content__button")}
      >
        Invite Frens
      </button>
    </div>
  );
};

export default ReferralContent;
