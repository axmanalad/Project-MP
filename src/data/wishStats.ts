import type { PityStatsRecord, WishItem } from "../types";

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

export const sampleWishData: WishItem[] = [
  { 
    id: 8,
    gachaType: "character",
    itemName: "Raiden Shogun",
    itemType: "Character",
    rarity: 5,
    pityCount: 27,
    timestamp: "2025-07-04 19:50:43" 
  },
  {
    id: 7,
    gachaType: "weapon",
    itemName: "Engulfing Lightning",
    itemType: "Weapon",
    rarity: 5,
    pityCount: 30,
    timestamp: "2025-06-27 12:23:57"
  },
  {
    id: 6,
    gachaType: "character",
    itemName: "Xiangling",
    itemType: "Character",
    rarity: 4,
    pityCount: 15,
    timestamp: "2025-06-27 12:23:57"
  },
  {
    id: 5,
    gachaType: "standard",
    itemName: "Bennett",
    itemType: "Character",
    rarity: 4,
    pityCount: 8,
    timestamp: "2025-06-20 12:22:30"
  },
  {
    id: 4,
    gachaType: "weapon",
    itemName: "Favonius Sword",
    itemType: "Weapon",
    rarity: 4,
    pityCount: 12,
    timestamp: "2025-06-13 08:34:24"
  },
  {
    id: 3,
    gachaType: "standard",
    itemName: "Thrilling Tales",
    itemType: "Weapon",
    rarity: 3,
    pityCount: 3,
    timestamp: "2025-06-06 15:12:19"
  },
  {
    id: 2,
    gachaType: "character",
    itemName: "Zhongli",
    itemType: "Character",
    rarity: 5,
    pityCount: 89,
    timestamp: "2025-05-04 18:29:12"
  },
  {
    id: 1,
    gachaType: "standard",
    itemName: "Barbara",
    itemType: "Character",
    rarity: 4,
    pityCount: 4,
    timestamp: "2025-05-04 18:29:12"
  }
];