import { getOkResponse, NextAPIRes } from "@/types/APIResponse";
import PartyPost from "@/types/PartyPost";
import { NextRequest, NextResponse } from "next/server";
import { Message } from "postcss";

export async function GET(req: NextRequest): NextAPIRes<Message[]> {
	let page: string | null = req.nextUrl.searchParams.get("page");
    // fetch from db using page and return res
    const res: Message[] = []
	return NextResponse.json(getOkResponse<Message[]>(res));
}

interface MessageCreationParams {
    senderEmail: string;
    receiverEmail: string;
    content: string;
}

export async function POST(req: NextRequest): NextAPIRes<Message> {
    const body: MessageCreationParams = await req.json();
    let res: Message;
	return NextResponse.json(getOkResponse<Message>(res));
}