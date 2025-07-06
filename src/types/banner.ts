export type BannerFilterType = 'all' | 'character' | 'weapon' | 'standard';

export type BannerTypeMapping = Record<string, BannerFilterType>;

export type BannerNames = Record<BannerFilterType, string>;