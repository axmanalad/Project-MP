import type React from "react";
import type { WishStatsProps } from "../../../../types";
import { useState, useEffect } from "react";
import { wishCostData, wishStats } from "../../../../data/wishStats";
import WishStatCard from "./WishStatCard";
import "../../../../styles/components/games/shared/WishTracker/wish-statistics.css";
import { getCombinedUserWishStats, getUserBannerStats } from "../../../../api/wishService";

const WishStatistics: React.FC<WishStatsProps> = ({
  gameId,
  gameName,
  bannerId,
  wishes,
  selectedBanner,
  isFiltered = false,
  isLoading: externalLoading = false
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistics, setStatistics] = useState<any>(null);

  useEffect(() => {
    
    // If external loading is true, wait for it to complete
    if (externalLoading) {
      setIsLoading(true);
      return;
    }
    
    const fetchStats = async () => {
      if (wishes.length === 0) {
        setStatistics(null);
        setIsLoading(false);
        return;
      }

      // If isFiltered is true but bannerId is empty, we're still loading the banner ID
      if (isFiltered && !bannerId) {
        setIsLoading(true);
        return;
      }

      try {
        setIsLoading(true);
        let response: any;
        // TODO: Update API to accept all wish stats in one call instead of making redundant calls per banner
        if (isFiltered && bannerId) {
          response = await getUserBannerStats(gameName, gameId, bannerId);
        } else { 
          response = await getCombinedUserWishStats(gameName, gameId);
        }
        
        const calculatedStats = response.data;
        const currentStatsData = wishStats[gameName].map(stat => ({ ...stat })); // clone to avoid mutation
        const wishCost = wishCostData[gameName];

        for (const stat of currentStatsData) {
          if (stat.type === 'regular') {
            if (stat.label === 'Total Wishes') {
              stat.value = calculatedStats.totalWishes;
              stat.subtext = `${(wishCost.single * calculatedStats.totalWishes).toString()} ${wishCost.currency}`;
            }
          } else if (stat.type === 'average') {
            if (stat.label === 'Avg 5★ Pity') {
              stat.value = calculatedStats.avgFiveStarPity;
            } else if (stat.label === 'Avg 4★ Pity') {
              stat.value = calculatedStats.avgFourStarPity;
            }
          } else if (stat.type === 'ratio') {
            const [wins, losses, winRate] = calculatedStats.fiveStarWLRatio;
            if (stat.label === '5★ Win Rate') {
              stat.value = `${winRate.toString()}%`;
              stat.subtext = `${wins.toString()} Wins / ${losses.toString()} Losses`;
            }
          } else {
            if (stat.label === 'Current 5★ Win Streak') {
              stat.value = calculatedStats.currentWinStreak;
            } else if (stat.label === 'Current 5★ Loss Streak') {
              stat.value = calculatedStats.currentLossStreak;
            } else if (stat.label === 'Longest 5★ Win Streak') {
              stat.value = calculatedStats.longestWinStreak;
            } else if (stat.label === 'Longest 5★ Loss Streak') {
              stat.value = calculatedStats.longestLossStreak;
            }
          }
        }
        setStatistics(currentStatsData);
      } catch (error) {
        console.error('Error fetching wish statistics:', error);
        setStatistics(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();
  }, [gameId, bannerId, wishes, selectedBanner, isFiltered, externalLoading]);

  if (!isLoading) {
    if (!statistics) {
      return (
        <div className="wish-statistics">
          <div className="wish-statistics-header">
            <h2>Wish Statistics</h2>
            <p className="text-base text-gray-500 dark:text-gray-400">
              No wish data available. Please add wishes to see statistics.
            </p>
          </div>
        </div>
      );
    }

    return (
      <div className="wish-statistics">
        <div className="wish-statistics-header">
          <h2>
            {isFiltered && selectedBanner ?
              `${selectedBanner.charAt(0) + selectedBanner.slice(1).toLowerCase()} Banner Statistics` :
              'Wish Statistics'
            }
          </h2>
          <p className="text-base text-gray-500 dark:text-gray-400">
            {isFiltered ? 'Statistics for the selected banner.' : 'Overall wish statistics.'}
          </p>
        </div>

        <div className="wish-statistics-grid">
          {statistics.map((stat: any, index: number) => (
            <WishStatCard
              key={`${stat.label}-${index.toString()}`}
              label={stat.label}
              value={stat.value}
              subtext={stat.subtext}
              type={stat.type}
            />
          ))}
        </div>
      </div>
    );
  }
};

export default WishStatistics;