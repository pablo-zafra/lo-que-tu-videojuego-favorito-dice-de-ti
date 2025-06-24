import { Suspense } from "react";
import { GameGrid, Form } from "@/components";

export default async function SearchPage() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center">
        ¿Qué dice tu videojuego favorito de ti?
      </h1>
      <Suspense
        fallback={<div className="w-full bg-gray h-20 animate-pulse"></div>}
      >
        <Form />
      </Suspense>
      <GameGrid />
    </>
  );
}
