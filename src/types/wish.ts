import type { BannerFilterType } from "./banner";

export interface WishItem {
  id: number;
  gachaType: 'character' | 'weapon' | 'standard';
  itemName: string;
  itemType: string;
  rarity: number;
  pityCount: number;
  timestamp: string;
  isWLGuarantee: 'Win' | 'Loss' | 'Guaranteed' | 'None';
}

export interface WishItemProps {
  wish: WishItem;
  compact?: boolean;
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

export type WishView = 'recent' | 'full';

export interface WishHeaderProps {
  currentView: WishView;
  onViewChange: (view: WishView) => void;
  showSampleData: boolean;
  onToggleSampleData: () => void;
  totalWishes: number;
}

export interface WishFilterTypes {
  rarity: 'all' | '3' | '4' | '5';
  itemType: 'all' | 'character' | 'weapon';
  // TODO: Filter by banner: e.g. bannerType: 'character' | 'weapon' | 'standard';
  sortBy: 'newest' | 'oldest' | 'rarity';
};

export interface WishFilterProps {
  filters: WishFilterTypes;
  onFilterChange: (filters: WishFilterTypes) => void;
  resultCount: number;
}

export interface RecentWishHistoryProps {
  wishes: WishItem[];
  onViewAll: () => void;
  selectedBanner?: BannerFilterType;
  onClearFilter?: () => void;
  isFiltered?: boolean;
}

export interface FullWishHistoryProps {
  wishes: WishItem[];
  onBackToRecent: () => void;
  selectedBanner?: BannerFilterType;
  onClearFilter?: () => void;
  isFiltered?: boolean;
}

export interface EmptyWishStateProps {
  message?: string;
  showIcon?: boolean;
}

interface PityCounter {
  bannerType: string;
  current: number;
  max: number;
  guaranteed: boolean;
}

export interface PityCardProps extends PityCounter {
  onClick?: () => void;
  isSelected?: boolean;
}

type gameId = number;

export type PityStatsRecord = Record<gameId, PityCounter[]>;