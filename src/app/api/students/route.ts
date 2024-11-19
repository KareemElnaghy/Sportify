import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Student from "@/types/Student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Student[]> {
	let emailOrUsername: string[] =
		req.nextUrl.searchParams.getAll("emailOrUsername");

	let emails = emailOrUsername.map((item) =>
		item.endsWith("@aucegypt.edu") ? item : `${item}@aucegypt.edu`
	);
	// fetch from db using email and return res
	const res: Student[] = [];
	return NextResponse.json(getOkResponse<Student[]>(res));
}

interface ProfileUpdateParams {
	firstName?: string;
	lastName?: string;
	photoLink?: string | null;
	isTrainer?: boolean;
	phoneNumber?: string;
	passHash?: string;
	isBanned?: boolean;
}
export async function PUT(req: NextRequest): NextAPIRes<Student> {
	req.body;
	const body: ProfileUpdateParams = await req.json();
	let res: Student; // fetch res
	return NextResponse.json(getOkResponse<Student>(res));
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: string[] = await req.json();
	return NextResponse.json(getOkResponse("SUCCESS"));
}
