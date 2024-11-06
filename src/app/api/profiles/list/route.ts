import { db_getStudents } from "@/libs/DBCommunicator/Students/StudentsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Student from "@/types/Student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Student[]> {
	const page: string | null = req.nextUrl.searchParams.get("page");
	const p: number = page ? Number(page) : 1;
	const res: Student[] = await db_getStudents({ page: p });
	return NextResponse.json(getOkResponse<Student[]>(res));
}
