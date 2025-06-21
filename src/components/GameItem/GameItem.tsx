import Image from "next/image";
import { GameItemProps } from "./";

export const GameItem: React.FC<GameItemProps> = ({ title, image }) => {
  return (
    <div className="flex flex-col items-start bg-gray-dark-XX rounded-2xl overflow-hidden cursor-pointer hover:opacity-90">
      <div className="w-full aspect-square bg-gray overflow-visible">
        <Image
          src={image}
          className="w-full h-full object-cover"
          alt="Uncharted 3"
          width={300}
          height={300}
        />
      </div>
      <div className="w-full p-4 font-semibold text-lg">{title}</div>
    </div>
  );
};
