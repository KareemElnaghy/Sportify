import { NextRequest, NextResponse } from "next/server";

interface GetResponseBody {
	message: string | null;
	name?: string;
	results: (string | null)[];
	test_obj: {
		msg1: string;
	};
}

interface PostResponseBody {
	message: string;
}

export async function GET(req: NextRequest) {
	let foo: string | null = req.nextUrl.searchParams.get("foo");
	return NextResponse.json<GetResponseBody>({
		message: foo,
		name: "hello",
		results: ["one", "two"],
		test_obj: {
			msg1: "res",
		},
	});
}

export async function POST(req: NextRequest) {
	return NextResponse.json<PostResponseBody>({ message: "hello" });
}
