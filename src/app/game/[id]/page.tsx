"use client";
import React, { useCallback, useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";
import { useGameSelectedContext } from "@/context";
import {
  GameItem,
  GameItemPlaceholder,
  Quote,
  QuotePlaceholder,
  ButtonLink,
  ShareButton,
} from "@/components";

export default function GamePage() {
  const router = useRouter();
  const params = useParams<{ id: string }>();
  const { id } = params;
  const [gameLoadging, setGameLoading] = useState<boolean>(true);
  const [game, setGame] = useState<GameItemDataProcesed | null>(null);
  const { gameSelectedData, setGameSelectedData } = useGameSelectedContext();
  const [quoteLoading, setQuoteLoading] = useState<boolean>(true);
  const [quote, setQuote] = useState<string | null>(null);
  const [quoteError, setQuoteError] = useState<string | null>(null);

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

  const fetchQuote = useCallback(async () => {
    if (!game) {
      return;
    }
    const { name, summary } = game;

    try {
      const response = await fetch(`/api/quote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": process.env.NEXT_PUBLIC_API_KEY as string,
        },
        body: JSON.stringify({ name: name, summary: summary }),
      });
      const data = await response.json();
      if (response.ok) {
        // console.log("Quote generated, response:", data);
        const newQoute = data;
        setQuote(newQoute ?? "Error al generar la frase con IA");
        setQuoteLoading(false);
        setQuoteError(null);
      } else {
        setQuoteError(`Error al generar la frase con IA: ${data.message}`);
        setQuoteLoading(false);
      }
    } catch (error) {
      setQuote("Error al generar la frase con IA");
      setQuoteLoading(false);
      console.log("Error en fetch game del API Route", error);
    }
  }, [game]);

  useEffect(() => {
    setGameLoading(true);
    setGame(null);
    if (gameSelectedData.gameSelected) {
      setGame(gameSelectedData.gameSelected);
      setGameLoading(false);
      // console.log("Game was selected: ", gameSelectedData);
    } else {
      fetchGame();
    }
  }, [id, fetchGame, gameSelectedData]);

  useEffect(() => {
    if (!game) {
      return;
    }
    const { name, summary } = game;
    if (name && summary) {
      setQuoteLoading(true);
      fetchQuote();
    }
  }, [fetchQuote, game]);

  return (
    <>
      <div className="w-full max-w-42">
        {gameLoadging ? (
          <GameItemPlaceholder />
        ) : (
          <>{game && <GameItem {...game} />}</>
        )}
      </div>
      {quoteLoading ? (
        <QuotePlaceholder />
      ) : (
        <>
          {typeof quote === "string" ? (
            <Quote quote={quote} />
          ) : (
            <p>{quoteError}</p>
          )}
        </>
      )}
      <div className="flex justify-center w-full gap-6">
        <ButtonLink href="/" text="Buscar otro juego" />{" "}
        <ShareButton
          text={`Esto es lo que ${game?.name}, tu videojuego favorito, dice de ti`}
        />
      </div>
    </>
  );
}
