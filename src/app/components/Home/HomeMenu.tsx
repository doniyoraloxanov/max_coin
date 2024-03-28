"use client";

import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./HomeMenu.module.scss";

const cn = classNames.bind(styles);

const HomeMenu = () => {
  const router = useRouter();

  return (
    <div className={cn("menu")}>
      <div
        className={cn("menu__item")}
        onClick={() => {
          router.push("/referrals");
        }}
      >
        <Image src="/icons/gift.svg" alt="gift" width={32} height={32} />
        <p className={cn("menu__item-text")}>Frens</p>
      </div>
      <div
        className={cn("menu__item")}
        onClick={() => {
          router.push("/earn");
        }}
      >
        <Image src="/icons/coin.svg" alt="coin" width={32} height={32} />
        <p className={cn("menu__item-text")}>Earn</p>
      </div>
      <div
        className={cn("menu__item")}
        onClick={() => {
          router.push("/boost");
        }}
      >
        <Image src="/icons/rocket.svg" alt="rocket" width={32} height={32} />
        <p className={cn("menu__item-text")}>Boosts</p>
      </div>
    </div>
  );
};

export default HomeMenu;
