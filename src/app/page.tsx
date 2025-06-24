import { Suspense } from "react";
import { Form } from "@/components";
import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

export default function Home() {
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
      <ButtonLink href="./" text="Juego random" />
    </>
  );
}
