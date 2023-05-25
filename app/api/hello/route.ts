import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const url = request.nextUrl;

  if (url.searchParams.has("name")) {
    const name = url.searchParams.get("name");
    return NextResponse.json({ message: "Hello from Saad To " + name });
  } else {
    return NextResponse.json({
      message: "Please pass your 'name' param in search params",
    });
  }
};
