import { Suspense } from "react";
import { GameGrid, Form } from "@/components";
import { GameItemData } from "@/interfaces/Games.interface";
import { searchGames } from "@/lib";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const params = await searchParams;
  const query = params.q;
  let games: GameItemData[] = [];
  let error: string | null = null;

  if (query) {
    try {
      games = await searchGames(query);
    } catch (e) {
      console.error("Error al buscar juegos en la página /search:", e);
      error =
        "Hubo un problema al cargar los juegos. Por favor, inténtalo de nuevo más tarde.";
    }
  } else {
    return (
      <>
        <h1 className="text-4xl font-semibold text-center">
          ¿Qué dice tu videojuego favorito de ti?
        </h1>
        <Form />
      </>
    );
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center">
        ¿Qué dice tu videojuego favorito de ti?
      </h1>
      <Form />
      {error ? (
        <p className="text-center text-lg mt-8">{error}</p>
      ) : (
        <Suspense fallback={<p>Cargando resultados...</p>}>
          <GameGrid games={games} />
        </Suspense>
      )}
    </>
  );
}
