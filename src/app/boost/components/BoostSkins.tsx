import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./BoostSkins.module.scss";
import { Typography } from "@webbot/components/Typography";
import { skins } from "@webbot/app/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import InfoBox from "@webbot/components/InfoBox";
import RippleBase from "@webbot/components/RippleBase";

const cn = classNames.bind(styles);

type Props = {
  id: number;
  image: string;
  title: string;
  isEnabled: boolean;
  task?: string;
};

const BoostSkins = () => {
  const [openDragon, setOpenDragon] = useState(false);

  const chunkArray = (array: Props[], size: number) => {
    return array.reduce((chunks: Props[][], item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const skinsData = chunkArray(skins, 4);

  return (
    <div className={cn("skins")}>
      <Typography variant="h2" className={cn("header__heading")}>
        Buy Skins
      </Typography>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={() => console.log("slide change")}
        className={cn("skins__slider")}
        loop={false}
      >
        {skinsData.map((chunk, index) => {
          return (
            <SwiperSlide className={cn("skins__list")} key={index}>
              {chunk.splice(0, 4).map((skin, i) => (
                <RippleBase
                  key={skin.id}
                  className={cn("skins__item", {
                    "skins__item--enabled": skin.isEnabled,
                  })}
                  onClick={() => {
                    setOpenDragon(true);
                  }}
                >
                  <div className={cn("skins__item-icon")}>
                    <Image
                      src={skin.image}
                      alt={skin.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <p className={cn("skins__item-title")}>{skin.title}</p>
                    {skin.isEnabled ? (
                      <p className={cn("skins__item-status")}>enabled</p>
                    ) : (
                      <div className={cn("skins__item-task-wrapper")}>
                        <Image
                          src="/icons/lock.svg"
                          alt="Checkmark"
                          width={11}
                          height={11}
                        />
                        {skin.task ? (
                          <p className={cn("skins__item-task")}>{skin.task}</p>
                        ) : (
                          <p className={cn("skins__item-task")}>
                            Task is not completed
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </RippleBase>
              ))}
            </SwiperSlide>
          );
        })}
      </Swiper>
      <InfoBox open={openDragon} onClose={() => setOpenDragon(false)}>
        <Image
          src="/images/boosters/dragon.png"
          alt="Pizza"
          width={180}
          height={180}
        />
        <h2>Dragon skin</h2>
        <p>I’ll pay 10,00 notcoins for dragon skin</p>
        <button className={cn("skins__info-button")}>Apply Skin</button>
      </InfoBox>
    </div>
  );
};

export default BoostSkins;
