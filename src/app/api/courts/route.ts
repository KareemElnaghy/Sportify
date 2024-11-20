import { extractListParams } from "@/libs/Utils/URLParameterization";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	let courtIds = extractListParams(req, "courtIds");
	// fetch from db using courtIds and return res
	const res: Court[] = [];
	return NextResponse.json(getOkResponse<Court[]>(res));
}

interface CourtCreationParams {
	court: {
		name: string;
		description?: string;
		location?: string;
		sport: string;
	};
}

type NewCourt = Omit<Court, "id">;

export async function POST(req: NextRequest): NextAPIRes<Court> {
	const body: CourtCreationParams = await req.json();
	const courtReq: NewCourt = {
		name: body.court.name,
		description: body.court.description || "",
		location: body.court.location || "",
		sport: body.court.sport,
	};
	// TODO: call db and create  object
	const res: Court = { ...courtReq, id: 0 };
	return NextResponse.json(getOkResponse<Court>(res));
}

interface CourtUpdateParams {
	name?: string;
	description?: string;
	location?: string;
	sport?: string;
}
type UpdateCourt = Partial<Court> & { id: Court["id"] };
export async function PUT(req: NextRequest): NextAPIRes<Court> {
	const body: CourtUpdateParams = await req.json();
	let updateReq: UpdateCourt = {
		id: 0,
		...(body.name && { name: body.name }),
		...(body.description && { description: body.description }),
		...(body.location && { location: body.location }),
		...(body.sport && { sport: body.sport }),
	};
	// perform update and get updated data
	const res: Court = {
		id: 0,
		name: "",
		sport: "",
		location: "",
		description: "",
	};
	return NextResponse.json(getOkResponse<Court>(res));
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: Court["id"][] = await req.json();
	// delete ids
	return NextResponse.json(getOkResponse("SUCCESS"));
}
