import { Suspense } from "react";
import { GameGrid, Form } from "@/components";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { searchGames } from "@/lib";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const params = await searchParams;
  const query = params.q;
  let games: GameItemDataProcesed[] = [];

  if (query) {
    games = await searchGames(query);
  }

  return (
    <>
      <h1 className="text-4xl font-semibold text-center">
        ¿Qué dice tu videojuego favorito de ti?
      </h1>
      <Form />
      <Suspense fallback={<p>Cargando resultados...</p>}>
        <GameGrid games={games} />
      </Suspense>
    </>
  );
}
