import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { getTwitchAccessToken, gameProcessed } from "@/lib";
import { unstable_cache } from "next/cache";

export const getGameById = unstable_cache(
  async (id: string): Promise<GameItemDataProcesed> => {
    try {
      const accessToken = await getTwitchAccessToken();
      const CLIENT_ID = process.env.TWITCH_CLIENT_ID;

      if (!accessToken || !CLIENT_ID) {
        throw new Error(
          "No se pudo obtener el token o el Client ID para IGDB. Verifica tus credenciales."
        );
      }

      const requestBody = `
      fields name, summary, cover.url, total_rating_count;
      where id = ${id};
    `;

      const igdbResponse = await fetch("https://api.igdb.com/v4/games", {
        method: "POST",
        headers: {
          "Client-ID": CLIENT_ID,
          Authorization: `Bearer ${accessToken.accessToken}`,
          "Content-Type": "text/plain",
        },
        body: requestBody,
      });

      if (!igdbResponse.ok) {
        const errorData = await igdbResponse.json();
        console.error("Error al buscar en IGDB:", errorData);
        throw new Error(
          `Error al buscar juego: ${igdbResponse.status} ${
            igdbResponse.statusText
          } - ${errorData.message || ""}`
        );
      }

      const game = await igdbResponse.json();
      // console.log("gameByID: ", game);

      const processedGame = gameProcessed(game[0]);

      return processedGame;
    } catch (error) {
      console.error("Fallo en la búsqueda de juegos de IGDB:", error);
      throw error;
    }
  },
  ["id"],
  { revalidate: 86400 }
);
