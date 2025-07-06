import { useMemo, useState } from "react";
import type { BannerFilterType, WishItem } from "../types";
import { getBannerFilter, getFilteredWishesByBanner } from "../utils/bannerUtils";

export const useBannerFilter = (wishes: WishItem[]) => {
  const [selectedBanner, setSelectedBanner] = useState<BannerFilterType>('all');

  const filteredWishes = useMemo(() => {
    console.log(`[DEBUG] Filtering wishes for banner: ${selectedBanner} given ${wishes.length.toString()} total wishes`);
    return getFilteredWishesByBanner(wishes, selectedBanner);
  }, [wishes, selectedBanner]);

  const handlePityCardClick = (banner: string) => {
    console.log(`[DEBUG] Applying filter for: ${banner}`);
    const newFilter = getBannerFilter(banner);
    setSelectedBanner(newFilter);
  };

  const clearBannerFilter = () => {
    setSelectedBanner('all');
  };

  const isFiltered = selectedBanner !== 'all';

  return {
    selectedBanner,
    filteredWishes,
    handlePityCardClick,
    clearBannerFilter,
    isFiltered,
    setSelectedBanner
  };
};