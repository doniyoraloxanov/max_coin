import React from "react";
import classNames from "classnames/bind";
import styles from "./EarnTop.module.scss";
import Image from "next/image";
import { Typography } from "@/components/Typography";
import Link from "next/link";
import RippleBase from "@webbot/components/RippleBase";
import Icon from "@webbot/components/Icon";

const cn = classNames.bind(styles);

type Props = {};

const EarnTop = (props: Props) => {
  return (
    <div className={cn("top")}>
      <Image src="/images/coin.png" alt="Earn" width={126} height={126} />
      <Typography variant="h1">Earn more coins</Typography>
      <Link href="earn" className={cn("top__link")}>
        Full Guide
      </Link>
      <RippleBase className={cn("top__item")}>
        <div className={cn("top__item-image")}>
          <Image
            src="/images/earn/earn-top.png"
            alt="Earn"
            width={40}
            height={40}
          />
        </div>
        <div>
          <p className={cn("top__item-title")}>Invite bonus</p>
          <div className={cn("top__item-bonus-wrap")}>
            <span className={cn("top__item-bonus")}>
              <b>up to 100k</b>
            </span>
            <Image src="/images/coin.png" alt="Coin" width={16} height={16} />
            <span className={cn("top__item-bonus")}>for fren</span>
          </div>
        </div>
        <Icon icon="right" className={cn("top__item-icon")} />
      </RippleBase>
    </div>
  );
};

export default EarnTop;
