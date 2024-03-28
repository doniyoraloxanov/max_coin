"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./SquadItem.module.scss";
import Icon from "@webbot/components/Icon";
import Image from "next/image";
import { useRouter } from "next/navigation";
import RippleBase from "@webbot/components/RippleBase";
import { getRandomIcon } from "@/app/constants";
import { getTgUser } from "@/utils";

const cn = classNames.bind(styles);

type Props = {
  squad: {
    name: string;
    no_of_players: number;
  };
};

const SquadItem = ({ squad: { name, no_of_players } }: Props) => {
  const router = useRouter();
  const tgUser = getTgUser();

  return (
    <RippleBase
      className={cn("squad__item")}
      onClick={() => {
        router.push(`/squad/${name}?userid=${tgUser?.user?.id}`);
      }}
    >
      <Image
        src={getRandomIcon()}
        alt="squad__item"
        width={38}
        height={38}
        className={cn("squad__item-image")}
      />
      <div>
        <p className={cn("squad__item-title")}>{name}</p>
        <div className={cn("squad__item-level-wrapper")}>
          {/* <Image src={icon} alt="squad__item-icon" width={14} height={14} /> */}
          <span className="squad__item-level">{no_of_players}</span>
        </div>
      </div>
      <Icon icon="right" className={cn("squad__item-icon")} size="sm" />
    </RippleBase>
  );
};

export default SquadItem;
