"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SquadList.module.scss";
import { squadMembers } from "@/app/constants";
import Avatar from "@webbot/components/Avatar/Avatar";
import Image from "next/image";
import { DetailSquad } from "@/app/constants";

const cn = classNames.bind(styles);

type Props = {
  squad: DetailSquad;
};

const SquadList = ({ squad }: Props) => {
  const [activeTab, setActiveTab] = useState("day");

  return (
    <div className={cn("squad__list")}>
      <div className={cn("squad__list-tabs")}>
        <div
          className={cn("squad__list-tab", {
            "squad__list-tab--active": activeTab === "day",
          })}
          onClick={() => setActiveTab("day")}
        >
          Day
        </div>
        <div
          className={cn("squad__list-tab", {
            "squad__list-tab--active": activeTab === "week",
          })}
          onClick={() => setActiveTab("week")}
        >
          Week
        </div>
      </div>
      <div className={cn("squad__list-members")}>
        {squad?.members?.map((member) => (
          <div key={member.user_id} className={cn("squad__list-item")}>
            <Image
              src="/icons/first.svg"
              alt="First"
              width={28}
              height={28}
              className={cn("squad__list-item-icon")}
            />

            <Avatar
              // url={member?.image}
              name={member.first_name}
              className={cn("squad__list-item-avatar")}
            />

            <div className={cn("squad__list-item-info")}>
              <p className={cn("squad__list-item-name")}>{member.first_name}</p>
              <div className={cn("squad__list-item-amount")}>
                <Image
                  src="/icons/coin.svg"
                  alt="Coin"
                  width={15}
                  height={15}
                />
                <span>{member.balance}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SquadList;
