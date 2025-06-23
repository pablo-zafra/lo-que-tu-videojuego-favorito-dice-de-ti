"use client";
import { GameItem, GameItemPlaceholder, Quote } from "@/components";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function GamePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [gameLoadging, setGameLoading] = useState<boolean>(true);
  const [game, setGame] = useState<GameItemDataProcesed | null>(null);

  const getGame = useCallback(async () => {
    try {
      const response = await fetch(`/api/game/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
      });
      if (!response.ok) {
        router.push("/not-found");
        throw new Error("Error al obtener el juego");
      }
      const data = await response.json();
      setGame(data);
      setGameLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    setGameLoading(true);
    setGame(null);
    getGame();
  }, [id, getGame]);

  return (
    <>
      <div className="w-full max-w-42">
        {gameLoadging ? (
          <GameItemPlaceholder />
        ) : (
          <>{game && <GameItem {...game} />}</>
        )}
      </div>

      <Quote
        quote="
              Seguramente tienes una paciencia infinita y disfrutas de ser
              humillado repetidamente por un jefe."
      />
      <ButtonLink href="/" text="Volver" />
    </>
  );
}
