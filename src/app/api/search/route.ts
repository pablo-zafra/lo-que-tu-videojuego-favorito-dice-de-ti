import { type NextRequest } from "next/server";
import { searchGames } from "@/lib";

export async function GET(request: NextRequest) {
  const expectedApiKey = process.env.NEXT_PUBLIC_API_KEY;
  const providedApiKey = request.headers.get("X-API-Key");
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

  if (!providedApiKey || providedApiKey !== expectedApiKey) {
    console.error("Invalid API key");
    return Response.json({ error: "Invalid API key" }, { status: 401 });
  }

  if (query) {
    try {
      const games = await searchGames(query);
      return Response.json(games, { status: 200 });
    } catch (error) {
      return Response.json({ error: error }, { status: 404 });
    }
  } else {
    return Response.json({ error: "Query is required" }, { status: 404 });
  }
}
