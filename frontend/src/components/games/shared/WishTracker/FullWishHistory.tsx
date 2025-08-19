import type React from "react";
import { type WishFilterTypes, type FullWishHistoryProps } from "../../../../types";
import { useMemo, useState } from "react";
import WishFilters from "./WishFilters";
import EmptyWishState from "./EmptyWishState";
import WishItem from "./WishItem";
import Pagination from "../Pagination";

const FullWishHistory: React.FC<FullWishHistoryProps> = ({ wishes, gameName, onBackToRecent, selectedBanner, onClearFilter, isFiltered = false }) => {
  const [filters, setFilters] = useState<WishFilterTypes>({
    rarity: 'all',
    itemType: 'all',
    sortBy: 'newest'
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredWishes = useMemo(() => {
    let filtered = [...wishes];

    if (filters.rarity !== 'all') {
      filtered = filtered.filter(wish => Number(wish.rarity) === Number(filters.rarity));
    }
    if (filters.itemType !== 'all') {
      filtered = filtered.filter(wish => wish.itemType.toLowerCase() === filters.itemType);
    }

    filtered.sort((a, b) => {
      const aDate = new Date(a.time).getTime();
      const bDate = new Date(b.time).getTime();
      switch (filters.sortBy) {
        case 'newest':
          if (aDate !== bDate) {
            return bDate - aDate;
          }
          // If times are equal, sort by wish number descending.
          return b.wishNumber - a.wishNumber;
        case 'oldest':
          if (aDate !== bDate) {
            return aDate - bDate;
          }
          // If times are equal, sort by wish number ascending.
          return a.wishNumber - b.wishNumber;
        case 'rarity':
          return Number(b.rarity) - Number(a.rarity);
        default:
          return 0;
      }
    });

    return filtered;
  }, [wishes, filters]);

  const paginatedWishes = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredWishes.slice(startIndex, endIndex);
  }, [filteredWishes, currentPage, itemsPerPage]);

  const rarityStats = useMemo(() => {
    const stats = { 3: 0, 4: 0, 5: 0, total: wishes.length};
    wishes.forEach(wish => {
      stats[wish.rarity as '3' | '4' | '5']++;
    });
    return stats;
  }, [wishes]);

  const normalizedBannerName = selectedBanner ? selectedBanner.charAt(0) + selectedBanner.slice(1).toLowerCase() + " Banner" : "";

  return (
    <div className="full-wish-history">
      <div className="full-history-header">
        <div className="history-navigation">
          <button
            type="button"
            className="wish-history-btn"
            onClick={onBackToRecent}
          >
            ← Back to Recent
          </button>
          <h3>
            {
              isFiltered && selectedBanner ? `Full ${normalizedBannerName} Wish History` : "Full Wish History"
            }
          </h3>
        </div>

        <div className="history-stats">
          <div className="stat-chip">Total: {rarityStats.total}</div>
          <div className="stat-chip rarity-5">5★: {rarityStats[5]}</div>
          <div className="stat-chip rarity-4">4★: {rarityStats[4]}</div>
          <div className="stat-chip rarity-3">3★: {rarityStats[3]}</div>

          {isFiltered && onClearFilter && (
            <button
              type="button"
              className="stat-chip clear"
              onClick={onClearFilter}
            >
              Clear Filters
            </button>
          )}
        </div>
      </div>

      <WishFilters
        filters={filters}
        onFilterChange={setFilters}
        resultCount={filteredWishes.length}
      />

      {filteredWishes.length === 0 ? (
        <EmptyWishState message={isFiltered ?
          `No ${normalizedBannerName} wishes match your filters` :
          "No wishes match your filters."} showIcon={false} 
        />
      ) : (
        <>
          <div className="wish-history full">
            {paginatedWishes.map((wish) => (
              <WishItem key={wish.gameWishId} wish={wish} compact={false} gameName={gameName} />
            ))}
          </div>

          <Pagination
            totalItems={filteredWishes.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onItemsPerPageChange={setItemsPerPage}
            itemName="wishes"
          />
        </>
      )}
    </div>
  );
};

export default FullWishHistory;