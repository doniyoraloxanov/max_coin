"use client";

import BackButton from "@/components/BackButton";
import { useRouter } from "next/navigation";
import DetailsContent from "./components/DetailsContent";

const ReferralDetails = () => {
  const router = useRouter();

  return (
    <div>
      <BackButton isBackable onClick={router.back} />
      <DetailsContent />
    </div>
  );
};

export default ReferralDetails;
