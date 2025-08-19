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