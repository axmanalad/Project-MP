export interface Game {
  id: number;
  name: string;
  title: string;
  author: string;
  releaseDate: string;
  imageUrl: string;
  bgImageURL: string;
  websiteUrl: string;
  isAvailable: boolean;
}

export interface GameCardProps {
  game: Game;
}

export interface GameContextType {
  myGames: Game[];
  addToMyGames: (game: Game) => void;
  removeFromMyGames: (gameId: Game["id"]) => void;
  isMyGame: (gameId: Game["id"]) => boolean;
}