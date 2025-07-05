import type { Game } from "./game";

export interface GenshinDashboardProps {
  game: Game;
}

export interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export interface GameHeaderProps {
  game: Game;
}

export interface WishTrackerProps {
  gameId: number;
}

export interface ComingSoonDashboardProps {
  gameName: string;
}

export interface Tab {
  id: string;
  label: string;
  available: boolean;
}