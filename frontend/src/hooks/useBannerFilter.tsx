import { useEffect, useMemo, useState } from "react";
import type { WishItem } from "../../../shared/types";
import type { BannerFilterType } from "../types";
import { getBannerFilter, getFilteredWishesByBanner } from "../utils/bannerUtils";

export const useBannerFilter = (wishes: WishItem[]) => {
  const [selectedBanner, setSelectedBanner] = useState<BannerFilterType>('ALL');
  const [bannerId, setBannerId] = useState<string>('');
  const [pendingBannerFilter, setPendingBannerFilter] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (pendingBannerFilter && bannerId) {
      setSelectedBanner(getBannerFilter(pendingBannerFilter));
      setPendingBannerFilter(null);
      setIsLoading(false);
    }
  }, [pendingBannerFilter, bannerId]);

  const filteredWishes = useMemo(() => {
    if (selectedBanner === 'ALL') {
      return wishes;
    }
    
    // Only filter if we have a bannerId
    if (bannerId) {
      return getFilteredWishesByBanner(wishes, selectedBanner, bannerId);
    }
    
    // Return all wishes while waiting for bannerId
    return wishes;
  }, [wishes, selectedBanner, bannerId]);

  // Sets the selected banner dependent on pending
  const handlePityCardClick = (banner: string) => {
    if (banner === 'ALL') {
      setSelectedBanner('ALL');
      setBannerId('');
      setPendingBannerFilter(null);
    } else {
      setIsLoading(true);
      setBannerId('');
      setPendingBannerFilter(banner);
    }
  };

  const clearBannerFilter = () => {
    setSelectedBanner('ALL');
    setBannerId('');
    setPendingBannerFilter(null);
  };

  const isFiltered = selectedBanner !== 'ALL';

  return {
    selectedBanner,
    filteredWishes,
    handlePityCardClick,
    clearBannerFilter,
    isFiltered,
    bannerId,
    setBannerId,
    isLoading,
    hasPendingFilter: !!pendingBannerFilter
  };
};