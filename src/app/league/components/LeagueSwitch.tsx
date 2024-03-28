"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./LeagueSwitch.module.scss";

const cn = classNames.bind(styles);

type Props = {};

const LeagueSwitch = (props: Props) => {
  const [active, setActive] = useState(1);

  return (
    <div className={cn("league-switch")}>
      <div
        className={cn("league-switch__box", {
          "league-switch__box--active": active === 1,
        })}
      ></div>
      <p
        className={cn("league-switch__item", {
          "league-switch__item--active": active === 1,
        })}
        onClick={() => setActive(1)}
      >
        Miners
      </p>
      <p
        className={cn("league-switch__item", {
          "league-switch__item--active": active === 2,
        })}
        onClick={() => setActive(2)}
      >
        Squads
      </p>
    </div>
  );
};

export default LeagueSwitch;
