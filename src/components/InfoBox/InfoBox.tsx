import React from "react";
import classNames from "classnames/bind";
import styles from "./InfoBox.module.scss";
import Image from "next/image";

const cn = classNames.bind(styles);

type Props = {
  open: boolean;
  onClose: () => void;
  refillEnergy?: () => Promise<void>;
  children: React.ReactNode;
};

const InfoBox = ({ open, onClose, refillEnergy, children }: Props) => {
  return (
    <div className={cn("info", { "info--open": open })}>
      <button type="button" className={cn("info__close")} onClick={onClose}>
        <Image src="/icons/close.svg" alt="Close" width={14} height={14} />
      </button>
      {children}
      <button
        type="button"
        className={cn("info__button")}
        onClick={refillEnergy}
      >
        Get
      </button>
    </div>
  );
};

export default InfoBox;
