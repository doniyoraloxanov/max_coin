"use client";

import BackButton from "@/components/BackButton";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Join.module.scss";

const cn = classNames.bind(styles);

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const dynamic = "force-dynamic";

export default async function Join({ params, searchParams }: Props) {
  const squadName = params.id;
  console.log(
    "Squad ID:  Joinid😎😎😎",
    squadName,
    searchParams.userid as string
  );

  const joinSquad = async () => {
    console.log("Join squad");
    router.back();
  };

  const router = useRouter();
  return (
    <div className={cn("join")}>
      <BackButton
        isBackable
        onClick={() => {
          router.back();
        }}
      />
      <div className="container">
        <div className={cn("join__content")}>
          <div className={cn("join__users")}>
            <Image
              src="/images/avatar.png"
              alt="user"
              width={145}
              height={145}
              className={cn("join__squad")}
            />
            <Image
              src="/images/avatar.png"
              alt="user"
              width={145}
              height={145}
              className={cn("join__user")}
            />
          </div>

          <p className={cn("join__title")}>Join MEM Max Squad</p>
          <p className={cn("join__description")}>
            Every tap counts towards your squad score. <br /> Squad leaderboard
            will show <br /> your contribution.
          </p>
          <br />
          <p className={cn("join__description")}>
            More fun playing together ✨
          </p>
        </div>
        <button className={cn("join__button")} onClick={joinSquad}>
          Join squad
        </button>
      </div>
    </div>
  );
}
