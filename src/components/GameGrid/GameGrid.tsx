import { GameItem } from "@/components/GameItem";
import { GameGridProps } from "./";

export const GameGrid: React.FC<GameGridProps> = ({ games = [] }) => {
  return (
    <div className="grid lg:grid-cols-4 gap-10 px-16">
      {games.map((game, index) => {
        const { title, image } = game;
        return <GameItem title={title} image={image} key={index} />;
      })}
    </div>
  );
};
