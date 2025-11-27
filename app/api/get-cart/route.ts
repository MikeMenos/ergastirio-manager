import { NextResponse } from "next/server";
import { backend } from "@/lib/backend";

export async function POST(req: Request) {
    const { branch, trdr } = await req.json();
    const clientID = process.env.CLIENT_ID;

    const { data } = await backend.post(
        "/s1services/js/api.web/ITEMS_IN_BASKET",
        { clientID, trdr, branch },

    );

    return NextResponse.json(data);
}
