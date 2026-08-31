import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const { url } =
    await request.json();

  const response = await fetch(
    `https://www.youtube.com/oembed?url=${encodeURIComponent(
      url
    )}&format=json`
  );

  if (!response.ok) {
    return NextResponse.json(
      { error: true },
      { status: 400 }
    );
  }

  const data =
    await response.json();

  return NextResponse.json(data);
}