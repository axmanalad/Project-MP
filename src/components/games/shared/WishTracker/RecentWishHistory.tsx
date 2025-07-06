import type React from "react";
import type { RecentWishHistoryProps } from "../../../../types";
import WishItem from "./WishItem";
import EmptyWishState from "./EmptyWishState";

const RecentWishHistory: React.FC<RecentWishHistoryProps> = ({ wishes, onViewAll }) => {
  return (
      <div className="recent-wishes">
        <div className="recent-wishes-header">
          <h3>Recent Wishes</h3>
        </div>

      {wishes.length === 0 ? (
        <EmptyWishState />
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