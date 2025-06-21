import { GameGrid, Form } from "@/components";
import imgGame from "../../../public/media/uncharted.jpg";

export default function SearchPage() {
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
    <>
      <h1 className="text-4xl font-semibold text-center">
        ¿Qué dice tu videojuego favorito de ti?
      </h1>
      <Form />
      <GameGrid games={games} />
    </>
  );
}
