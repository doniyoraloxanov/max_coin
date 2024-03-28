"use client";

import React from "react";
import classNames from "classnames/bind";
import styles from "./League.module.scss";

import LeagueHeader from "./components/LeagueHeader";
import LeagueSwiper from "./components/LeagueSwiper";
import LeagueSwitch from "./components/LeagueSwitch";
import TabList from "@webbot/components/TabList";
import BackButton from "@webbot/components/BackButton";

import { useRouter } from "next/navigation";

const cn = classNames.bind(styles);

type Props = {};

const page = (props: Props) => {
  const router = useRouter();

  return (
    <div className={cn("league")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />

      <div className="container">
        <LeagueHeader />
        <LeagueSwiper />
        <LeagueSwitch />
        <TabList />
      </div>
    </div>
  );
};

export default page;
