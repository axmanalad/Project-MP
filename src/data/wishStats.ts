import type { PityStatsRecord, WishCostRecord, WishItem, WishStatsRecord } from "../types";

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
}

export const sampleWishData: WishItem[] = [
  {
    id: 11,
    gachaType: "character",
    itemName: "Kazuha",
    itemType: "Character",
    rarity: 5,
    pityCount: 65,
    timestamp: "2025-07-05 14:30:00",
    isWLGuarantee: "Win"
  },
  {
    id: 10,
    gachaType: "weapon",
    itemName: "Skyward Blade",
    itemType: "Weapon",
    rarity: 5,
    pityCount: 72,
    timestamp: "2025-07-05 16:45:22",
    isWLGuarantee: "Loss"
  },
  { 
    id: 9,
    gachaType: "character",
    itemName: "Raiden Shogun",
    itemType: "Character",
    rarity: 5,
    pityCount: 27,
    timestamp: "2025-07-04 19:50:43", 
    isWLGuarantee: "Win"
  },
  {
    id: 8,
    gachaType: "weapon",
    itemName: "Engulfing Lightning",
    itemType: "Weapon",
    rarity: 5,
    pityCount: 30,
    timestamp: "2025-06-27 12:23:57",
    isWLGuarantee: "Win"
  },
  {
    id: 7,
    gachaType: "character",
    itemName: "Xiangling",
    itemType: "Character",
    rarity: 4,
    pityCount: 9,
    timestamp: "2025-06-27 12:23:57",
    isWLGuarantee: "None"
  },
  {
    id: 6,
    gachaType: "standard",
    itemName: "Bennett",
    itemType: "Character",
    rarity: 4,
    pityCount: 8,
    timestamp: "2025-06-20 12:22:30",
    isWLGuarantee: "None"
  },
  {
    id: 5,
    gachaType: "weapon",
    itemName: "Favonius Sword",
    itemType: "Weapon",
    rarity: 4,
    pityCount: 2,
    timestamp: "2025-06-13 08:34:24",
    isWLGuarantee: "None"
  },
  {
    id: 4,
    gachaType: "standard",
    itemName: "Thrilling Tales",
    itemType: "Weapon",
    rarity: 3,
    pityCount: 3,
    timestamp: "2025-06-06 15:12:19",
    isWLGuarantee: "None"
  },
  {
    id: 3,
    gachaType: "character",
    itemName: "Zhongli",
    itemType: "Character",
    rarity: 5,
    pityCount: 89,
    timestamp: "2025-05-04 18:29:12",
    isWLGuarantee: "Guaranteed"
  },
  {
    id: 2,
    gachaType: "character",
    itemName: "Diluc",
    itemType: "Character",
    rarity: 5,
    pityCount: 57,
    timestamp: "2025-05-04 18:29:12",
    isWLGuarantee: "Loss"
  },
  {
    id: 1,
    gachaType: "standard",
    itemName: "Barbara",
    itemType: "Character",
    rarity: 4,
    pityCount: 4,
    timestamp: "2025-05-04 18:28:15",
    isWLGuarantee: "None"
  }
];