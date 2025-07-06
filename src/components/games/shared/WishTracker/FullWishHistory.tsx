import type React from "react";
import { type WishFilterTypes, type FullWishHistoryProps } from "../../../../types";
import { useMemo, useState } from "react";
import WishFilters from "./WishFilters";
import EmptyWishState from "./EmptyWishState";
import WishItem from "./WishItem";

const FullWishHistory: React.FC<FullWishHistoryProps> = ({ wishes, onBackToRecent }) => {
  const [filters, setFilters] = useState<WishFilterTypes>({
    rarity: 'all',
    itemType: 'all',
    sortBy: 'newest'
  });

  const filteredWishes = useMemo(() => {
    let filtered = [...wishes];

    if (filters.rarity !== 'all') {
      filtered = filtered.filter(wish => wish.rarity === Number(filters.rarity));
    }
    if (filters.itemType !== 'all') {
      filtered = filtered.filter(wish => wish.itemType.toLowerCase() === filters.itemType);
    }

    filtered.sort((a, b) => {
      // If sorted by date, use dates
      // const aDate = new Date(a.timestamp).getTime();
      // const bDate = new Date(b.timestamp).getTime();
      switch (filters.sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'rarity':
          return b.rarity - a.rarity;
        default:
          return 0;
      }
    });

    return filtered;
  }, [wishes, filters]);

  const rarityStats = useMemo(() => {
    const stats = { 3: 0, 4: 0, 5: 0, total: wishes.length};
    wishes.forEach(wish => {
      stats[wish.rarity as 3 | 4 | 5]++;
    });
    return stats;
  }, [wishes]);

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
          <h3>Full Wish History</h3>
        </div>

        <div className="history-stats">
          <div className="stat-chip">Total: {rarityStats.total}</div>
          <div className="stat-chip rarity-5">5★: {rarityStats[5]}</div>
          <div className="stat-chip rarity-4">4★: {rarityStats[4]}</div>
          <div className="stat-chip rarity-3">3★: {rarityStats[3]}</div>
        </div>
      </div>

      <WishFilters
        filters={filters}
        onFilterChange={setFilters}
        resultCount={filteredWishes.length}
      />

      {filteredWishes.length === 0 ? (
        <EmptyWishState message="No wishes match your filters." showIcon={false} />
      ) : (
        <div className="wish-history full">
          {filteredWishes.map((wish) => (
            <WishItem key={wish.id} wish={wish} compact={false} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FullWishHistory;