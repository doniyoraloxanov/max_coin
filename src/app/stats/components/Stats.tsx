"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Stats.module.scss";
import Image from "next/image";
import AvatarList from "@webbot/components/AvatarList";
import InfoBox from "@webbot/components/InfoBox";

const cn = classNames.bind(styles);

type Props = {};

const Stats = (props: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("stats")}>
      <div className={cn("stats__content")}>
        <p className={cn("stats__title")}>Total Max Coin Balance</p>
        <div className={cn("stats__balance")}>
          <Image src="/icons/coin.svg" alt="Max Coin" width={30} height={30} />
          <p className={cn("stats__balance__value")}>29,908,678,098,898</p>
        </div>
        <p
          className={cn("stats__description")}
          onClick={() => {
            setOpen(true);
          }}
        >
          What does that number mean
        </p>
        <ul className={cn("stats__list")}>
          <li className={cn("stats__list-item")}>
            <AvatarList size={47} />
            <div className={cn("stats__list-item-content")}>
              <p className={cn("stats__list-item-content-value")}>26,890,974</p>
              <p className={cn("stats__list-item-content-description")}>
                Total Players
              </p>
            </div>
          </li>
          <li className={cn("stats__list-item")}>
            <AvatarList size={47} />
            <div className={cn("stats__list-item-content")}>
              <p className={cn("stats__list-item-content-value")}>2,890,974</p>
              <p className={cn("stats__list-item-content-description")}>
                Total Players
              </p>
            </div>
          </li>
          <li className={cn("stats__list-item")}>
            <AvatarList size={47} />
            <div className={cn("stats__list-item-content")}>
              <p className={cn("stats__list-item-content-value")}>90,890</p>
              <p className={cn("stats__list-item-content-description")}>
                Online
              </p>
            </div>
          </li>
        </ul>
        <button className={cn("stats__button")}>Invite a friend</button>
      </div>
      <InfoBox
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
        <h3 className={cn("stats__info-title")}>Details</h3>
        <div className={cn("stats__info-balance")}>
          <span className={cn("stats__info-subtitle")}>Total Max Balance</span>
          <span className={cn("stats__info-value")}>34,908,678,098,898</span>
        </div>
        <div className={cn("stats__info-earned")}>
          <span className={cn("stats__info-subtitle")}>Total Earned</span>
          <span className={cn("stats__info-value")}>46,908,678,098,898</span>
        </div>
        <div className={cn("stats__info-spent")}>
          <span className={cn("stats__info-subtitle")}>Spend & Burned</span>
          <span className={cn("stats__info-value--spent")}>
            -11,908,678,098,898
          </span>
        </div>
        <button className={cn("stats__info-button")}>Okay</button>
      </InfoBox>
    </div>
  );
};

export default Stats;
