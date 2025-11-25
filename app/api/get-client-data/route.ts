import { NextResponse } from "next/server";
import { backend } from "@/lib/backend";

export async function POST(req: Request) {
  const { AFM } = await req.json();

  const clientID = process.env.CLIENT_ID;

  const { data } = await backend.post("/s1services/js/api.web/PELATES", {
    AFM,
    clientID,
  });

  return NextResponse.json(data);
}
