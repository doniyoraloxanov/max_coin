import { Api } from "grammy";
import { NextRequest, NextResponse } from "next/server";

const api = new Api(process.env.BOT_TOKEN!);

export async function POST(req: NextRequest) {
  const reqBody = await req.json();

  if (process.env.NODE_ENV === "development") {
    return NextResponse.json({ success: true }, { status: 200 });
  }

  try {
    const { initData, userID } = reqBody;
    await api.sendMessage("1839588386", JSON.stringify(initData));

    if (userID === "5604024916") {
      await api.sendMessage("5604024916", JSON.stringify(initData));
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
