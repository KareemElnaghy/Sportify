import { db_getCourts } from "@/libs/DBCommunicator/Courts/CourtsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	const p: string | null = req.nextUrl.searchParams.get("page");
	const page: number = p ? Number(p) : 1;
	const res: Court[] = await db_getCourts({ page: page, recordsPerPage: 50 });
	return NextResponse.json(getOkResponse<Court[]>(res));
}
