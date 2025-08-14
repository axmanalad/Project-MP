import type { WishItem, WishStatLabels } from "../types";


/**
 * Calculates all wish statistics based on the provided wishes.
 * @param wishes The list of all wishes
 * @param fiveStarWishes The list of 5-star wishes
 * @param fourStarWishes The list of 4-star wishes
 * @returns The calculated wish statistics
 */
export function calculateWishStats(wishes: WishItem[], fiveStarWishes: WishItem[], fourStarWishes: WishItem[]): WishStatLabels {
  const totalWishes = wishes.length;

  return {
    totalWishes,
    fiveStarWLRatio: getWLRatio(fiveStarWishes),
    avgFiveStarPity: avgPity(fiveStarWishes),
    avgFourStarPity: avgPity(fourStarWishes),
    currentWinStreak: getCurrentStreak(fiveStarWishes, 'Win'),
    currentLossStreak: getCurrentStreak(fiveStarWishes, 'Loss'),
    longestWinStreak: getLongestStreak(fiveStarWishes, 'Win'),
    longestLossStreak: getLongestStreak(fiveStarWishes, 'Loss')
  };
}

/**
 * Calculates the average pity count from a list of wishes.
 * @param wishes The list of wishes to calculate the average pity from
 * @returns The average pity count
 */
function avgPity(wishes: WishItem[]): number {
  if (wishes.length === 0) {
    return 0;
  }
  return Math.round(wishes.reduce((sum, wish) => sum + wish.pityCount, 0) / wishes.length);
}

/**
 * Calculates the average pity for 5-star wishes.
 * @param wishes The list of 5-star wishes
 * @returns The average pity for 5-star wishes (wins, losses, and win rate)
 */
function getWLRatio(wishes: WishItem[]): [wins: number, losses: number, winRate: number] {
  if (wishes.length === 0) {
    return [0, 0, 0];
  }

  const wins = wishes.filter(wish => wish.isWLGuarantee === 'Win' || wish.isWLGuarantee === 'Guaranteed').length;
  const losses = wishes.filter(wish => wish.isWLGuarantee === 'Loss').length;
  const winRate = Math.round((wins / wishes.length) * 100);
  return [wins, losses, winRate];
}

/**
 * Calculates the current streak of 5-star wishes based on the type.
 * @param fiveStarWishes The list of 5-star wishes
 * @param type The type of streak to calculate ('Win' or 'Loss')
 * @returns The current streak count
 */
function getCurrentStreak(fiveStarWishes: WishItem[], type: 'Win' | 'Loss'): number {
  if (fiveStarWishes.length === 0) {
    return 0;
  }
  const latestWish = fiveStarWishes[0];
  const isType = latestWish.isWLGuarantee === type;
  let count = 0;

  if (isType) {
    for (const wish of fiveStarWishes) {
      const wishIsType = wish.isWLGuarantee === type;
      if (wishIsType) {
        count++;
      } else if (wish.isWLGuarantee === 'Guaranteed') {
        continue; // Skip guaranteed wishes
      }
      else {
        break; // Stop counting when wish is a different type
      }
    }
  }

  return count;
}

/**
 * Calculates the longest streak of 5-star wishes based on the type.
 * @param fiveStarWishes The list of 5-star wishes
 * @param type The type of streak to calculate ('Win' or 'Loss')
 * @returns The longest streak count for the specified type
 */
function getLongestStreak(fiveStarWishes: WishItem[], type: 'Win' | 'Loss'): number {
  let longestTypeStreak = 0;
  let currentTypeStreak = 0;

  if (fiveStarWishes.length === 0) {
    return longestTypeStreak;
  }

  // Start counting from the first wish
  const sortedWishes = fiveStarWishes.slice().sort((a, b) => a.timestamp.localeCompare(b.timestamp));

  for (const wish of sortedWishes) {
    const isType = wish.isWLGuarantee === type;
    if (isType) {
      currentTypeStreak++;
    } else if (wish.isWLGuarantee === 'Guaranteed') {
      continue; // Skip guaranteed wishes
    } else {
      if (currentTypeStreak >= longestTypeStreak) {
        longestTypeStreak = currentTypeStreak;
      }
      currentTypeStreak = 0; // Reset streak count
    }
  }

  // Check if current calculated streak is the longest
  currentTypeStreak = getCurrentStreak(fiveStarWishes, type);
  if (currentTypeStreak >= longestTypeStreak) {
    longestTypeStreak = currentTypeStreak;
  }
  return longestTypeStreak;
}