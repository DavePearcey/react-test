import { NextResponse } from "next/server";
import { getRandomQuote } from "@/lib/quotes";

export async function GET() {
  const quote = await getRandomQuote();
  return NextResponse.json(quote);
}
