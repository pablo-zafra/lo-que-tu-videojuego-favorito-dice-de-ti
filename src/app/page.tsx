import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-5">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-13">
        <main className="flex flex-col gap-11">
          <h1 className="text-4xl font-semibold text-center">
            ¿Qué dice tu videojuego favorito sobre tí?
          </h1>
          <form className="w-full">
            <input
              type="text"
              id="gameName"
              placeholder="Escribe el título..."
              className="w-full text-xl bg-white px-4 py-2 rounded-full placeholder:text-gray-light"
            />
          </form>
        </main>
        <footer className="w-full text-md text-center">
          <div className="">
            Diseñado y desarrollado por{" "}
            <Link href="https://pablozafra.dev" className="text-turquesa">
              Pablo Zafra
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
