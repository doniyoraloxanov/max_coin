"use client";

import { Box } from "@/components/Box";
import classNames from "classnames/bind";
import { FC } from "react";
import styles from "./global-loader.module.scss";

const cn = classNames.bind(styles);

type Props = {
  onBackdropClick?: () => void;
};

const GlobalLoader: FC<Props> = ({ onBackdropClick }) => {
  return (
    <Box className={cn("global-locker")} onClick={onBackdropClick}>
      <Box className={cn("global-locker__content")}>
        <Box className={cn("global-locker__loader")}></Box>
        <p className={cn("global-locker__text")}>Max</p>
      </Box>
    </Box>
  );
};

export default GlobalLoader;
