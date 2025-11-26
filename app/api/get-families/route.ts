import { NextResponse } from "next/server";
import { backend } from "@/lib/backend";

export async function POST() {

    const clientID = process.env.CLIENT_ID;

    const { data } = await backend.post("/s1services/js/api.web/FAMILY", {
        clientID,
    });

    return NextResponse.json(data);
}
