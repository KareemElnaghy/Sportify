import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import CourtReservation from "@/types/CourtReservation";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<CourtReservation[]> {
	let page: string | null = req.nextUrl.searchParams.get("page");
    // fetch from db using page and return res
    const res: CourtReservation[] = []
	return NextResponse.json(getOkResponse<CourtReservation[]>(res));
}