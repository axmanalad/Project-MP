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
