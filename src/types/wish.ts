export interface WishItem {
  id: number;
  itemName: string;
  itemType: string;
  rarity: number;
  timestamp: string;
}

export interface Wish extends WishItem {
  gameId: string;
  itemType: 'character' | 'weapon';
  rarity: 3 | 4 | 5;
  bannerType: 'character' | 'weapon' | 'standard';
  pityCount: number;
  source: 'manual' | 'import';
}

export interface WishHistory {
  gameId: string;
  wishes: Wish[];
}

export interface WishSummary {
  totalWishes: number;
  totalCharacters: number;
  totalWeapons: number;
  fiveStarCharacters: number;
  fiveStarWeapons: number;
  fourStarCharacters: number;
  fourStarWeapons: number;
  threeStarItems: number;
}

export interface WishStats {
  totalWishes: number;
  fiveStarRate: number; // Percentage
  fourStarRate: number; // Percentage
  threeStarRate: number; // Percentage
  averagePity: number; // Average pity count for 5-star items
}

export interface PityCounter {
  bannerType: string;
  current: number;
  max: number;
  guaranteed: boolean;
}

type gameId = number;

export type PityStatsRecord = Record<gameId, PityCounter[]>;