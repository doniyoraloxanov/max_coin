import { getTgUser } from "../getters";
import client from "./client";

type Squad = {
  name: string;
  no_of_players: number;
};

export const SquadListApiKeys = {
  getSquadList: "getSquadList",
};

export const squadListApi = {
  getSquadList: async () => {
    const tgUser = getTgUser();
    const userid = tgUser?.user?.id.toString()!;

    try {
      console.log("Response headers: ", client.defaults.headers);

      const response = await client.get(`/squad-list`, { params: { userid } });

      return response.data as Squad[];
    } catch (error) {
      console.error("Error in getSquadListAction: ", error);
    }
  },
};
