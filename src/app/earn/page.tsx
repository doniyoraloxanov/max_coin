"use client";

import { useRouter } from "next/navigation";
import BackButton from "@/components/BackButton";
import Earn from "./components/Earn";

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
      <Earn />
    </div>
  );
};

export default page;
