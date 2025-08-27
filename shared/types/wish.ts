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

export interface WishStatLabels {
  totalWishes: number;
  fiveStarWLRatio: [number, number, number]; // Ratio of 5-star wins to losses
  avgFiveStarPity: number; // Average pity for 5-star items
  avgFourStarPity: number; // Average pity for 4-star items
  currentWinStreak: number; // Current win streak for 5-star items
  currentLossStreak: number; // Current loss streak for 5-star items
  longestWinStreak: number; // Longest win streak for 5-star items
  longestLossStreak: number; // Longest loss streak for 5-star items
};