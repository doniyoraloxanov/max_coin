"use client";

import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Specials.module.scss";
import { Typography } from "@webbot/components/Typography";
import { specials } from "@webbot/app/constants";
import Image from "next/image";
import RippleBase from "@webbot/components/RippleBase";
import Icon from "@webbot/components/Icon";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const cn = classNames.bind(styles);

type SpecialsProps = {
  id: number;
  image: string;
  title: string;
  amount: number;
  isCompleted: boolean;
};

const Specials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const chunkArray = (array: SpecialsProps[], size: number) => {
    return array.reduce((chunks: SpecialsProps[][], item, index) => {
      if (index % size === 0) {
        chunks.push([item]);
      } else {
        chunks[chunks.length - 1].push(item);
      }
      return chunks;
    }, []);
  };

  const sortedSpecials = [...specials].sort((a, b) => {
    if (a.isCompleted && !b.isCompleted) {
      return 1;
    }
    if (!a.isCompleted && b.isCompleted) {
      return -1;
    }
    return 0;
  });

  const specialsChunks: SpecialsProps[][] = chunkArray(sortedSpecials, 4);

  return (
    <div className={cn("specials")}>
      <Typography variant="h2" className={cn("specials__title")}>
        Specials
        <span>
          {activeIndex + 1}/{specialsChunks.length}
        </span>
      </Typography>

      <Swiper
        spaceBetween={20}
        slidesPerView={1.1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        onSwiper={(swiper) => setActiveIndex(swiper.activeIndex)}
        className={cn("specials__slider")}
        loop={false}
      >
        {specialsChunks.map((chunk, index) => {
          return (
            <SwiperSlide className={cn("specials__list")} key={index}>
              {chunk.splice(0, 4).map((special, i) => (
                <RippleBase
                  key={i}
                  className={
                    special.isCompleted
                      ? cn(
                          "specials__list-item",
                          "specials__list-item--completed"
                        )
                      : cn("specials__list-item")
                  }
                >
                  <div className={cn("specials__list-item-image")}>
                    <Image
                      src={special.image}
                      alt="Earn"
                      width={40}
                      height={40}
                    />
                  </div>
                  <div>
                    <p className={cn("specials__list-item-title")}>
                      {special.title}
                    </p>
                    <div className={cn("specials__list-item-bonus-wrap")}>
                      <span className={cn("specials__list-item-bonus")}>
                        <b>
                          +{" "}
                          {special.amount
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
                  {special.isCompleted ? (
                    <Icon
                      icon="tick"
                      className={cn("specials__list-item-icon")}
                    />
                  ) : (
                    <Icon
                      icon="right"
                      className={cn("specials__list-item-icon")}
                    />
                  )}
                </RippleBase>
              ))}
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Specials;
