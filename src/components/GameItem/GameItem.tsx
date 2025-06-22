import Image from "next/image";
import type { GameItemDataProcesed } from "@/interfaces/Games.interface";

export const GameItem: React.FC<GameItemDataProcesed> = (
  GameItemDataProcesed
) => {
  const { name, coverImg } = GameItemDataProcesed;

  // console.log(GameItemDataProcesed);
  return (
    <div className="flex flex-col items-start bg-gray-dark-XX rounded-2xl overflow-hidden cursor-pointer transition-transform hover:scale-103 hover:shadow-xl ">
      <div className="flex items-center justify-center w-full aspect-3/4 bg-gray overflow-hidden">
        <Image
          src={coverImg}
          className="w-full h-full object-cover"
          alt={name}
          width={300}
          height={300}
        />
      </div>
      <div className="w-full p-4 font-semibold text-md md:text-lg">{name}</div>
    </div>
  );
};
