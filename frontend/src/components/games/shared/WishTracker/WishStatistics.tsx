import type React from "react";
import type { WishStatsProps } from "../../../../types";
import { useMemo } from "react";
import { calculateWishStats } from "../../../../utils/wishStatCalculation";
import { wishCostData, wishStats } from "../../../../data/wishStats";
import WishStatCard from "./WishStatCard";
import "../../../../styles/components/games/shared/WishTracker/wish-statistics.css";

const WishStatistics: React.FC<WishStatsProps> = ({ gameId, wishes, selectedBanner, isFiltered = false }) => {
  const statistics = useMemo(() => {
    if (wishes.length === 0) {
      return null;
    }

    const fiveStarWishes = wishes.filter(wish => wish.rarity === 5);
    const fourStarWishes = wishes.filter(wish => wish.rarity === 4);

    const calculatedStats = calculateWishStats(wishes, fiveStarWishes, fourStarWishes);

    const currentStatsData = wishStats[gameId];
    const wishCost = wishCostData[gameId];
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
    return currentStatsData;
  }, [gameId, wishes]);


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
            `${selectedBanner.charAt(0).toUpperCase() + selectedBanner.slice(1)} Banner Statistics` :
            'Wish Statistics'
          }
        </h2>
        <p className="text-base text-gray-500 dark:text-gray-400">
          {isFiltered ? 'Statistics for the selected banner.' : 'Overall wish statistics.'}
        </p>
      </div>

      <div className="wish-statistics-grid">
        {statistics.map((stat, index) => (
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
  )
};

export default WishStatistics;