"use client";
import {
  GameItem,
  GameItemPlaceholder,
  Quote,
  QuotePlaceholder,
} from "@/components";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";
import { useGameSelectedContext } from "@/context";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";

export default function GamePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [gameLoadging, setGameLoading] = useState<boolean>(true);
  const [game, setGame] = useState<GameItemDataProcesed | null>(null);
  const { gameSelectedData, setGameSelectedData } = useGameSelectedContext();
  const [quoteLoading, setQuoteLoading] = useState<boolean>(true);
  const [quote, setQuote] = useState<string>(
    "Seguramente tienes una paciencia infinita y disfrutas de serhumillado repetidamente por un jefe."
  );

  const setGameOnContext = useCallback(
    (data: GameItemDataProcesed) => {
      setGameSelectedData({
        gameSelected: data,
      });
    },
    [setGameSelectedData]
  );

  const fetchGame = useCallback(async () => {
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
      setGameOnContext(data);
      setGameLoading(false);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, [id, router, setGameOnContext]);

  useEffect(() => {
    setGameLoading(true);
    setGame(null);
    if (gameSelectedData.gameSelected) {
      setGame(gameSelectedData.gameSelected);
      setGameLoading(false);
      console.log("Game was selected: ", gameSelectedData);
    } else {
      fetchGame();
    }
  }, [id, fetchGame, gameSelectedData]);

  return (
    <>
      <div className="w-full max-w-42">
        {gameLoadging ? (
          <GameItemPlaceholder />
        ) : (
          <>{game && <GameItem {...game} />}</>
        )}
      </div>

      {quoteLoading ? <QuotePlaceholder /> : <Quote quote={quote} />}

      <ButtonLink href="/" text="Buscar otro juego" />
    </>
  );
}
