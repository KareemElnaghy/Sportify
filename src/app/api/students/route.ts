import { extractListParams } from "@/libs/Utils/URLParameterization";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Student from "@/types/Student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Student[]> {
	let studentEmails: string[] = extractListParams(req, "studentEmails");
	studentEmails = studentEmails.map((mail) =>
		mail.endsWith("@aucegypt.edu") ? mail : `${mail}@aucegypt.edu`
	);
	// fetch from db using email and return res
	const res: Student[] = [];
	return NextResponse.json(getOkResponse<Student[]>(res));
}

interface studentUpdateParams {
	email: string;
	firstName?: string;
	lastName?: string;
	photoLink?: string | null;
	isTrainer?: boolean;
	phoneNumber?: string;
}
type UpdateStudent = Partial<Student> & { email: Student["email"] };
export async function PUT(req: NextRequest): NextAPIRes<Student> {
	const body: studentUpdateParams = await req.json();
	const studentReq: UpdateStudent = {
		email: body.email,
		...(body.firstName && { firstName: body.firstName }),
		...(body.lastName && { lastName: body.lastName }),

		...(body.photoLink && { photoLink: body.photoLink }),
		...(body.isTrainer && { isTrainer: body.isTrainer }),

		...(body.phoneNumber && { phoneNumber: body.phoneNumber }),
	};
	// fetch res
	const res: Student = {
		email: studentReq.email,
		firstName: studentReq.firstName || "",
		lastName: studentReq.lastName || "",
		photoLink: studentReq.photoLink || null,
		isTrainer: studentReq.isTrainer || false,
		phoneNumber: studentReq.phoneNumber || "",
		isBanned: false,
	};
	return NextResponse.json(getOkResponse<Student>(res));
}

interface StudentDeleteParams {
	studentEmails: Student["email"][];
	isBanned: boolean;
}

export async function DELETE(req: NextRequest): NextAPIRes<"SUCCESS" | "FAIL"> {
	const body: StudentDeleteParams = await req.json();
	const studentEmails = body.studentEmails;
	const isBanned = body.isBanned;
	// ban students
	return NextResponse.json(getOkResponse("SUCCESS"));
}
