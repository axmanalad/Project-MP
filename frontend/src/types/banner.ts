export type BannerFilterType = 'ALL' | 'CHARACTER' | 'WEAPON' | 'STANDARD';

export type BannerTypeMapping = Record<string, BannerFilterType>;

export type BannerNames = Record<BannerFilterType, string>;