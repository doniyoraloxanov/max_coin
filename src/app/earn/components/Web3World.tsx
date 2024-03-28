"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Web3World.module.scss";
import { Typography } from "@webbot/components/Typography";
import { web3world as data } from "@webbot/app/constants";
import Image from "next/image";
import RippleBase from "@webbot/components/RippleBase";
import Icon from "@webbot/components/Icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cn = classNames.bind(styles);

type Web3WorldProps = {
  id: number;
  image: string;
  title: string;
  league: string;
};

const Web3World = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const chunkArray = (array: Web3WorldProps[], size: number) => {
    return array.reduce((chunks: Web3WorldProps[][], item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const chunkedData: Web3WorldProps[][] = chunkArray(data, 4);

  return (
    <div className={cn("webworld")}>
      <Typography variant="h2" className={cn("webworld__title")}>
        Web3 world
        <span>
          {activeIndex + 1}/{chunkedData.length}
        </span>
      </Typography>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={cn("webworld__slider")}
        loop={false}
      >
        {chunkedData.map((chunk, index) => {
          return (
            <SwiperSlide className={cn("webworld__list")} key={index}>
              {chunk.splice(0, 4).map((special, i) => (
                <RippleBase key={i} className={cn("webworld__list-item")}>
                  <div className={cn("webworld__list-item-image")}>
                    <Image
                      src={special.image}
                      alt="Earn"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className={cn("webworld__list-item-title")}>
                      {special.title}
                    </p>
                    <div className={cn("webworld__list-item-league")}>
                      <Image
                        src="/icons/lock.svg"
                        alt="Coin"
                        width={11}
                        height={11}
                      />
                      <span>{special.league} league</span>
                    </div>
                  </div>

                  <Icon
                    icon="right"
                    className={cn("webworld__list-item-icon")}
                  />
                </RippleBase>
              ))}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Web3World;
