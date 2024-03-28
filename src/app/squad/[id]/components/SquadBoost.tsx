"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SquadBoost.module.scss";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";

const cn = classNames.bind(styles);

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SquadBoost = ({ isOpen, onClose }: Props) => {
  const [activeOption, setActiveOption] = useState(1);

  return (
    <div className={cn("squad__boost", { "squad__boost--open": isOpen })}>
      <button className={cn("squad__boost-close")} onClick={onClose}>
        <Icon
          icon="close"
          size="sm"
          className={cn("squad__boost-close-icon")}
        />
      </button>
      <Image
        src="/images/squad/ball.png"
        alt="Coin"
        width={87}
        height={87}
        className={cn("squad__boost-icon")}
      />
      <p className={cn("squad__boost-title")}>Boost your Squad for 24 hours</p>
      <p className={cn("squad__boost-description")}>
        And recruit more people. Anyone can donate to boost the Squad to the top{" "}
        <span> of the list. </span>
      </p>
      <p className={cn("squad__boost-description")}>
        The current price for a place on the list.
      </p>
      <p
        className={cn(
          "squad__boost-description",
          "squad__boost-description--bold"
        )}
      >
        Auction style:
      </p>
      <p className={cn("squad__boost-description")}>
        The squad with the higher bid goes to the higher position. Anyone can
        add bids to the same squad. And more bids to move your squad to the top.
      </p>
      <button
        className={cn("squad__boost-option", {
          "squad__boost-option--active": activeOption === 1,
        })}
        onClick={() => setActiveOption(1)}
      >
        1st - $200
      </button>

      <button
        className={cn("squad__boost-option", {
          "squad__boost-option--active": activeOption === 2,
        })}
        onClick={() => setActiveOption(2)}
      >
        2nd - $100
      </button>
      <button className={cn("squad__boost-button")} onClick={onClose}>
        Boost for 24 hours
      </button>
    </div>
  );
};

export default SquadBoost;
