import {
	db_getStudents,
	db_getStudentsSize,
} from "@/libs/DBCommunicator/Students/StudentsDB";
import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Student from "@/types/Student";
import { NextRequest, NextResponse } from "next/server";

interface StudentsListAPIResponse {
	studentsCount: number;
	studentsList: Student[];
}

export async function GET(
	req: NextRequest
): NextAPIRes<StudentsListAPIResponse> {
	const p: string | null = req.nextUrl.searchParams.get("page");
	const page: number = p ? Number(p) : 1;

	const r: string | null = req.nextUrl.searchParams.get("recordsPerPage");
	const recordsPerPage: number = r ? Number(r) : 10;

	const s: string | null = req.nextUrl.searchParams.get("searchQuery");

	const res: Student[] = await db_getStudents({
		page: page,
		recordsPerPage: recordsPerPage,
		searchQuery: s,
	});

	const count: number = await db_getStudentsSize();

	return NextResponse.json(
		getOkResponse<StudentsListAPIResponse>({
			studentsCount: count,
			studentsList: res,
		})
	);
}
