// // import { levelChecker } from "./common";
// import { prisma } from "@/utils/prisma";

// export const getUserPoints = async (userId: string) => {
//   const totalPoint = await prisma.point.aggregate({
//     where: {
//       userId: userId,
//     },

//     _sum: {
//       amount: true,
//     },
//   });

//   const currentLevel = levelChecker(totalPoint._sum.amount ?? 0);

//   return { totalPoint, currentLevel };
// };
