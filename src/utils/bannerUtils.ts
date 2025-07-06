import type { BannerFilterType, BannerNames, BannerTypeMapping } from "../types/banner";

export const bannerTypeMap: BannerTypeMapping = {
  'character': 'character',
  'weapon': 'weapon',
  'standard': 'standard'
};

export const bannerDisplayNames: BannerNames = {
  'character': 'Character',
  'weapon': 'Weapon',
  'standard': 'Standard',
  'all': 'All'
};

export const getBannerFilter = (banner: string): BannerFilterType => {
  return bannerTypeMap[banner];
};

export const getBannerDisplayName = (banner: BannerFilterType): string => {
  return bannerDisplayNames[banner];
};

export const getFilteredWishesByBanner = <T extends { gachaType: string }> (
  wishes: T[],
  bannerFilter: BannerFilterType
): T[] => {
  return bannerFilter === 'all'
    ? wishes
    : wishes.filter(wish => wish.gachaType === bannerFilter);
};