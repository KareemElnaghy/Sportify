import {
	extractListParams,
	typecaseParams,
} from "@/libs/Utils/URLParameterization";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<PartyPost[]> {
	let partyIds: PartyPost["id"][] = typecaseParams(
		extractListParams(req, "partIds"),
		Number
	);
	// fetch from db using partyIds and return res
	const res: PartyPost[] = [];
	return NextResponse.json(getOkResponse<PartyPost[]>(res));
}

interface PartyPostCreationParams {
	ownerEmail: string;
	eventName: string;
	sport: string;
	startTime?: Date;
	endTime?: Date;
	location?: string;
	description?: string;
}

type NewParty = Omit<PartyPost, "id">;

export async function POST(req: NextRequest): NextAPIRes<PartyPost> {
	const body: PartyPostCreationParams = await req.json();
	const partyReq: NewParty = {
		ownerEmail: body.ownerEmail,
		member: "",
		eventName: body.eventName,
		sport: body.sport,
		location: body.location || "",
		description: body.description || "",
		startTime: body.startTime || new Date(),
		endTime: body.endTime || new Date(),
	};
	// fetch res
	let res: PartyPost = {
		...partyReq,
		id: 0,
	};
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

type UpdatePartyPost = Partial<PartyPost> & { id: PartyPost["id"] };

export async function PUT(req: NextRequest): NextAPIRes<PartyPost> {
	req.body;
	const body: PartyPostUpdateParams = await req.json();
	const partyReq: UpdatePartyPost = {
		id: body.id,
		...(body.ownerEmail && { ownerEmail: body.ownerEmail }),
		...(body.eventName && { eventName: body.eventName }),
		...(body.sport && { sport: body.sport }),
		...(body.location && { location: body.location }),
		...(body.description && { description: body.description }),
		...(body.startTime && { startTime: body.startTime }),
		...(body.endTime && { endTime: body.endTime }),
	};
	let res: PartyPost = {
		id: 0,
		ownerEmail: partyReq.ownerEmail || "",
		member: "",
		eventName: partyReq.eventName || "",
		sport: partyReq.sport || "",
		location: partyReq.location || "",
		description: partyReq.description || "",
		startTime: partyReq.startTime || new Date(),
		endTime: partyReq.endTime || new Date(),
	};
	return NextResponse.json(getOkResponse<PartyPost>(res));
}

interface PartyDeleteParams {
	partyIds: PartyPost["id"][];
}
export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: PartyDeleteParams = await req.json();
	const partyIds = body.partyIds;
	return NextResponse.json(getOkResponse("SUCCESS"));
}
