import { type NextRequest } from "next/server";
import { fetchQuote } from "@/lib";

export async function POST(request: NextRequest) {
  const expectedApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const providedApiKey = request.headers.get("X-API-Key");

  if (!providedApiKey || providedApiKey !== expectedApiKey) {
    console.error("Invalid API key");
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  const requestBody = await request.json();
  const { name, summary } = requestBody;

  if (!name || !summary) {
    console.error("Name or description is missing");
    return Response.json(
      { error: "Name or description is missing" },
      { status: 400 }
    );
  }

  try {
    const response = await fetchQuote({ name, summary });
    console.log(
      "Quote generated with game name :",
      name,
      "and summary:",
      summary,
      "Response, result: ",
      response
    );
    return Response.json(response, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(
      {
        error: "Error getting quote",
        message: error instanceof Error ? error.message : String(error),
      },
      { status: 500 }
    );
  }
}
