import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import CourtReservation from "@/types/CourtReservation";
import { INTERNALS } from "next/dist/server/web/spec-extension/request";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<CourtReservation[]> {
	let reservationIds: string[] = req.nextUrl.searchParams.getAll("courtIds");
    // fetch from db using reservationIds and return res
    const res: CourtReservation[] = []
	return NextResponse.json(getOkResponse<CourtReservation[]>(res));
}

interface CourtReservationCreationParams {
    courtID: number;
    userEmail: string;
    startTime: Date;
    endTime: Date;    
}

export async function POST(req: NextRequest): NextAPIRes<CourtReservation> {
    const body: CourtReservationCreationParams = await req.json();
    let res: CourtReservation; // fetch res
	return NextResponse.json(getOkResponse<CourtReservation>(res));
}

interface CourtReservationUpdateParams {
    courtID: number;
    userEmail: string;
    startTime: Date;
    endTime: Date;  
}
export async function PUT(req: NextRequest): NextAPIRes<CourtReservation> {
    req.body
    const body: CourtReservationUpdateParams = await req.json();
    let res: CourtReservation; // fetch res
	return NextResponse.json(getOkResponse<CourtReservation>(res));
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
    const body: number[] = await req.json();
	return NextResponse.json(getOkResponse("SUCCESS"));
}
