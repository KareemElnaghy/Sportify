import {
	db_addCourt,
	db_deleteCourt,
	db_editCourt,
	db_getCourtItems,
} from "@/libs/DBCommunicator/Courts/CourtsDB";
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
	const res: Court[] = await db_getCourtItems({
		courtIds: courtIds,
	});
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
	const res: Court = await db_addCourt({
		court: courtReq,
	});
	return NextResponse.json(getOkResponse<Court>(res));
}

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
	const res: Court = await db_editCourt({
		court: updateReq,
	});
	return NextResponse.json(getOkResponse<Court>(res));
}

interface CourtDeleteParams {
	courtIds: Court["id"][];
}
export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: CourtDeleteParams = await req.json();
	const courtIds = body.courtIds;
	// delete ids
	const res = await db_deleteCourt({
		courtIds: courtIds,
	});

	if (res) return NextResponse.json(getOkResponse("SUCCESS"));
	else return NextResponse.json(getOkResponse("FAIL"));
}
