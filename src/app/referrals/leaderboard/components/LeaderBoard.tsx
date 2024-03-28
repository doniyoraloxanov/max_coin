"use client";

import BackButton from "@/components/BackButton";
import { Box } from "@/components/Box";
import { Typography } from "@/components/Typography";
import classnames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";
import styles from "./LeaderBoard.module.scss";
import LeaderBoardList from "./LeaderBoardList";
import { getTelegram } from "@webbot/utils";

const cn = classnames.bind(styles);

const LeaderBoard: FC = () => {
  const router = useRouter();

  const telegram = getTelegram();

  return (
    <div className={cn("leaderboard")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <Box className={cn("leaderboard__main")}>
        <div className="container">
          <Box className={cn("leaderboard__main-top")}>
            <Image
              src="/images/announce.png"
              alt="leaderboard__main"
              width={128}
              height={128}
            />
            <Typography variant="h1">Party Kings</Typography>
            <Typography
              className={cn("leaderboard__main-top-subtitle")}
              variant="h4"
            >
              Invite more friends to get there
            </Typography>
            <button
              className={cn("leaderboard__main-top-button")}
              onClick={() => {
                telegram?.openLink(
                  `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
                );
                telegram?.close();
              }}
            >
              Invite frens
            </button>
          </Box>

          <LeaderBoardList />
        </div>
      </Box>
    </div>
  );
};

export default LeaderBoard;
