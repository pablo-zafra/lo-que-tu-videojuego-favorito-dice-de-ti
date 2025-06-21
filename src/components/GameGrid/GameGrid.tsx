import { GameItem } from "@/components/GameItem";
import { GameItemData } from "@/interfaces/Games.interface";

interface GameGridProps {
  games: GameItemData[];
}

export const GameGrid: React.FC<GameGridProps> = ({ games = [] }) => {
  if (games.length > 0) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 md:px-16">
        {games.map((game: GameItemData) => {
          const { id } = game;
          return <GameItem {...game} key={id} />;
        })}
      </div>
    );
  }
};
