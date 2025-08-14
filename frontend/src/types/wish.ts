import type { BannerFilterType } from "./banner";

type gameId = number;

export interface WishItem {
  id: number;
  gachaType: 'character' | 'weapon' | 'standard';
  itemName: string;
  itemType: string;
  rarity: number;
  pityCount: number;
  timestamp: string;
  isWLGuarantee: 'Win' | 'Loss' | 'Guaranteed' | 'None';
};

export interface WishItemProps {
  wish: WishItem;
  compact?: boolean;
};

export type WishView = 'recent' | 'full';

export interface WishHeaderProps {
  currentView: WishView;
  onViewChange: (view: WishView) => void;
  showSampleData: boolean;
  onToggleSampleData: () => void;
  totalWishes: number;
  gameId: gameId;
};

type WishStatType = 'regular' | 'average' | 'streak' | 'ratio';

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

export interface WishStatsProps {
  gameId: gameId;
  wishes: WishItem[];
  selectedBanner?: BannerFilterType;
  isFiltered?: boolean;
};

export interface WishStatsData {
  label: string;
  value: string | number;
  subtext?: string;
  type: WishStatType;
}

export type WishStatsRecord = Record<gameId, WishStatsData[]>;

interface WishCostData {
  single: number;
  ten: number;
  currency: string; // e.g. 'primogems', 'fates'
}

export type WishCostRecord = Record<gameId, WishCostData>;

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
};

interface WishImportInfo {
  gameName: string;
  scriptName: string;
  steps: string[];
}

export type WishImportRecord = Record<gameId, WishImportInfo>;

export interface RecentWishHistoryProps {
  wishes: WishItem[];
  onViewAll: () => void;
  selectedBanner?: BannerFilterType;
  onClearFilter?: () => void;
  isFiltered?: boolean;
};

export interface FullWishHistoryProps {
  wishes: WishItem[];
  onBackToRecent: () => void;
  selectedBanner?: BannerFilterType;
  onClearFilter?: () => void;
  isFiltered?: boolean;
};

export interface EmptyWishStateProps {
  message?: string;
  showIcon?: boolean;
};

interface PityCounter {
  bannerType: string;
  current: number;
  max: number;
  guaranteed: boolean;
};

export interface PityCardProps extends PityCounter {
  onClick?: () => void;
  isSelected?: boolean;
};

export type PityStatsRecord = Record<gameId, PityCounter[]>;

export interface WishImportInstructionsProps {
  gameId: gameId;
  onClose: () => void;
  isOpen: boolean;
};

export interface StepCardProps {
  step: string;
  instruction?: string;
  instructionList?: string[];
}