"use client";

import Avatar from "@/components/Avatar/Avatar";
import Empty from "@/components/Empty";
import { Typography } from "@/components/Typography";
import { getTgUser } from "@/utils";
import { Prisma } from "@prisma/client";
import { useUser } from "@webbot/utils/getUser";
import classnames from "classnames/bind";
import Image from "next/image";
import styles from "./ReferredUsers.module.scss";

const cn = classnames.bind(styles);

const ReferredUsers = () => {
  const tgUser = getTgUser();

  const { users } = useUser(tgUser?.user?.id) as {
    users: Prisma.UserGetPayload<{
      include: { points: true };
    }>[];
  };

  console.log(users, "users");
  return (
    <div className={cn("list")}>
      {users?.length === 0 ? (
        <Empty />
      ) : (
        users?.map((user, index) => (
          <div key={index} className={cn("list__item")}>
            <Avatar className={cn("list__item-avatar")} name={user.firstName} />
            <div className={cn("list__item-info")}>
              <div>
                <Typography variant="h4" className={cn("list__item-name")}>
                  {user.firstName}
                </Typography>
                <div className={cn("list__item-level")}>
                  <div className={cn("list__item-level")}>
                    <Image
                      src="/icons/bronze-cup.svg"
                      alt="coin"
                      width={15}
                      height={15}
                    />
                    {/* <Typography variant="caption">{user.balance}</Typography> */}
                  </div>
                  {user.point?.reduce((acc, p) => acc + p.amount, 0) !== 0 && (
                    <div className={cn("list__item-coin")}>
                      <Image
                        src="/icons/coin.svg"
                        alt="coin"
                        width={15}
                        height={15}
                      />

                      <Typography variant="caption">
                        {user.point?.reduce((acc, p) => acc + p.amount, 0)}
                      </Typography>
                    </div>
                  )}
                </div>
              </div>

              <p className={cn("list__item-status")}>{user.status}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ReferredUsers;
