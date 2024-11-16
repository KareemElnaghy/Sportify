import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<PartyPost[]> {
	let partyIds: string[] = req.nextUrl.searchParams.getAll("partyIds");
	// fetch from db using partyIds and return res
	const res: PartyPost[] = [];
	return NextResponse.json(getOkResponse<PartyPost[]>(res));
}

interface PartyPostCreationParams {
	ownerEmail: string;
	eventName: string;
	sport: string;
	startTime: Date;
	endTime: Date;
}

export async function POST(req: NextRequest): NextAPIRes<PartyPost> {
	const body: PartyPostCreationParams = await req.json();
	let res: PartyPost; // fetch res
	// let res: Court = {
	//     id: 0, auto generated
	//     name: body.name,
	//     sport: body.sport,
	//     location: body.location || "",
	//     description: body.description || ""
	// };
	return NextResponse.json(getOkResponse<PartyPost>(res));
}

interface PartyPostUpdateParams {
	id: number;
	ownerEmail?: string;
	member?: string;
	eventName?: string;
	sport?: string;
	location?: string;
	description?: string;
	startTime?: Date;
	endTime?: Date;
}

export async function PUT(req: NextRequest): NextAPIRes<PartyPost> {
	req.body;
	const body: PartyPostUpdateParams = await req.json();
	let res: PartyPost; // fetch res
	return NextResponse.json(getOkResponse<PartyPost>(res));
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: number[] = await req.json();
	return NextResponse.json(getOkResponse("SUCCESS"));
}
