import type React from "react";
import type { RecentWishHistoryProps } from "../../../../types";
import WishItem from "./WishItem";
import EmptyWishState from "./EmptyWishState";
import { getBannerDisplayName } from "../../../../utils/bannerUtils";

const RecentWishHistory: React.FC<RecentWishHistoryProps> = ({ wishes, onViewAll, selectedBanner, onClearFilter, isFiltered = false }) => {
  return (
      <div className="recent-wishes">
        <div className="recent-wishes-header">
          <div className="flex items-center justify-between mb-6">
            <h3>
              {isFiltered && selectedBanner ? 
                `Recent ${getBannerDisplayName(selectedBanner)} Banner Wishes` : 
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
        <EmptyWishState message={isFiltered ? `No ${selectedBanner ? getBannerDisplayName(selectedBanner) : ""} Banner wishes found.` : "No wishes recorded."} />
      ) : (
        <div className="wish-history recent">
          {wishes.slice(0, 5).map((wish) => (
            <WishItem key={wish.id} wish={wish} compact={true} />
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