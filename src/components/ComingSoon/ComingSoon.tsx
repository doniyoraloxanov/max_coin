"use client";

import classNames from "classnames/bind";
import styles from "./ComingSoon.module.scss";
import { Typography } from "../Typography";
import BackButton from "../BackButton";
import { useRouter } from "next/navigation";
import Sticker from "../Sticker";

const cn = classNames.bind(styles);

type CommingSoonProps = {};

const ComingSoon = (props: CommingSoonProps) => {
  const router = useRouter();

  return (
    <>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <div className={cn("coming")}>
        <Sticker name="coming" width={200} height={200} />
        <Typography variant="h2" className={cn("coming__title")}>
          <span>coming soon</span>
        </Typography>
      </div>
    </>
  );
};

export default ComingSoon;
