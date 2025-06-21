import { GameGrid, Form, Footer } from "@/components";
import imgGame from "../../public/media/uncharted.jpg";

export default function Home() {
  const games = [
    {
      title: "Uncharted",
      image: imgGame.src,
    },
    {
      title: "The Witcher 3",
      image: imgGame.src,
    },
    {
      title: "The Last of Us",
      image: imgGame.src,
    },
    {
      title: "The Legend of Zelda: Breath of the Wild",
      image: imgGame.src,
    },
    {
      title: "The Elder Scrolls V: Skyrim",
      image: imgGame.src,
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen py-5">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl gap-21">
        <main className="flex flex-col w-full py-32 gap-16">
          <h1 className="text-4xl font-semibold text-center">
            ¿Qué dice tu videojuego favorito de ti?
          </h1>
          <Form />
          <GameGrid games={games} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
