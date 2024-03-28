"use client";

import Avatar from "@/components/Avatar/Avatar";
import Empty from "@/components/Empty";
import { Typography } from "@/components/Typography";
import classnames from "classnames/bind";
import styles from "./ReferredUsers.module.scss";
import Image from "next/image";
import { referredUsers } from "@/app/constants";
import { getFriendsListAction } from "@/app/actions/action";
import { getTgUser } from "@/utils";
import { useEffect, useState } from "react";

const cn = classnames.bind(styles);

type User = {
  telegram_username: string;
  first_name: string;
  last_name: string;
  balance: number;
};

const ReferredUsers = () => {
  const tgUser = getTgUser();
  const [friendList, setFriendList] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const friendData = await getFriendsListAction(
          tgUser?.user?.id.toString()!
        );
        setFriendList(friendData);
      } catch (e) {
        console.error("Error occured while fetching friends List", e);
      }
    };

    fetchData();
  }, []);

  return (
    <div className={cn("list")}>
      {friendList?.length === 0 ? (
        <Empty />
      ) : (
        friendList?.map((user, index) => (
          <div key={index} className={cn("list__item")}>
            <Avatar
              className={cn("list__item-avatar")}
              name={user.first_name}
            />
            <div className={cn("list__item-info")}>
              <div>
                <Typography variant="h4" className={cn("list__item-name")}>
                  {user.first_name}
                </Typography>
                <div className={cn("list__item-level")}>
                  <div className={cn("list__item-level")}>
                    <Image
                      src="/icons/bronze-cup.svg"
                      alt="coin"
                      width={15}
                      height={15}
                    />
                    <Typography variant="caption">{user.balance}</Typography>
                  </div>
                  {/* {user.points?.reduce((acc, p) => acc + p.amount, 0) !== 0 && (
                    <div className={cn("list__item-coin")}>
                      <Image
                        src="/icons/coin.svg"
                        alt="coin"
                        width={15}
                        height={15}
                      />

                      <Typography variant="caption">
                        {user.points?.reduce((acc, p) => acc + p.amount, 0)}
                      </Typography>
                    </div>
                  )} */}
                </div>
              </div>

              {/* <p className={cn("list__item-status")}>{user.status}</p> */}
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReferredUsers;
