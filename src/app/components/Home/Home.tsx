"use client";

import { User } from "@/app/lib/constants";
import BackButton from "@/components/BackButton";
import Icon from "@/components/Icon";
import RippleBase from "@/components/RippleBase";
import { getTgUser } from "@/utils";
import {
  getProfileAction,
  incrementScoreAction,
} from "@webbot/app/actions/action";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./Home.module.scss";
import HomeMenu from "./HomeMenu";
import useSWR from "swr";
import { userApi, UserApiKeys } from "@webbot/utils/api/userApi";

const cn = classNames.bind(styles);

const Home = ({
  user,
  setUser,
}: {
  user: User | null;
  setUser: (user: User) => void;
}) => {
  const tgUser = getTgUser();
  const router = useRouter();
  const userid = tgUser?.user?.id.toString()!;

  const tapCount = 1;

  // const {
  //   data: users,
  //   error,
  //   isLoading,
  //   mutate: refetch,
  // } = useSWR(UserApiKeys.getProfile, userApi.getProfile);

  const handleCoinIconClick = async () => {
    try {
      await incrementScoreAction(userid!, tapCount);

      const updatedUserData = await getProfileAction(userid);
      setUser(updatedUserData);
    } catch (e) {
      console.error("Error occurred while incrementing score:", e);
    }
  };

  // console.log("User Home ", users);

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

                <span>{user?.mine_balance!}</span>
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

                <span>{user?.league}</span>
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
                  onClick={handleCoinIconClick}
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
