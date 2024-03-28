import React from "react";
import classNames from "classnames/bind";
import styles from "./AvatarList.module.scss";
import Image from "next/image";

const cn = classNames.bind(styles);

type Props = {
  size?: number;
};

const AvatarList = ({ size = 35 }: Props) => {
  return (
    <div className={cn("avatars")}>
      <Image
        src="/images/league/1.svg"
        alt="avatar"
        className={cn("avatars__item")}
        width={size}
        height={size}
      />
      <Image
        src="/images/league/2.svg"
        alt="avatar"
        className={cn("avatars__item")}
        width={size}
        height={size}
      />
      <Image
        src="/images/league/3.svg"
        alt="avatar"
        className={cn("avatars__item")}
        width={size}
        height={size}
      />
    </div>
  );
};

export default AvatarList;
