"use client";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { GameItem, GameItemPlaceholder } from "@/components/";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";

export const GameGrid: React.FC = () => {
  const params = useSearchParams();
  const q = params.get("q");

  const [loading, setLoading] = useState<boolean>(true);
  const [games, setGames] = useState<GameItemDataProcesed[]>([]);

  const getGames = useCallback(async () => {
    try {
      const response = await fetch(`/api/search?query=${q}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });
      const data = await response.json();
      setGames(data);
      setLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [q]);

  useEffect(() => {
    setLoading(true);
    getGames();
  }, [q, getGames]);
  return (
    <>
      {loading ? (
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 md:px-16">
          <GameItemPlaceholder />
          <GameItemPlaceholder />
          <GameItemPlaceholder />
          <GameItemPlaceholder />
          <GameItemPlaceholder />
          <GameItemPlaceholder />
        </div>
      ) : games.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 md:px-16">
          {games.map((game: GameItemDataProcesed) => {
            const { id } = game;
            return <GameItem {...game} key={id} />;
          })}
        </div>
      ) : (
        <p className="w-full text-center">
          No existe ningún videojuego con ese nombre. ¿Seguro que lo has escrito
          bien?
        </p>
      )}
    </>
  );
};
