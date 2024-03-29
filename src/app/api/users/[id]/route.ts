import { serialize } from "@/app/lib/helpers";
import { NextRequest } from "next/server";
import { prisma } from "@/utils/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const referredUsers = await prisma.user.findMany({
      orderBy: {
        points: {
          _count: "desc",
        },
      },

      where: {
        referredById: params?.id,
      },
      include: {
        points: true,
      },
    });

    return Response.json(serialize(referredUsers ?? {}), { status: 200 });
  } catch (error) {
    console.error("error fetching user by id", error);

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
