"use client";
import { createContext, useState, useContext, ReactNode } from "react";
import { GameItemDataProcesed } from "@/interfaces/Games.interface";

interface gameSelectedData {
  gameSelected: GameItemDataProcesed | undefined;
}

interface GameSelectedContextType {
  gameSelectedData: gameSelectedData;
  setGameSelectedData: React.Dispatch<React.SetStateAction<gameSelectedData>>;
}

const GameSelectedContext = createContext<GameSelectedContextType | undefined>(
  undefined
);

export const GameSelectedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameSelectedData, setGameSelectedData] = useState<gameSelectedData>({
    gameSelected: undefined,
  });

  return (
    <GameSelectedContext.Provider
      value={{ gameSelectedData, setGameSelectedData }}
    >
      {children}
    </GameSelectedContext.Provider>
  );
};

export const useGameSelectedContext = () => {
  const context = useContext(GameSelectedContext);
  if (context === undefined) {
    throw new Error(
      "useGameSelectedContext must be used within a GameSelectedProvider"
    );
  }
  return context;
};
