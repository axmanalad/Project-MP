import type React from "react";
import type { WishFilterProps } from "../../../../types";

const WishFilters: React.FC<WishFilterProps> = ({ filters, onFilterChange, resultCount }) => {
  const handleFilterChange = (key: keyof typeof filters, value: string) => {
    onFilterChange({
      ...filters,
      [key]: value
    });
  }

  return (
    <div className="wish-filters">
      <div className="filters-row">
        <div className="filter-group">
          <label>Rarity</label>
          <select
            value={filters.rarity}
            onChange={(e) => {handleFilterChange('rarity', e.target.value)}}
          >
            <option value="all">All</option>
            <option value="5">5★</option>
            <option value="4">4★</option>
            <option value="3">3★</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Type</label>
          <select
            value={filters.itemType}
            onChange={(e) => {handleFilterChange('itemType', e.target.value)}}
          >
            <option value="all">All</option>
            <option value="character">Characters</option>
            <option value="weapon">Weapons</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => {handleFilterChange('sortBy', e.target.value)}}
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>
      </div>

      <div className="filter-results">
        <span className="results-count">
          Showing {resultCount} wishes
        </span>
      </div>
    </div>
  );
};

export default WishFilters;