import { Suspense } from "react";
import { GameItem, Quote } from "@/components";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { getGameById } from "@/lib/igdbApiGetGame";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

export default async function SearchPage({
  params,
}: {
  params: { id?: string };
}) {
  const gameParams = await params;
  const { id } = gameParams;

  let game: GameItemDataProcesed;

  if (id) {
    try {
      game = await getGameById(id);

      return (
        <>
          <Suspense fallback={<p>Cargando resultado...</p>}>
            <div className="max-w-42">
              <GameItem {...game} />
            </div>
          </Suspense>
          <Quote
            quote="
              Seguramente tienes una paciencia infinita y disfrutas de ser
              humillado repetidamente por un jefe."
          />
          <ButtonLink href="/" text="Volver" />
        </>
      );
    } catch (error) {
      console.error("Error al obtener el juego de IGDB por ID:", error);

      return (
        <>
          <h1 className="text-4xl font-semibold text-center">
            404 - El juego que has introducido no existe:
          </h1>
          <ButtonLink href="./" text="Volver" />
        </>
      );
    }
  } else {
    return (
      <>
        <h1 className="text-4xl font-semibold text-center">
          ID de juego no proporcionado.
        </h1>
        <ButtonLink href="./" text="Volver" />
      </>
    );
  }
}
