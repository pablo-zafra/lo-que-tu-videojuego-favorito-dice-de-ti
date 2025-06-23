import { getQuote } from "@/lib";
import { type NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const expectedApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const providedApiKey = request.headers.get("X-API-Key");

  if (!providedApiKey || providedApiKey !== expectedApiKey) {
    console.error("Invalid API key");
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  const requestBody = await request.json();
  const { name, summary } = requestBody;

  try {
    const quote = await getQuote({ name, summary });
    return Response.json(quote);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Error getting quote" }, { status: 500 });
  }
}
