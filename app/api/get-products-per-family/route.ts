import { NextResponse } from "next/server";
import { backend } from "@/lib/backend";

export async function POST(req: Request) {
    const { branch, trdr, family } = await req.json();

    const clientID = process.env.CLIENT_ID;

    const { data } = await backend.post("/s1services/js/api.web/ITEMS_PER_CUST_NEW", {
        branch,
        trdr,
        family,
        clientID,
    });

    return NextResponse.json(data);
}
