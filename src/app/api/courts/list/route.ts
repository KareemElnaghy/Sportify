import {
	db_getCourts,
	db_getCourtsSize,
} from "@/libs/DBCommunicator/Courts/CourtsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

interface CourtsListAPIResponse {
	courtsCount: number;
	courtsList: Court[];
}

export async function GET(req: NextRequest): NextAPIRes<CourtsListAPIResponse> {
	const p: string | null = req.nextUrl.searchParams.get("page");
	const page: number = p ? Number(p) : 1;

	const r: string | null = req.nextUrl.searchParams.get("recordsPerPage");
	const recordsPerPage: number = r ? Number(r) : 10;

	const s: string | null = req.nextUrl.searchParams.get("searchQuery");

	const res: Court[] = await db_getCourts({
		page: page,
		recordsPerPage: recordsPerPage,
		searchQuery: s,
	});

	const count: number = await db_getCourtsSize();

	return NextResponse.json(
		getOkResponse<CourtsListAPIResponse>({
			courtsCount: count,
			courtsList: res,
		})
	);
}
