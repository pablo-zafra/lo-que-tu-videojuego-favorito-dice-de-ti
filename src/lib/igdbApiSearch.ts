import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { getValidTwitchAccessToken } from ".";
import { gamesProcessed } from "./igdbApiResultProcess";

export const searchGames = async (
  query: string
): Promise<GameItemDataProcesed[]> => {
  try {
    const accessToken = await getValidTwitchAccessToken();

    const CLIENT_ID = process.env.TWITCH_CLIENT_ID;

    if (!accessToken || !CLIENT_ID) {
      throw new Error(
        "No se pudo obtener el token o el Client ID para IGDB. Verifica tus credenciales."
      );
    }

    const requestBody = `
      fields name, summary, cover.url, total_rating_count;
      search "${query}";
      where game_type = 0;
      where version_parent = null;
      limit 40;
    `;

    const igdbResponse = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": CLIENT_ID,
        Authorization: `Bearer ${accessToken.accessToken}`,
        "Content-Type": "text/plain",
      },
      body: requestBody,
      next: { revalidate: 3600 },
    });

    if (!igdbResponse.ok) {
      const errorData = await igdbResponse.json();
      console.error("Error al buscar en IGDB:", errorData);
      throw new Error(
        `Error al buscar juegos: ${igdbResponse.status} ${
          igdbResponse.statusText
        } - ${errorData.message || ""}`
      );
    }

    const games = await igdbResponse.json();

    const processedGames = gamesProcessed(games);

    return processedGames;
  } catch (error) {
    console.error("Fallo en la búsqueda de juegos de IGDB:", error);
    throw error;
  }
};
