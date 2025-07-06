import type React from "react";
import type { WishItem, WishTrackerProps, WishView } from "../../../../types";
import { useState } from "react";
import "../../../../styles/components/games/shared/WishTracker/index.css";
import PityCard from "./PityCard";
import { pityStats } from "../../../../data/wishStats";
import RecentWishHistory from "./RecentWishHistory";
import FullWishHistory from "./FullWishHistory";
import WishHeader from "./WishHeader";

const WishTracker: React.FC<WishTrackerProps> = ({ gameId }) => {
  const [wishes] = useState<WishItem[]>([]);
  const [showSampleData, setShowSampleData] = useState(false);
  const [currentView, setCurrentView] = useState<WishView>('recent');

  const currentPityStats = pityStats[gameId];

  // TODO: Use gameId to fetch user's wish data for this specific game
  
  const sampleWishes: WishItem[] = [
    { id: 8, itemName: "Raiden Shogun", itemType: "Character", rarity: 5, pityCount: 27, timestamp: "2025-07-04 19:50:43" },
    { id: 7, itemName: "Engulfing Lightning", itemType: "Weapon", rarity: 5, pityCount: 30, timestamp: "2025-06-27 12:23:57" },
    { id: 6, itemName: "Xiangling", itemType: "Character", rarity: 4, pityCount: 15, timestamp: "2025-06-27 12:23:57" },
    { id: 5, itemName: "Bennett", itemType: "Character", rarity: 4, pityCount: 8, timestamp: "2025-06-20 12:22:30" },
    { id: 4, itemName: "Favonius Sword", itemType: "Weapon", rarity: 4, pityCount: 12, timestamp: "2025-06-13 08:34:24" },
    { id: 3, itemName: "Thrilling Tales", itemType: "Weapon", rarity: 3, pityCount: 3, timestamp: "2025-06-06 15:12:19" },
    { id: 2, itemName: "Zhongli", itemType: "Character", rarity: 5, pityCount: 89, timestamp: "2025-05-04 18:29:12" },
    { id: 1, itemName: "Barbara", itemType: "Character", rarity: 4, pityCount: 4, timestamp: "2025-05-04 18:29:12" }
  ];

  const displayWishes = showSampleData ? sampleWishes : wishes;

  const renderWishHistory = () => {
    if (currentView === 'recent') {
      return (
        <RecentWishHistory
          wishes={displayWishes}
          onViewAll={() => {setCurrentView('full')}}
        />
      );
    } else {
      return (
        <FullWishHistory
          wishes={displayWishes}
          onBackToRecent={() => {setCurrentView('recent')}}
        />
      );
    }
  };

  return (
    <div className="wish-tracker">
      <WishHeader
        currentView={currentView}
        onViewChange={setCurrentView}
        showSampleData={showSampleData}
        onToggleSampleData={() => {setShowSampleData(!showSampleData)}}
        totalWishes={displayWishes.length}
      />
      <div className="pity-counters">
        {currentPityStats.map((stat) => (
          <PityCard key={`stat.${stat.bannerType}-${String(gameId)}`} {...stat} />
        ))}
      </div>
      {renderWishHistory()}
    </div>
  );
};

export default WishTracker;