import type React from "react";
import type { WishItem, WishTrackerProps, WishView } from "../../../../types";
import { useState } from "react";
import "../../../../styles/components/games/shared/WishTracker/index.css";
import PityCard from "./PityCard";
import { pityStats } from "../../../../data/wishStats";
import RecentWishHistory from "./RecentWishHistory";
import FullWishHistory from "./FullWishHistory";
import WishHeader from "./WishHeader";
import { useBannerFilter } from "../../../../hooks/useBannerFilter";
import WishStatistics from "./WishStatistics";
import { sampleWishData } from "../../../../data/sampleWishData";

const WishTracker: React.FC<WishTrackerProps> = ({ gameId }) => {
  const [wishes] = useState<WishItem[]>([]);
  const [showSampleData, setShowSampleData] = useState(false);
  const [currentView, setCurrentView] = useState<WishView>('recent');

  const currentPityStats = pityStats[gameId];
  // TODO: Use gameId to fetch user's wish data for this specific game
  const sampleWishes: WishItem[] = sampleWishData;
  const displayWishes = showSampleData ? sampleWishes : wishes;

  const {
    selectedBanner,
    filteredWishes,
    handlePityCardClick,
    clearBannerFilter,
    isFiltered
  } = useBannerFilter(displayWishes);

  const handlePityCardClickWrapper = (banner: string) => {
    console.log(`[DEBUG] Pity card clicked for banner: ${banner}`);
    handlePityCardClick(banner);
  };

  const renderWishHistory = () => {
    if (currentView === 'recent') {
      return (
        <RecentWishHistory
          wishes={isFiltered ? filteredWishes : displayWishes}
          onViewAll={() => {setCurrentView('full')}}
          selectedBanner={selectedBanner}
          onClearFilter={clearBannerFilter}
          isFiltered={isFiltered}
        />
      );
    } else {
      return (
        <FullWishHistory
          wishes={isFiltered ? filteredWishes : displayWishes}
          onBackToRecent={() => {setCurrentView('recent')}}
          selectedBanner={selectedBanner}
          onClearFilter={clearBannerFilter}
          isFiltered={isFiltered}
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
        gameId={gameId}
      />
      <div className="pity-counters">
        {currentPityStats.map((stat) => {
          const bannerType = stat.bannerType.toLowerCase();
          const isSelected = selectedBanner === bannerType;

          return (
            <PityCard
              key={`stat.${stat.bannerType}-${String(gameId)}`}
              {...stat}
              onClick={() => { if (!isSelected) handlePityCardClickWrapper(bannerType); }}
              isSelected={isSelected}
            />
          );
        })}
      </div>
      
      <WishStatistics
        gameId={gameId}
        wishes={isFiltered ? filteredWishes : displayWishes}
        selectedBanner={selectedBanner}
        isFiltered={isFiltered}
      />

      {renderWishHistory()}
    </div>
  );
};

export default WishTracker;