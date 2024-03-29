"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BoostBoosters.module.scss";
import { Typography } from "@webbot/components/Typography";
import Image from "next/image";
import RippleBase from "@webbot/components/RippleBase";
import InfoBox from "@webbot/components/InfoBox";
import { useRouter } from "next/navigation";
import BackButton from "@webbot/components/BackButton";

const cn = classNames.bind(styles);

type Props = {};

const BoostBoosters = (props: Props) => {
  const [multitapOpen, setMultitapOpen] = useState(false);
  const [rechargingOpen, setRechargingOpen] = useState(false);
  const [energyLimitOpen, setEnergyLimitOpen] = useState(false);

  const router = useRouter();

  return (
    <div className={cn("boosters")}>
      <BackButton isBackable onClick={() => router.back()} />
      <Typography variant="h2" className={cn("header__heading")}>
        Boosters
      </Typography>

      <div className={cn("boosters__list")}>
        <RippleBase className={cn("boosters__list-item")}>
          <div className={cn("boosters__list-item-icon")}>
            <Image
              src="/images/boosters/auto-tap-bot.png"
              alt="boost"
              width={48}
              height={48}
            />
          </div>
          <div>
            <p className={cn("boosters__list-item-title")}>
              Auto tap bot
              <span>off</span>
            </p>
            <p className={cn("boosters__list-item-description")}>
              Taps when you are asleep
            </p>
            <div className={cn("boosters__list-item-limit")}>
              <Image src="/icons/lock.svg" alt="boost" width={14} height={14} />
              <span>20,000</span>
            </div>
          </div>
        </RippleBase>
        <RippleBase
          className={cn("boosters__list-item")}
          onClick={() => setMultitapOpen(true)}
        >
          <div className={cn("boosters__list-item-icon")}>
            <Image
              src="/images/boosters/multitap.png"
              alt="boost"
              width={48}
              height={48}
            />
          </div>
          <div>
            <p className={cn("boosters__list-item-title")}>Multitap</p>

            <div className={cn("boosters__list-item-value")}>
              <div className={cn("boosters__list-item-value-info")}>
                <Image
                  src="/icons/coin.svg"
                  alt="coin"
                  width={16}
                  height={16}
                />
                <span>100</span>
              </div>
              <div className={cn("boosters__list-item-value-level")}>
                <span
                  className={cn("boosters__list-item-value-level-icon")}
                ></span>
                <span>0 lvl</span>
              </div>
            </div>
          </div>
        </RippleBase>
        <RippleBase
          className={cn("boosters__list-item")}
          onClick={() => setRechargingOpen(true)}
        >
          <div className={cn("boosters__list-item-icon")}>
            <Image
              src="/images/lightning.png"
              alt="boost"
              width={52}
              height={52}
            />
          </div>
          <div>
            <p className={cn("boosters__list-item-title")}>Recharging speed</p>
            <div className={cn("boosters__list-item-value")}>
              <div className={cn("boosters__list-item-value-info")}>
                <Image
                  src="/icons/coin.svg"
                  alt="coin"
                  width={16}
                  height={16}
                />
                <span>2000</span>
              </div>
              <div className={cn("boosters__list-item-value-level")}>
                <span
                  className={cn("boosters__list-item-value-level-icon")}
                ></span>
                <span>0 lvl</span>
              </div>
            </div>
          </div>
        </RippleBase>
        <RippleBase
          className={cn("boosters__list-item")}
          onClick={() => setEnergyLimitOpen(true)}
        >
          <div className={cn("boosters__list-item-icon")}>
            <Image
              src="/images/boosters/battery.png"
              alt="boost"
              width={46}
              height={56}
            />
          </div>
          <div>
            <p className={cn("boosters__list-item-title")}>Energy limit</p>

            <div className={cn("boosters__list-item-value")}>
              <div className={cn("boosters__list-item-value-info")}>
                <Image
                  src="/icons/coin.svg"
                  alt="coin"
                  width={16}
                  height={16}
                />
                <span>100</span>
              </div>
              <div className={cn("boosters__list-item-value-level")}>
                <span
                  className={cn("boosters__list-item-value-level-icon")}
                ></span>
                <span>0 lvl</span>
              </div>
            </div>
          </div>
        </RippleBase>
      </div>
      <InfoBox open={multitapOpen} onClose={() => setMultitapOpen(false)}>
        <div className={cn("boosters__info-box")}>
          <Image
            src="/images/boosters/multitap.png"
            alt="boost"
            width={160}
            height={160}
          />
        </div>
        <h2>Multitap</h2>
        <p>
          Increase amount of Max <br />
          you can earn per tap
          <br />
          <br />
          +1 per tap for each level
        </p>
        <div className={cn("boosters__info-container")}>
          <Image
            src="/icons/coin.svg"
            alt="boost"
            width={30}
            height={30}
            className={cn("boosters__info-icon")}
          />
          <Typography variant="h2" className={cn("boosters__info-value")}>
            100
          </Typography>
          <Typography variant="h2" className={cn("boosters__info-level")}>
            / Level 0
          </Typography>
        </div>
        <button className={cn("boosters__info-button")}>Get</button>
      </InfoBox>

      <InfoBox open={rechargingOpen} onClose={() => setRechargingOpen(false)}>
        <div className={cn("boosters__info-box")}>
          <Image
            src="/images/lightning.png"
            alt="boost"
            width={160}
            height={160}
          />
        </div>
        <h2>Recharging speed</h2>
        <p>
          Increases the energy recharging speed. <br /> <br />
          +1/ sec for each level. <br />3 levels max limit.
        </p>
        <div className={cn("boosters__info-container")}>
          <Image
            src="/icons/coin.svg"
            alt="boost"
            width={30}
            height={30}
            className={cn("boosters__info-icon")}
          />
          <Typography variant="h2" className={cn("boosters__info-value")}>
            2000
          </Typography>
          <Typography variant="h2" className={cn("boosters__info-level")}>
            / Level 0
          </Typography>
        </div>
        <button className={cn("boosters__info-button")}>Get</button>
      </InfoBox>
      <InfoBox open={energyLimitOpen} onClose={() => setEnergyLimitOpen(false)}>
        <div className={cn("boosters__info-box")}>
          <Image
            src="/images/boosters/battery.png"
            alt="boost"
            width={150}
            height={160}
          />
        </div>
        <h2>Energy limit</h2>
        <p>
          Increase your energy limit, so you can mine more per session <br />{" "}
          <br />
          +500 Max for each level.
        </p>
        <div className={cn("boosters__info-container")}>
          <Image
            src="/icons/coin.svg"
            alt="boost"
            width={30}
            height={30}
            className={cn("boosters__info-icon")}
          />
          <Typography variant="h2" className={cn("boosters__info-value")}>
            100
          </Typography>
          <Typography variant="h2" className={cn("boosters__info-level")}>
            / Level 0
          </Typography>
        </div>
        <button className={cn("boosters__info-button")}>Get</button>
      </InfoBox>
    </div>
  );
};

export default BoostBoosters;
