import { Suspense } from "react";
import { Form, ShareButton } from "@/components";
// import { ButtonLink } from "@/components/ButtonLink/ButtonLink";

export default function Home() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-center animate-fade-in-up">
        ¿Qué dice tu videojuego favorito de ti?
      </h1>
      <Suspense
        fallback={
          <div className="w-full bg-gray-light h-16 rounded-full animate-pulse"></div>
        }
      >
        <Form />
      </Suspense>
      {/* <ButtonLink href="./" text="Juego random" /> */}

      <ShareButton text="¿Qué dice tu videojuego favorito de ti?" />
    </>
  );
}
