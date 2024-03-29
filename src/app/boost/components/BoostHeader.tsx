"use client";

import { refillEnergyAction } from "@/app/actions/score";
import { getTgUser } from "@/utils";
import InfoBox from "@webbot/components/InfoBox";
import RippleBase from "@webbot/components/RippleBase";
import { Typography } from "@webbot/components/Typography";
import { GetSingleUser } from "@webbot/utils/getSingleUser";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./BoostHeader.module.scss";

const cn = classNames.bind(styles);

const BoostHeader = () => {
  const [turboOpen, setTurboOpen] = useState(false);
  const [energyOpen, setEnergyOpen] = useState(false);
  const tgUser = getTgUser();
  const { user, mutate: refetch } = GetSingleUser(tgUser?.user?.id.toString()!);

  const handleRefillEnergy = async () => {
    try {
      await refillEnergyAction(tgUser?.user?.id.toString()!);
      setEnergyOpen(false);
    } catch (e) {
      console.error("Error occurred while refilling energy:", e);
    }
  };

  return (
    <div className={cn("header")}>
      <p className={cn("header__balance-title")}>Your Balance</p>
      <div className={cn("header__balance-container")}>
        <Image src="/icons/coin.svg" alt="boost" width={40} height={40} />
        <Typography variant="h1" className={cn("header__balance")}>
          {user?.totalScore}
        </Typography>
      </div>
      <Link href="/boost/works" className={cn("header__link")}>
        How boosts works
      </Link>

      <Typography variant="h2" className={cn("header__heading")}>
        Free daily boosters
      </Typography>
      <div className={cn("header__boosters")}>
        <RippleBase
          className={cn("header__booster")}
          onClick={() => {
            setTurboOpen(true);
            setEnergyOpen(false);
          }}
        >
          <div>
            <p className={cn("header__booster-title")}>Turbo</p>
            <p className={cn("header__booster-value")}>3/3 available</p>
          </div>
          <Image src="/icons/rocket.svg" alt="boost" width={43} height={36} />
        </RippleBase>
        <RippleBase
          className={cn("header__booster")}
          onClick={() => {
            setEnergyOpen(true);
            setTurboOpen(false);
          }}
        >
          <div>
            <p className={cn("header__booster-title")}>Full Energy</p>
            <p className={cn("header__booster-value")}>3/3 available</p>
          </div>
          <Image
            src="/images/lightning.png"
            alt="boost"
            width={40}
            height={40}
          />
        </RippleBase>
      </div>
      <InfoBox open={turboOpen} onClose={() => setTurboOpen(false)}>
        <Image
          src="/icons/rocket.svg"
          alt="boost"
          width={184}
          height={154}
          className={cn("header__info-image")}
        />
        <h2>Turbo</h2>
        <p>
          Get a Turbo boost now. <br />
          Be ready to catch the rocket!
        </p>
        <div className={cn("header__info-container")}>
          <Image
            src="/icons/coin.svg"
            alt="boost"
            width={30}
            height={30}
            className={cn("header__info-icon")}
          />
          <Typography variant="h2" className={cn("header__info-value")}>
            Free
          </Typography>
        </div>
        <button className={cn("boosters__info-button")}>Get</button>
      </InfoBox>
      <InfoBox
        open={energyOpen}
        onClose={() => setEnergyOpen(false)}
        refillEnergy={handleRefillEnergy}
      >
        <Image
          src="/images/lightning.png"
          alt="boost"
          width={184}
          height={154}
          className={cn("header__info-image")}
        />
        <h2>Full Energy</h2>
        <p>Recharge your energy to the limit and do another round of mining</p>
        <div className={cn("header__info-container")}>
          <Image
            src="/icons/coin.svg"
            alt="boost"
            width={30}
            height={30}
            className={cn("header__info-icon")}
          />
          <Typography variant="h2" className={cn("header__info-value")}>
            Free
          </Typography>
        </div>
        <button className={cn("header__info-button")}>Get</button>
      </InfoBox>
    </div>
  );
};

export default BoostHeader;
