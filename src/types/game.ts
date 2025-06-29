export interface Game {
  id: number;
  title: string;
  author: string;
  releaseDate: string;
  imageUrl: string;
  websiteUrl: string;
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