"use client";

import { Box } from "@/components/Box";
import { Typography } from "@/components/Typography";
import { getTelegram } from "@webbot/utils";
import Image from "next/image";

import BackButton from "@/components/BackButton";
import { SquadListApiKeys, squadListApi } from "@webbot/utils/api/squadListApi";
import classNames from "classnames/bind";
import { useRouter } from "next/navigation";
import useSWR from "swr";
import SquadItem from "./SquadItem";
import styles from "./SquadMain.module.scss";
type Props = {};

const cn = classNames.bind(styles);

const SquadMain = (props: Props) => {
  const telegram = getTelegram();
  const router = useRouter();

  const {
    data: squadListData,
    error,
    isLoading,
    mutate: refetch,
  } = useSWR(SquadListApiKeys.getSquadList, squadListApi.getSquadList);

  return (
    <div className={cn("squad")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <Box className={cn("squad__main")}>
        <div className="container">
          <Box className={cn("squad__main-top")}>
            <Image
              src="/images/squad/ball.png"
              alt="squad__main"
              width={128}
              height={128}
            />
            <Typography variant="h1" className={cn("squad__main-top-title")}>
              Join Squad!
            </Typography>
            <Typography className={cn("squad__main-top-subtitle")} variant="h4">
              These squads recruiting now.
              <br />
              Do you wanna join?
            </Typography>
            <button
              className={cn("squad__main-top-button")}
              onClick={() => {
                telegram?.openLink(
                  `https://t.me/${process.env.NEXT_PUBLIC_BOT_USERNAME}?start=refer`
                );
                telegram?.close();
              }}
            >
              Join another squad
            </button>
          </Box>
          <div className={cn("squad__main-list")}>
            {squadListData?.map((squad) => (
              <SquadItem key={squad.name} squad={squad} />
            ))}
          </div>
        </div>
      </Box>
    </div>
  );
};

export default SquadMain;
