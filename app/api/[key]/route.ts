import { NextRequest, NextResponse } from "next/server";

import Data from "@/models/DataModel";
import connectMongo from "@/lib/connectMongo";

export const dynamic = "force-dynamic";

type RouteParams = {
  params: {
    key: string;
  };
};

export async function GET(request: NextRequest, { params }: RouteParams): Promise<NextResponse> {
  const { key } = await params;

  await connectMongo();

  const node = await Data.findOne({ key });

  if (!node) {
    return new NextResponse(JSON.stringify({ error: "Not Found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.json({ node });
}