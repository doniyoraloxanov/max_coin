import React from "react";
import classNames from "classnames/bind";
import styles from "./Boosters.module.scss";
import { Typography } from "@webbot/components/Typography";
import Image from "next/image";
import RippleBase from "@webbot/components/RippleBase";
import Icon from "@webbot/components/Icon";
import { earnBoosters } from "@webbot/app/constants";

const cn = classNames.bind(styles);

type Props = {};

const Boosters = (props: Props) => {
  return (
    <div className={cn("boosters")}>
      <Typography variant="h2" className={cn("boosters__title")}>
        Boosters
      </Typography>
      <div className={cn("boosters__list")}>
        {earnBoosters.map((booster) => (
          <RippleBase className={cn("boosters__list-item")}>
            <div className={cn("boosters__list-item-image")}>
              <Image src={booster.image} alt="Earn" width={40} height={40} />
            </div>
            <div>
              <p className={cn("boosters__list-item-title")}>{booster.title}</p>
              <div className={cn("boosters__list-item-bonus-wrap")}>
                <span className={cn("boosters__list-item-bonus")}>
                  <b>
                    +{" "}
                    {booster.amount
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </b>
                </span>
                <Image
                  src="/images/coin.png"
                  alt="Coin"
                  width={16}
                  height={16}
                />
              </div>
            </div>
            <Icon icon="right" className={cn("boosters__list-item-icon")} />
          </RippleBase>
        ))}
      </div>
    </div>
  );
};

export default Boosters;
