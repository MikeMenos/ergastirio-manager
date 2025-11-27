import { NextResponse } from "next/server";
import { backend } from "@/lib/backend";
import iconv from "iconv-lite";

export async function POST(req: Request) {
  const { AFM } = await req.json();

  const clientID = process.env.CLIENT_ID;

  const response = await backend.post(
    "/s1services/js/api.web/PELATES",
    { AFM, clientID },
    { responseType: "arraybuffer" }
  );

  const text = iconv.decode(Buffer.from(response.data), "win1253");

  const data = JSON.parse(text);

  return NextResponse.json(data);
}
