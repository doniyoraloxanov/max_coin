import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./SendGift.module.scss";
import IconButton from "@/components/IconButton/";
import Image from "next/image";

const cn = classNames.bind(styles);

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SendGift = ({ onClose, isOpen }: Props) => {
  const [selectedGift, setSelectedGift] = useState(0);

  return (
    <div className={cn("gift", { "gift--open": isOpen })}>
      <IconButton
        icon="close"
        onClick={onClose}
        className={cn("gift__close")}
      />
      <p className={cn("gift__title")}>Send your friends a gift</p>
      <p className={cn("gift__subtitle")}>Choose your gift’s wrapping</p>
      <div className={cn("gift__list")}>
        <div
          className={cn("gift__item", {
            "gift__item--selected": selectedGift === 1,
          })}
          onClick={() => setSelectedGift(1)}
        >
          <Image src="/images/gift-1.png" alt="Gift" width={128} height={128} />
        </div>
        <div
          className={cn("gift__item", {
            "gift__item--selected": selectedGift === 2,
          })}
          onClick={() => setSelectedGift(2)}
        >
          <Image src="/images/gift-2.png" alt="Gift" width={128} height={128} />
        </div>
      </div>
      <button className={cn("gift__button")}>Send a gift</button>
    </div>
  );
};

export default SendGift;
