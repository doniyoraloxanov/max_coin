"use client";

import React from "react";
import Image from "next/image";
import { boostHowItWorks } from "@webbot/app/constants";

import classNames from "classnames/bind";
import styles from "./Works.module.scss";
import Link from "next/link";

import BackButton from "@webbot/components/BackButton";
import { useRouter } from "next/navigation";

const cn = classNames.bind(styles);

type Props = {};

const Works = (props: Props) => {
  const router = useRouter();

  return (
    <div className={cn("works")}>
      <BackButton isBackable onClick={() => router.back()} />

      <div className="container">
        <div className={cn("works__socials")}>
          <div className={cn("works__socials-item")}>
            <Image
              src="/icons/telegram.svg"
              alt="telegram"
              width={25}
              height={25}
            />
            <span className={cn("works__socials-item-title")}>Join</span>
          </div>
          <div className={cn("works__socials-item")}>
            <Image
              src="/icons/twitter.svg"
              alt="twitter"
              width={18}
              height={18}
            />
            <span className={cn("works__socials-item-title")}>Follow</span>
          </div>
        </div>
        <h2 className={cn("works__title")}>max</h2>
        <div className={cn("works__list")}>
          {boostHowItWorks.map((item) => (
            <div className={cn("works__list-item")} key={item.id}>
              <Image src={item.image} alt="icon" width={45} height={45} />
              <div>
                <h3 className={cn("works__list-item-title")}>{item.title}</h3>
                <p className={cn("works__list-item-description")}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className={cn("works__footer")}>
          <Link href="/boost" className={cn("works__footer-link")}>
            Full Guide
          </Link>
          <button className={cn("works__footer-button")}>Play</button>
        </div>
      </div>
    </div>
  );
};

export default Works;
