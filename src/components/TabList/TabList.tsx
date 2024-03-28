"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./TabList.module.scss";
import { squadMembers } from "@/app/constants";
import Avatar from "@webbot/components/Avatar/Avatar";
import Image from "next/image";

const cn = classNames.bind(styles);

type Props = {};

const TabList = (props: Props) => {
  const [activeTab, setActiveTab] = useState("day");

  return (
    <div className={cn("tablist__list")}>
      <div className={cn("tablist__list-tabs")}>
        <div
          className={cn("tablist__list-tab", {
            "tablist__list-tab--active": activeTab === "day",
          })}
          onClick={() => setActiveTab("day")}
        >
          Day
        </div>
        <div
          className={cn("tablist__list-tab", {
            "tablist__list-tab--active": activeTab === "week",
          })}
          onClick={() => setActiveTab("week")}
        >
          Week
        </div>
      </div>
      <div className={cn("tablist__list-members")}>
        {squadMembers.map((member) => (
          <div key={member.id} className={cn("tablist__list-item")}>
            <Image
              src="/icons/first.svg"
              alt="First"
              width={28}
              height={28}
              className={cn("tablist__list-item-icon")}
            />

            <Avatar
              url={member?.image}
              name={member.name}
              className={cn("tablist__list-item-avatar")}
            />

            <div className={cn("tablist__list-item-info")}>
              <p className={cn("tablist__list-item-name")}>{member.name}</p>
              <div className={cn("tablist__list-item-amount")}>
                <Image
                  src="/icons/coin.svg"
                  alt="Coin"
                  width={15}
                  height={15}
                />
                <span>{member.amount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabList;
