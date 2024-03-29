import { Box } from "@/components/Box";
import ReferalHome from "./components/ReferalHome";
import { prisma } from "@/utils/prisma";

const Referrals = async () => {
  return (
    <Box>
      <ReferalHome />
    </Box>
  );
};

export default Referrals;
