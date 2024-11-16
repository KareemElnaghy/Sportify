import {
	db_getPartyPost,
	db_getPartyPostsSize,
} from "@/libs/DBCommunicator/PartyPosts/PartyPostsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";
import { NextRequest, NextResponse } from "next/server";

interface PartyPostsListAPIResponse {
	partyPostsCount: number;
	partyPostsList: PartyPost[];
}

export async function GET(
	req: NextRequest
): NextAPIRes<PartyPostsListAPIResponse> {
	const p: string | null = req.nextUrl.searchParams.get("page");
	const page: number = p ? Number(p) : 1;

	const r: string | null = req.nextUrl.searchParams.get("recordsPerPage");
	const recordsPerPage: number = r ? Number(r) : 10;

	const s: string | null = req.nextUrl.searchParams.get("searchQuery");

	const res: PartyPost[] = await db_getPartyPost({
		page: page,
		recordsPerPage: recordsPerPage,
		searchQuery: s,
	});

	const count: number = await db_getPartyPostsSize();

	return NextResponse.json(
		getOkResponse<PartyPostsListAPIResponse>({
			partyPostsCount: count,
			partyPostsList: res,
		})
	);
}
