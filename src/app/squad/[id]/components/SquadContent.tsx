"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SquadContent.module.scss";
import Image from "next/image";
import { Typography } from "@webbot/components/Typography";
import SquadBoost from "./SquadBoost";
import { useRouter } from "next/navigation";
import { DetailSquad } from "@/app/constants";
import { getTgUser } from "@/utils";

const cn = classNames.bind(styles);

export default function SquadContent({ squad }: { squad: DetailSquad | null }) {
  const [isBoostOpen, setIsBoostOpen] = useState(false);
  console.log("Squad: 😎😎😎😎😎 ", squad);
  const tgUser = getTgUser();

  const router = useRouter();

  return (
    <div className={cn("squad__content")}>
      <div className={cn("squad__content-info")}>
        <div className={cn("squad__content-info-item")}>
          <Image src="/icons/coin.svg" alt="squad" width={20} height={20} />
          <div className={cn("squad__content-info-text")}>
            <Typography variant="h4">51,087B</Typography>
            <p>mined in squad</p>
          </div>
        </div>
        <div className={cn("squad__content-info-left")}>
          <Typography variant="h4">{squad?.no_of_players}</Typography>
          <p>players</p>
        </div>
      </div>
      <button
        className={cn("squad__content-join")}
        onClick={() => {
          router.push(`/squad/join/${squad?.name}?userid=${tgUser?.user?.id}`);
        }}
      >
        Join squad
      </button>
      <button
        className={cn("squad__content-boost")}
        onClick={() => setIsBoostOpen(true)}
      >
        Boost
      </button>
      <SquadBoost isOpen={isBoostOpen} onClose={() => setIsBoostOpen(false)} />
    </div>
  );
}
