import type React from "react";
import type { WishHeaderProps } from "../../../../types";

const WishHeader: React.FC<WishHeaderProps> = ({
  currentView,
  onViewChange,
  showSampleData,
  onToggleSampleData,
  totalWishes
}) => {
  return (
    <div className="wish-tracker-header">
      <div className="wish-header-title">
        <h2>Wish Tracker</h2>

        <div className="view-toggle">
          <button
            type="button"
            className={`view-toggle-btn ${currentView === 'recent' ? 'active' : ''}`}
            onClick={() => {onViewChange('recent')}}
          >
            Recent
          </button>
          <button
            type="button"
            className={`view-toggle-btn ${currentView === 'full' ? 'active' : ''}`}
            onClick={() => {onViewChange('full')}}
          >
            Full History {totalWishes > 0 && `(${String(totalWishes)})`}
          </button>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="btn btn-outline text-sm px-4 py-2"
          onClick={onToggleSampleData}
        >
          {showSampleData ? 'Hide Sample' : 'Show Sample'}
        </button>
        <button type="button" className="btn">Add New Wish</button>
      </div>
    </div>
  );
};

export default WishHeader;