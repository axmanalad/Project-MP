import type React from "react";
import type { RecentWishHistoryProps } from "../../../../types";
import WishItem from "./WishItem";
import EmptyWishState from "./EmptyWishState";

const RecentWishHistory: React.FC<RecentWishHistoryProps> = ({ wishes, gameName, onViewAll, selectedBanner, onClearFilter, isFiltered = false }) => {
  const normalizedBannerName = selectedBanner ? selectedBanner.charAt(0) + selectedBanner.slice(1).toLowerCase() + " Banner" : "";

  const sortedWishes = [...wishes].sort((a, b) => {
    const timeA = new Date(a.time).getTime();
    const timeB = new Date(b.time).getTime();

    if (timeA !== timeB) {
      return timeB - timeA;
    }

    // If times are equal, sort by wish number descending.
    return b.wishNumber - a.wishNumber;
  })
  
  return (
      <div className="recent-wishes">
        <div className="recent-wishes-header">
          <div className="flex items-center justify-between mb-6">
            <h3>
              {isFiltered && selectedBanner ? 
                `Recent ${normalizedBannerName} Wishes` : 
                'Recent Wishes'
              }
            </h3>
          
            {isFiltered && onClearFilter && (
              <button 
                type="button"
                onClick={onClearFilter}
                className="btn text-sm px-4 py-2 hover:underline"
              >
                Show All Banners
              </button>
            )}
          </div>
        </div>

      {wishes.length === 0 ? (
        <EmptyWishState message={isFiltered ? `No ${normalizedBannerName} wishes found.` : "No wishes recorded."} />
      ) : (
        <div className="wish-history recent">
          {sortedWishes.slice(0, 5).map((wish) => (
            <WishItem key={wish.gameWishId} wish={wish} compact={true} gameName={gameName} />
          ))}

          {wishes.length > 5 && (
            <div className="view-more-prompt">
              <button
                type="button"
                className="wish-history-btn"
                onClick={onViewAll}
              >
                View All {wishes.length} Wishes →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RecentWishHistory;