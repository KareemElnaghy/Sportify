import {
	db_getAdmins,
	db_getAdminsSize,
} from "@/libs/DBCommunicator/Admins/AdminsDB";
import Admin from "@/types/Admin";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import { NextRequest, NextResponse } from "next/server";

interface AdminsListAPIResponse {
	adminsCount: number;
	adminsList: Admin[];
}

export async function GET(req: NextRequest): NextAPIRes<AdminsListAPIResponse> {
	const p: string | null = req.nextUrl.searchParams.get("page");
	const page: number = p ? Number(p) : 1;

	const r: string | null = req.nextUrl.searchParams.get("recordsPerPage");
	const recordsPerPage: number = r ? Number(r) : 10;

	const s: string | null = req.nextUrl.searchParams.get("searchQuery");

	const res: Admin[] = await db_getAdmins({
		page: page,
		recordsPerPage: recordsPerPage,
		searchQuery: s,
	});

	const count: number = await db_getAdminsSize();

	return NextResponse.json(
		getOkResponse<AdminsListAPIResponse>({
			adminsCount: count,
			adminsList: res,
		})
	);
}
