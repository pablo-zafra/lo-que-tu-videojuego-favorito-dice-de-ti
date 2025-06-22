export interface GameItemData {
  id: number;
  cover: CoverData;
  name: string;
  summary: string;
  total_rating_count: number;
}

export interface GameItemDataProcesed {
  id: number;
  coverImg: string;
  name: string;
  summary: string;
  total_rating_count: number;
}

export interface CoverData {
  id: number;
  url: string;
}

export interface GameResultsData {
  results: GameItemData[];
}
