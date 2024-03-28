"use client";

import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import SquadMain from "./components/SquadMain";

type Props = {};

const Squad = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <BackButton
        isBackable={true}
        onClick={() => {
          router.back();
        }}
      />
      <SquadMain />
    </div>
  );
};

export default Squad;
