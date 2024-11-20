import {
	extractListParams,
	typecaseParams,
} from "@/libs/Utils/URLParameterization";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Court from "@/types/Court";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Court[]> {
	let courtIds: Court["id"][] = typecaseParams(
		extractListParams(req, "courtIds"),
		Number
	);
	// fetch from db using courtIds and return res
	const res: Court[] = [];
	return NextResponse.json(getOkResponse<Court[]>(res));
}

interface CourtCreationParams {
	name: string;
	sport: string;
	description?: string;
	location?: string;
}

type NewCourt = Omit<Court, "id">;

export async function POST(req: NextRequest): NextAPIRes<Court> {
	const body: CourtCreationParams = await req.json();
	const courtReq: NewCourt = {
		name: body.name,
		description: body.description || "",
		location: body.location || "",
		sport: body.sport,
	};
	// TODO: call db and create  object
	const res: Court = { ...courtReq, id: 0 };
	return NextResponse.json(getOkResponse<Court>(res));
}

// interface CourtUpdateParams {
// 	name?: string;
// 	description?: string;
// 	location?: string;
// 	sport?: string;
// }
type CourtUpdateParams = Partial<Court> & { id: Court["id"] };
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

interface CourtDeleteParams {
	courtIds: Court["id"][];
}
export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: CourtDeleteParams = await req.json();
	const courtIds = body.courtIds;
	// delete ids
	return NextResponse.json(getOkResponse("SUCCESS"));
}
