"use client";

import classNames from "classnames/bind";
import styles from "./Earn.module.scss";
import EarnTop from "./EarnTop";
import Boosters from "./Boosters";
import Speacials from "./Specials";
import Web3World from "./Web3World";
import BackButton from "@webbot/components/BackButton";
import { useRouter } from "next/navigation";

const cn = classNames.bind(styles);

type Props = {};

const Earn = (props: Props) => {
  const router = useRouter();

  return (
    <div className={cn("earn")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <div className="container">
        <EarnTop />
        <Boosters />
        <Speacials />
        <Web3World />
      </div>
    </div>
  );
};

export default Earn;
