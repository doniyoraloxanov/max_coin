"use client";

import SquadHeader from "./SquadHeader";
import SquadContent from "./SquadContent";
import SquadList from "./SquadList";
import classNames from "classnames/bind";
import styles from "./SquadDetails.module.scss";
import BackButton from "@webbot/components/BackButton";
import { useRouter } from "next/navigation";
import { getTgUser } from "@/utils";
import { useEffect, useState } from "react";
import { getSqaudDetailsAction } from "@/app/actions/action";
import { DetailSquad } from "@/app/constants";

const cn = classNames.bind(styles);

type Props = {
  squadName: string;
};

const SquadDetails = (props: Props) => {
  const router = useRouter();
  const tgUser = getTgUser();
  const [squads, setSquads] = useState<DetailSquad | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const squadData = await getSqaudDetailsAction(
          props.squadName,
          tgUser?.user?.id.toString()!
        );
        setSquads(squadData);
      } catch (e) {
        console.error("Error occured while fetching squads:", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cn("squad__details")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <div className="container">
        <SquadHeader squadName={squads?.name!} />
        <SquadContent squad={squads} />
        <SquadList squad={squads!} />
      </div>
    </div>
  );
};

export default SquadDetails;
