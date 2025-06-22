import { searchGames } from "@/lib";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");

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

  return Response.json({ query });
}
