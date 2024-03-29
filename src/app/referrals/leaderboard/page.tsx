import { User } from "@prisma/client";
import LeaderBoard from "./components/LeaderBoard";
import { prisma } from "@/utils/prisma";

export const dynamic = "force-dynamic";

const Referrals = async () => {
  const topPointUsers = await prisma.user.findMany({
    take: 10,
    orderBy: {
      points: {
        _count: "desc",
      },
    },
    where: {
      points: {
        some: {},
      },
    },
    include: {
      points: true,
      referredUsers: true,
    },
  });
  return <LeaderBoard TopPointUsers={topPointUsers as User[] | any} />;
};

export default Referrals;
