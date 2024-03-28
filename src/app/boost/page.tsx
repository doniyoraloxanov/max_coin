"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import Boost from "./components/Boost";

type Props = {};

const page = (props: Props) => {
  const router = useRouter();
  return (
    <div>
      <BackButton
        isBackable={true}
        onClick={() => {
          router.back();
        }}
      />
      <Boost />
    </div>
  );
};

export default page;
