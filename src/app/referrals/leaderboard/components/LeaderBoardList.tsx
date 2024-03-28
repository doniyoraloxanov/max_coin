"use client";

import { Box } from "@/components/Box";

import classnames from "classnames/bind";
import styles from "./LeaderBoardList.module.scss";
const cn = classnames.bind(styles);

const LeaderBoardList = () => {
  return (
    <Box className={cn("list")}>
      <div className={cn("list__item")}>
        <div className={cn("list__item-avatar")}></div>
        <div>
          <div className={cn("list__item-name")}></div>
          <div className={cn("list__item-username")}></div>
        </div>
      </div>
      <div className={cn("list__item")}>
        <div className={cn("list__item-avatar")}></div>
        <div>
          <div className={cn("list__item-name")}></div>
          <div className={cn("list__item-username")}></div>
        </div>
      </div>
      <div className={cn("list__item")}>
        <div className={cn("list__item-avatar")}></div>
        <div>
          <div className={cn("list__item-name")}></div>
          <div className={cn("list__item-username")}></div>
        </div>
      </div>
      <div className={cn("list__item")}>
        <div className={cn("list__item-avatar")}></div>
        <div>
          <div className={cn("list__item-name")}></div>
          <div className={cn("list__item-username")}></div>
        </div>
      </div>
    </Box>
  );
};

export default LeaderBoardList;
