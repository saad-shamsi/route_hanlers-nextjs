import { NextRequest, NextResponse } from "next/server";

export function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  return NextResponse.json({
    From: params.name,
    Message: "Greetiongs from Pakistan",
    RequestType: "GET",
  });
}
