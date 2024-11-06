import { db_getCourts } from "@/libs/DBCommunicator/Courts/CourtsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	const page: string | null = req.nextUrl.searchParams.get("page");
	const p: number = page ? Number(page) : 1;
	const res: Court[] = await db_getCourts({ page: p });
	return NextResponse.json(getOkResponse<Court[]>(res));
}
