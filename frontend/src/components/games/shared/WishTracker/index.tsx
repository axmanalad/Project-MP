import type React from "react";
import type { WishItem } from "../../../../../../shared/types";
import type { WishTrackerProps, WishView } from "../../../../types";
import { useEffect, useState } from "react";
import "../../../../styles/components/games/shared/WishTracker/index.css";
import PityCard from "./PityCard";
import { pityStats } from "../../../../data/wishStats";
import RecentWishHistory from "./RecentWishHistory";
import FullWishHistory from "./FullWishHistory";
import WishHeader from "./WishHeader";
import { useBannerFilter } from "../../../../hooks/useBannerFilter";
import WishStatistics from "./WishStatistics";
import { getUserPityStats, getUserWishes } from "../../../../api/wishService";
import { getBannerId, getGameIdByUGID } from "../../../../api/authService";

const WishTracker: React.FC<WishTrackerProps> = ({ gameName, userGameId }) => {
  const [wishes, setWishes] = useState<WishItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [apiPityStats, setPityStats] = useState(pityStats[gameName]);

  useEffect(() => {
    const fetchWishes = async () => {
      try {
        setLoading(true);
        const response = await getUserWishes(gameName, userGameId);
        setWishes(response.data);
      } catch (err) {
        console.error("Failed to fetch wishes:", err);
      } finally {
        setLoading(false);
      }
    };

    const fetchPityStats = async () => {
      try {
        setLoading(true);
        const response = await getUserPityStats(gameName, userGameId);
        setPityStats(response.data);
      } catch (err) {
        console.error("Failed to fetch pity stats:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchWishes();
    fetchPityStats();
  }, [userGameId]);

  const [currentView, setCurrentView] = useState<WishView>('recent');

  const {
    selectedBanner,
    filteredWishes,
    handlePityCardClick,
    clearBannerFilter,
    isFiltered,
    bannerId,
    setBannerId,
    isLoading: filterLoading,
    hasPendingFilter
  } = useBannerFilter(wishes);

  const handleBannerId = async (userGameId: string, selectedBanner: string) => {
    try {
      const gameId = await getGameIdByUGID(userGameId);
      const id = await getBannerId(gameId, selectedBanner);
      setBannerId(id);
      return id;
    } catch (err) {
      console.error('Unable to fetch banner ID:', err);
      return null;
    }
  };

  const handlePityCardClickWrapper = (banner: string) => {
    handlePityCardClick(banner);
    
    // If it's not ALL, fetch the banner ID
    if (banner !== 'ALL') {
      handleBannerId(userGameId, banner);
    }
  };

  const renderWishHistory = () => {
    if (currentView === 'recent') {
      return (
        <RecentWishHistory
          wishes={isFiltered ? filteredWishes : wishes}
          gameName={gameName}
          onViewAll={() => {setCurrentView('full')}}
          selectedBanner={selectedBanner}
          onClearFilter={clearBannerFilter}
          isFiltered={isFiltered}
        />
      );
    } else {
      return (
        <FullWishHistory
          wishes={isFiltered ? filteredWishes : wishes}
          gameName={gameName}
          onBackToRecent={() => {setCurrentView('recent')}}
          selectedBanner={selectedBanner}
          onClearFilter={clearBannerFilter}
          isFiltered={isFiltered}
        />
      );
    }
  };

  if (loading) {
    return <div>Loading wishes...</div>;
  }
  return (
    <div className="wish-tracker">
      <WishHeader
        currentView={currentView}
        onViewChange={setCurrentView}
        totalWishes={isFiltered ? filteredWishes.length : wishes.length}
        userGameId={userGameId}
        gameName={gameName}
      />
      <div className="pity-counters">
        {apiPityStats.map((stat) => {
          const bannerType = stat.gachaType;
          const isSelected = selectedBanner === bannerType;
          const normalizeBannerType = stat.gachaType.substring(0, 1) + stat.gachaType.substring(1).toLowerCase();
          return (
            <PityCard
              userGameId={userGameId}
              key={`stat.${stat.gachaType.toLowerCase()}-${String(userGameId)}`}
              {...stat}
              gachaType={normalizeBannerType}
              onClick={() => { if (!isSelected) handlePityCardClickWrapper(bannerType); }}
              isSelected={isSelected}
              isLoading={isSelected && filterLoading}
            />
          );
        })}
      </div>
      
      <WishStatistics
        gameName={gameName}
        gameId={userGameId}
        bannerId={isFiltered ? bannerId : ''}
        wishes={isFiltered ? filteredWishes : wishes}
        selectedBanner={selectedBanner}
        isFiltered={isFiltered}
        isLoading={filterLoading || hasPendingFilter}
      />

      {renderWishHistory()}
    </div>
  );
};

export default WishTracker;