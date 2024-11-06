import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<PartyPost[]> {
	let page: string | null = req.nextUrl.searchParams.get("page");
    // fetch from db using page and return res
    const res: PartyPost[] = []
	return NextResponse.json(getOkResponse<PartyPost[]>(res));
}