import { extractListParams } from "@/libs/Utils/URLParameterization";
import Admin from "@/types/Admin";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Admin[]> {
	let adminEmails: string[] = extractListParams(req, "adminEmails");
	// fetch from db using courtIds and return res
	const res: Admin[] = [];
	return NextResponse.json(getOkResponse<Admin[]>(res));
}

interface AdminCreationParams {
	email: string;
	firstName: string;
	lastName: string;
}

type NewAdmin = Admin;

export async function POST(req: NextRequest): NextAPIRes<Admin> {
	const body: AdminCreationParams = await req.json();
	const adminReq: NewAdmin = {
		email: body.email,
		firstName: body.firstName,
		lastName: body.lastName,
	};
	// fetch res
	const res: Admin = adminReq;
	return NextResponse.json(getOkResponse<Admin>(res));
}

interface AdminUpdateParams {
	email: string;
	firstName?: string;
	lastName?: string;
}
type UpdateAdmin = Partial<Admin> & { email: Admin["email"] };
export async function PUT(req: NextRequest): NextAPIRes<Admin> {
	const body: AdminUpdateParams = await req.json();
	const adminReq: UpdateAdmin = {
		email: body.email,
		...(body.firstName && { firstName: body.firstName }),
		...(body.lastName && { lastName: body.lastName }),
	};
	// fetch res
	const res: Admin = {
		email: adminReq.email,
		firstName: adminReq.firstName || "",
		lastName: adminReq.lastName || "",
	};
	return NextResponse.json(getOkResponse<Admin>(res));
}

interface AdminDeleteParams {
	adminEmails: Admin["email"][];
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: AdminDeleteParams = await req.json();
	const adminEmails = body.adminEmails;
	console.log("here", adminEmails);
	return NextResponse.json(getOkResponse("SUCCESS"));
}
