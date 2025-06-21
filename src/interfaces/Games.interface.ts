export interface GameItemData {
  id: number;
  cover: CoverData;
  name: string;
  summary: string;
}

export interface CoverData {
  id: number;
  url: string;
}

export interface GameResultsData {
  results: GameItemData[];
}
