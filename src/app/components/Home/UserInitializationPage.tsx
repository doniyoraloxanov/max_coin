"use client";

import { getProfileAction, startAction } from "@/app/actions/action";
import { getTgUser } from "@/utils";
import { setCookie } from "cookies-next";
import { useEffect, useState } from "react";

import { User } from "@/app/lib/constants";
import Home from "./Home";

const UserInitializationPage = () => {
  const [user, setUser] = useState<User | null>(null);
  const tgUser = getTgUser();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const data = await getProfileAction(tgUser?.user?.id.toString()!);
        setUser(data);
      } catch (e) {
        console.error("Error occured while fetching user profile:", e);
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await startAction(
          tgUser?.user?.id.toString()!,
          tgUser?.user?.first_name!,
          tgUser?.user?.last_name!,
          tgUser?.user?.username!,
          tgUser?.query_id!,
          tgUser?.auth_date!.toString()!,
          tgUser?.hash!
        );

        setCookie("token", res);

        getProfile();
      } catch (e) {
        console.error("Error occurred while calling startAction:", e);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
      <Home user={user} setUser={setUser} />
    </main>
  );
};

export default UserInitializationPage;
