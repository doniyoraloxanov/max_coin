"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";

export async function incrementScoreAction(userId: string) {
  const updatedScore = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      totalScore: {
        increment: 1,
      },
      energy: {
        decrement: 1,
      },
    },
  });

  revalidatePath("/");
  return updatedScore;
}

export async function refillEnergyAction(userId: string) {
  const updatedRefillEnergy = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      energy: 1000,
    },
  });

  revalidatePath("/");
  return updatedRefillEnergy;
}
