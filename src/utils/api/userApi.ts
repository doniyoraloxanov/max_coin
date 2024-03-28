import { getTgUser } from "../getters";
import client from "./client";

export const UserApiKeys = {
  getProfile: "getProfile",
};

export const userApi = {
  getProfile: async () => {
    const tgUser = getTgUser();
    const userid = tgUser?.user?.id.toString()!;

    try {
      const response = await client.get(`/profile`, { params: { userid } });

      return response.data;
    } catch (error) {
      console.error("Error in getProfileAction: ", error);
    }
  },
};
