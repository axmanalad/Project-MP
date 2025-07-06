import type React from "react";
import type { WishItem, WishTrackerProps } from "../../../../types";
import { useState } from "react";
import "../../../../styles/components/games/shared/WishTracker/index.css";
import PityCard from "./PityCard";
import { pityStats } from "../../../../data/wishStats";

const WishTracker: React.FC<WishTrackerProps> = ({ gameId }) => {
  const [wishes] = useState<WishItem[]>([]);
  const [showSampleData, setShowSampleData] = useState(false);

  const currentPityStats = pityStats[gameId];

  // TODO: Use gameId to fetch user's wish data for this specific game
  
  const sampleWishes: WishItem[] = [
    { id: 1, itemName: "Raiden Shogun", itemType: "Character", rarity: 5, pityCount: 27, timestamp: "2 days ago" },
    { id: 2, itemName: "Engulfing Lightning", itemType: "Weapon", rarity: 5, pityCount: 30, timestamp: "1 week ago" },
    { id: 3, itemName: "Xiangling", itemType: "Character", rarity: 4, pityCount: 15, timestamp: "1 week ago" }
  ];

  const displayWishes = showSampleData ? sampleWishes : wishes;

  const toggleSampleData = () => {
    setShowSampleData(!showSampleData);
  };

  return (
    <div className="wish-tracker">
      <div className="wish-tracker-header">
        <h2>Wish Tracker</h2>
        <div className="flex gap-3">
          <button 
            type="button" 
            className="btn bg-gray-500 hover:bg-gray-600 text-sm px-4 py-2"
            onClick={toggleSampleData}
          >
            {showSampleData ? 'Hide Sample' : 'Show Sample'}
          </button>
          <button type="button" className="btn">Add New Wish</button>
        </div>
      </div>

      <div className="pity-counters">
        {currentPityStats.map((stat) => (
          <PityCard 
            key={`stat.${stat.bannerType}-${String(gameId)}`}
            bannerType={stat.bannerType} 
            current={stat.current} 
            max={stat.max} 
            guaranteed={stat.guaranteed} 
          />
        ))}
      </div>

      <div className="recent-wishes">
        <h3>Recent Wishes</h3>
        {displayWishes.length === 0 ? (
          <div className="empty-state">
            <div className="text-6xl mb-4">🎭</div>
            <p>No wishes recorded yet.</p>
            <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
              Start tracking your wishes to see your pull history and statistics!
            </p>
          </div>
        ) : (
          <div className="wish-history">
            {displayWishes.map((wish) => (
              <div key={wish.id} className="wish-item">
                <div className="wish-item-info">
                  <div className={`wish-item-rarity rarity-${wish.rarity.toString()}`}></div>
                  <div>
                    <div className="wish-item-name">{wish.itemName}</div>
                    <div className="flex items-center gap-2">
                      <div className="wish-item-type">{wish.itemType}</div>
                      <div className="wish-item-pity">#{wish.pityCount}</div>
                    </div>
                  </div>
                </div>
                <div className="wish-item-date">{wish.timestamp}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishTracker;