import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  return NextResponse.json({
    name: "Saad",
    age: "25",
    email: "ejeyd@example.com",
    password: "123456",
  });
};

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      name: req.name,
      age: "18",
      requestTpe: "POST",
      email: "saad@example.com",
      password: "5456",
    });
  } else
    return new NextResponse("please include your name in the post request");
};

export const PUT = async (request: NextRequest) => {
  const req = await request.json();
  if (req.name) {
    return NextResponse.json({
      name: req.name,
      age: "17",
      requestTpe: "PUT",
      email: "taha@example.com",
      password: "555451456",
    });
  } else
    return new NextResponse("please include your name in the post request");
};

export const DELETE = async (request: NextRequest) => {
  return NextResponse.json({
    name: "taha",
    age: "17",
    email: "taha@example.com",
    password: "555451456",
  });
};
