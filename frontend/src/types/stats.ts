export interface StatCardProps {
  title: string;
  value: string | number;
}

type gameId = number;

export type GameStatsRecord = Record<gameId, StatCardProps[]>;