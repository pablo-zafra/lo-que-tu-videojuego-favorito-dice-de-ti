import {
  GameItemData,
  GameItemDataProcesed,
} from "@/interfaces/Games.interface";

export const convertIgdbImageUrl = (url: string): string => {
  let newUrl = url.startsWith("https:") ? url : `https:${url}`;
  newUrl = newUrl.replace(/\/t_[a-z_]+\//, "/t_cover_big/");
  newUrl = newUrl.replace(/\.(jpg|png|jpeg|gif)$/, ".webp");

  return newUrl;
};

export const filteredGames = (games: GameItemData[]) => {
  const gamesWithCover = games.filter((game) => game.cover);
  const gamesWithCoverUrl = gamesWithCover.filter((game) => game.cover.url);
  const gamesWithTotalRatingCount = gamesWithCoverUrl.filter(
    (game) => game.total_rating_count
  );
  return gamesWithTotalRatingCount;
};

export const gamesProcessed = (
  games: GameItemData[]
): GameItemDataProcesed[] => {
  const filtered = filteredGames(games);
  const processed: GameItemDataProcesed[] = filtered.map((game) => {
    const { id, cover, name, summary, total_rating_count } = game;
    const coverImg = convertIgdbImageUrl(cover.url);
    return {
      id: id,
      coverImg: coverImg,
      name: name,
      summary: summary,
      total_rating_count: total_rating_count,
    };
  });
  const sorted = processed.sort((a, b) => {
    // Necesario, porque el parámetro sort igdb funciona mal, devuelve siempre error
    return b.total_rating_count - a.total_rating_count;
  });
  return sorted;
};
