import { serialize } from "@/app/lib/helpers";
import { NextRequest } from "next/server";
import { prisma } from "../../../../utils/prisma";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const singleUser = await prisma.user.findUnique({
      where: {
        id: params?.id,
      },

      include: {
        referredUsers: {
          select: {
            firstName: true,
            lastName: true,
            username: true,
            id: true,
            point: true,
            referredById: true,
          },
        },
        point: true,
      },
    });

    return Response.json(serialize(singleUser ?? {}), { status: 200 });
  } catch (error) {
    console.error("error fetching user", error);

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
}
