import { wishBannerTypes } from "../data/wishStats";
import type { BannerFilterType, BannerNames, BannerTypeMapping } from "../types/banner";

export const bannerTypeMap: BannerTypeMapping = {
  CHARACTER: 'CHARACTER',
  WEAPON: 'WEAPON',
  STANDARD: 'STANDARD'
};

export const bannerDisplayNames: BannerNames = {
  'CHARACTER': 'Character',
  'WEAPON': 'Weapon',
  'STANDARD': 'Standard',
  'ALL': 'All'
};

export const getBannerFilter = (banner: string): BannerFilterType => {
  return bannerTypeMap[banner];
};

export const getBannerDisplayName = (gachaType: string, gameName?: string): string => {
  if (!gameName) {
    return gachaType;
  }
  const gameBanners = wishBannerTypes[gameName];
  const bannerName = gameBanners[gachaType];

  return bannerName || gachaType;
};

export const getFilteredWishesByBanner = <T extends { gachaType: string; bannerId: string }> (
  wishes: T[],
  bannerFilter: BannerFilterType,
  bannerId: string,
): T[] => {
  return bannerFilter === 'ALL'
    ? wishes
    : wishes.filter(wish => wish.bannerId === bannerId);
};