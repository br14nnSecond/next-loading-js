import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "GET",
    });

    const data = await res.json();

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ ok: false });
  }
}
