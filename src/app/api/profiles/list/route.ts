import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import Student from "@/types/Student";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): NextAPIRes<Student[]> {
	let page: string | null = req.nextUrl.searchParams.get("page");
    // fetch from db using page and return res
    const res: Student[] = []
	return NextResponse.json(getOkResponse<Student[]>(res));
}