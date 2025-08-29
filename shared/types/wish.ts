export interface WishItem {
  bannerId: string;
  gameWishId: string;
  gachaType: string;
  name: string;
  itemType: string;
  rarity: string;
  pityCount: number;
  time: Date;
  isWin: boolean | null;
  isGuaranteed: boolean | null;
  wishNumber: number;
};

export interface WishStats {
  totalWishes: number;
  fiveStarWLRatio: number[];
  avgFiveStarPity: number;
  avgFourStarPity: number;
  currentWinStreak: number;
  currentLossStreak: number;
  longestWinStreak: number;
  longestLossStreak: number;
}

export interface PityCounters {
  userGameId: string;
  gachaType: string;
  current: number;
  max: number;
  guaranteed: boolean;
}