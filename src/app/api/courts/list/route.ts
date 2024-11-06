import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	let page: string | null = req.nextUrl.searchParams.get("page");
    // fetch from db using page and return res
    const res: Court[] = []
	return NextResponse.json(getOkResponse<Court[]>(res));
}