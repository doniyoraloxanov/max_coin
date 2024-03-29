"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./LeagueHeader.module.scss";
import Image from "next/image";
import { useRouter } from "next/navigation";
import AvatarList from "@webbot/components/AvatarList";

const cn = classNames.bind(styles);

type Props = {};

const LeagueHeader = (props: Props) => {
  const router = useRouter();

  return (
    <div
      className={cn("league-header")}
      onClick={() => {
        router.push("/stats");
      }}
    >
      <AvatarList />
      <p className={cn("league-header__info")}>25,526,145 Maxcoiners</p>
      <div className={cn("league-header__stats")}>
        <span>Stats</span>
        <Image
          src="/icons/right-arrow.svg"
          alt="arrow-up"
          className={cn("league-header__arrow")}
          width={6}
          height={11}
        />
      </div>
    </div>
  );
};

export default LeagueHeader;
