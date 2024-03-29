"use client";

import Icon from "@/components/Icon";
import RippleBase from "@/components/RippleBase";
import { Typography } from "@/components/Typography";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./verification.module.scss";

const cn = classNames.bind(styles);

type Props = {};

const Verification = (props: Props) => {
  const router = useRouter();
  const [isJoinedGroup, setIsJoinedGroup] = useState(true);
  const [isJoinedChannel, setIsJoinedChannel] = useState(false);

  const renderBonus = (task: boolean) => {
    if (task) {
      return (
        <>
          <Typography
            variant="caption"
            className={cn("task__bonus--completed")}
          >
            Completed
          </Typography>
          <Icon icon="tick" size="sm" className={cn("task__button")} />
        </>
      );
    } else {
      return (
        <>
          <Typography variant="caption" className={cn("task__bonus")}>
            <b>+100</b>
            <Icon icon="coin" size="sm" className={cn("task__coin")} />
          </Typography>
          <Icon icon="right" size="sm" className={cn("task__button")} />
        </>
      );
    }
  };

  return (
    <div className={cn("task")}>
      <Typography variant="h2">
        Welcome to <span>Max</span>
      </Typography>
      <Typography variant="caption">
        To use our bot, Please complete the following tasks
      </Typography>
      <div className={cn("task__list")}>
        <RippleBase
          className={
            isJoinedChannel ? cn("task__option--complated") : cn("task__option")
          }
        >
          <div className={cn("task__icon")}>
            <Image
              src="/images/channel.png"
              alt="channel"
              width={30}
              height={30}
            />
          </div>
          <div>
            <p className={cn("task__option--title")}>Max Announcement</p>
            {renderBonus(isJoinedChannel)}
          </div>
        </RippleBase>
        <RippleBase
          className={
            isJoinedGroup ? cn("task__option--complated") : cn("task__option")
          }
        >
          <div className={cn("task__icon")}>
            <Image
              src="/images/group.png"
              alt="channel"
              width={30}
              height={30}
            />
          </div>
          <div>
            <p className={cn("task__option--title")}>Max Community</p>
            {renderBonus(isJoinedGroup)}
          </div>
        </RippleBase>
      </div>
    </div>
  );
};

export default Verification;
