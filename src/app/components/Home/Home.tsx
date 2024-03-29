"use client";

import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import RippleBase from "@/components/RippleBase";
import { getTgUser } from "@/utils";

import { GetSingleUser } from "@/utils/getSingleUser";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Home.module.scss";
import HomeMenu from "./HomeMenu";
import { incrementScoreAction } from "@/app/actions/score";

const cn = classNames.bind(styles);

const Home = () => {
  const tgUser = getTgUser();
  const router = useRouter();
  const { user, mutate: refetch } = GetSingleUser(tgUser?.user?.id.toString()!);

  const handleCoinClick = async () => {
    console.log("coin clicked");
    await incrementScoreAction(tgUser?.user?.id.toString()!);
    refetch();
  };

  return (
    <>
      <BackButton isBackable={false} />
      <div className={cn("home")}>
        <div className="container">
          <div className={cn("home__main")}>
            <div>
              <RippleBase className={cn("ripple")}>
                <button
                  className={cn("home__main-squad")}
                  onClick={() => {
                    router.push("/squad");
                  }}
                >
                  <span>Join Squad</span>
                  <Icon icon="right" size="sm" />
                </button>
              </RippleBase>
              <div className={cn("home__main-earned")}>
                <Image
                  src="/icons/coin.svg"
                  alt="coin"
                  width={36}
                  height={36}
                />

                <span>{user?.totalScore}</span>
              </div>
              <div
                className={cn("home__main-level")}
                onClick={() => {
                  router.push("/league");
                }}
              >
                <Image
                  src="/icons/bronze-cup.svg"
                  alt="coin"
                  width={20}
                  height={20}
                />

                <span>Bronze</span>
                <Icon icon="right" size="sm" />
              </div>
            </div>

            <div>
              <div className={cn("home__main-coin")}>
                <Image
                  src="/images/coin.png"
                  alt="coin"
                  width={300}
                  height={300}
                  onClick={handleCoinClick}
                />
              </div>
              <div className={cn("home__main-energy")}>
                <Image
                  src="/images/lightning.png"
                  alt="energy"
                  width={20}
                  height={20}
                />
                <span>{user?.energy}</span>
                <div className={cn("home__main-energy-bar")}></div>
              </div>
              <HomeMenu />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
