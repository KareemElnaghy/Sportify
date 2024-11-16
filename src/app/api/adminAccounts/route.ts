import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	let courtIds: string[] = req.nextUrl.searchParams.getAll("courtIds");
	// fetch from db using courtIds and return res
	const res: Court[] = [];
	return NextResponse.json(getOkResponse<Court[]>(res));
}

interface CourtCreationParams {
	name: string;
	sport: string;
}

export async function POST(req: NextRequest): NextAPIRes<Court> {
	const body: CourtCreationParams = await req.json();
	let res: Court; // fetch res
	// let res: Court = {
	//     id: 0, auto
	//     name: body.name,
	//     sport: body.sport,
	//     location: body.location || "",
	//     description: body.description || ""
	// };
	return NextResponse.json(getOkResponse<Court>(res));
}

interface CourtUpdateParams {
	name?: string;
	sport?: string;
	location?: string;
	description?: string;
}
export async function PUT(req: NextRequest): NextAPIRes<Court> {
	req.body;
	const body: CourtUpdateParams = await req.json();
	let res: Court; // fetch res
	return NextResponse.json(getOkResponse<Court>(res));
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: number[] = await req.json();
	return NextResponse.json(getOkResponse("SUCCESS"));
}
