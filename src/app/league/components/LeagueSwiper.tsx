"use client";

import { useRef } from "react";
import classNames from "classnames/bind";
import styles from "./LeagueSwiper.module.scss";
import Image from "next/image";

import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const cn = classNames.bind(styles);

type Props = {};

const LeagueSwiper = (props: Props) => {
  const swiper = useSwiper();
  const swiperRef = useRef(null);

  return (
    <div className={cn("league-swiper-container")}>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={() => {
          console.log("slide change");
        }}
        ref={swiperRef}
        onSwiper={() => {}}
        className={cn("league-swiper")}
        loop={true}
        navigation={{
          nextEl: ".league-swiper__arrow-right",
          prevEl: ".league-swiper__arrow-left",
        }}
        effect="fade"
        modules={[Navigation, EffectFade]}
      >
        <SwiperSlide className={cn("league-swiper__slide")}>
          <div className={cn("league-swiper__item")}>
            <Image
              src="/images/league/bronze-cup.svg"
              alt="avatar"
              className={cn("league-swiper__image")}
              width={140}
              height={140}
            />
            <p className={cn("league-swiper__title")}>Bronze League</p>
            <p className={cn("league-swiper__subtitle")}>113/ / 5K</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn("league-swiper__slide")}>
          <div className={cn("league-swiper__item")}>
            <Image
              src="/images/league/silver-cup.svg"
              alt="avatar"
              className={cn("league-swiper__image")}
              width={140}
              height={140}
            />
            <p className={cn("league-swiper__title")}>Silver League</p>
            <p className={cn("league-swiper__subtitle")}>from 5K MOB</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn("league-swiper__slide")}>
          <div className={cn("league-swiper__item")}>
            <Image
              src="/images/league/gold-cup.svg"
              alt="avatar"
              className={cn("league-swiper__image")}
              width={140}
              height={140}
            />
            <p className={cn("league-swiper__title")}>Gold League</p>
            <p className={cn("league-swiper__subtitle")}>from 1M MOB</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn("league-swiper__slide")}>
          <div className={cn("league-swiper__item")}>
            <Image
              src="/images/league/platinum-cup.svg"
              alt="avatar"
              className={cn("league-swiper__image")}
              width={140}
              height={140}
            />
            <p className={cn("league-swiper__title")}>Platinum League</p>
            <p className={cn("league-swiper__subtitle")}>from 5M MOB</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={cn("league-swiper__slide")}>
          <div className={cn("league-swiper__item")}>
            <Image
              src="/images/league/diamond-cup.svg"
              alt="avatar"
              className={cn("league-swiper__image")}
              width={140}
              height={140}
            />
            <p className={cn("league-swiper__title")}>Diamond League</p>
            <p className={cn("league-swiper__subtitle")}>from 10M MOB</p>
          </div>
        </SwiperSlide>
        <div className={cn("league-swiper__arrows")}>
          <button
            className={cn("league-swiper__arrow-left", "league-swiper__arrow")}
            onClick={() => {
              swiper.slidePrev();
            }}
          >
            <Image
              src="/icons/arrow-left.svg"
              alt="avatar"
              width={8}
              height={13}
            />
          </button>
          <button
            className={cn("league-swiper__arrow-right", "league-swiper__arrow")}
            onClick={() => {
              swiper.slideNext();
            }}
          >
            <Image
              src="/icons/arrow-right.svg"
              alt="avatar"
              width={8}
              height={13}
            />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default LeagueSwiper;
