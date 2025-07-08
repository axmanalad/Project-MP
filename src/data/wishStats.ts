import type { PityStatsRecord, WishCostRecord, WishStatsRecord } from "../types";

export const pityStats: PityStatsRecord = {
  101: [
    {
      bannerType: 'Character',
      current: 45,
      max: 90,
      guaranteed: true
    },
    {
      bannerType: 'Weapon',
      current: 68,
      max: 80,
      guaranteed: false
    },
    {
      bannerType: 'Standard',
      current: 23,
      max: 90,
      guaranteed: false
    }
  ],
  102: [
    {
      bannerType: 'Character',
      current: 0,
      max: 90,
      guaranteed: false
    },
    {
      bannerType: 'Weapon',
      current: 0,
      max: 80,
      guaranteed: false
    },
    {
      bannerType: 'Standard',
      current: 0,
      max: 90,
      guaranteed: false
    }
  ],
  103: [
    {
      bannerType: 'Character',
      current: 0,
      max: 90,
      guaranteed: false
    },
    {
      bannerType: 'Weapon',
      current: 0,
      max: 80,
      guaranteed: false
    },
    {
      bannerType: 'Standard',
      current: 0,
      max: 90,
      guaranteed: false
    }
  ]
};

export const wishStats: WishStatsRecord = {
  // Game ID 101
  101: [
    {
      label: 'Total Wishes',
      value: 0, // Placeholder for total wishes
      type: 'regular'
    },
    {
      label: 'Avg 5★ Pity',
      value: 0, // Placeholder for average 5-star pity
      type: 'average'
    },
    {
      label: 'Avg 4★ Pity',
      value: 0, // Placeholder for average 4-star pity
      type: 'average'
    },
    {
      label: '5★ Win Rate',
      value: '0%', // Placeholder for 5-star win rate
      subtext: 'Wins/Losses',
      type: 'ratio'
    },
    {
      label: 'Current 5★ Win Streak',
      value: 0, // Placeholder for current 5-star streak
      type: 'streak'
    },
    {
      label: 'Current 5★ Loss Streak',
      value: 0, // Placeholder for current 5-star loss streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Win Streak',
      value: 0, // Placeholder for longest 5-star win streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Loss Streak',
      value: 0, // Placeholder for longest 5-star loss streak
      type: 'streak'
    }
  ],
  // Game ID 102
  102: [
    {
      label: 'Total Warps',
      value: 0, // Placeholder for total warps
      type: 'regular'
    },
    {
      label: 'Avg 5★ Pity',
      value: 0, // Placeholder for average 5-star pity
      type: 'average'
    },
    {
      label: 'Avg 4★ Pity',
      value: 0, // Placeholder for average 4-star pity
      type: 'average'
    },
    {
      label: '5★ Win Rate',
      value: '0%', // Placeholder for 5-star win rate
      subtext: 'Wins/Losses',
      type: 'ratio'
    },
    {
      label: 'Current 5★ Win Streak',
      value: 0, // Placeholder for current 5-star streak
      type: 'streak'
    },
    {
      label: 'Current 5★ Loss Streak',
      value: 0, // Placeholder for current 5-star loss streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Win Streak',
      value: 0, // Placeholder for longest 5-star win streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Loss Streak',
      value: 0, // Placeholder for longest 5-star loss streak
      type: 'streak'
    }
  ],
  // Game ID 103
  103: [
    {
      label: 'Total Wishes',
      value: 0, // Placeholder for total wishes
      type: 'regular'
    },
    {
      label: 'Avg 5★ Pity',
      value: 0, // Placeholder for average 5-star pity
      type: 'average'
    },
    {
      label: 'Avg 4★ Pity',
      value: 0, // Placeholder for average 4-star pity
      type: 'average'
    },
    {
      label: '5★ Win Rate',
      value: '0%', // Placeholder for 5-star win rate
      subtext: 'Wins/Losses',
      type: 'ratio'
    },
    {
      label: 'Current 5★ Win Streak',
      value: 0, // Placeholder for current 5-star streak
      type: 'streak'
    },
    {
      label: 'Current 5★ Loss Streak',
      value: 0, // Placeholder for current 5-star loss streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Win Streak',
      value: 0, // Placeholder for longest 5-star win streak
      type: 'streak'
    },
    {
      label: 'Longest 5★ Loss Streak',
      value: 0, // Placeholder for longest 5-star loss streak
      type: 'streak'
    }
  ]
};

export const wishCostData: WishCostRecord = {
  101: {
    single: 160,
    ten: 1600,
    currency: 'Primogems'
  },
  102: {
    single: 160,
    ten: 1600,
    currency: 'Stellar Jades'
  },
  103: {
    single: 160,
    ten: 1600,
    currency: 'Astrites'
  }
};