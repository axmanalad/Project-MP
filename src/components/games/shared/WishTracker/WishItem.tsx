import type React from "react";
import type { WishItemProps } from "../../../../types";
import { convertDate } from "../../../../utils/convertDate";

const WishItem: React.FC<WishItemProps> = ({ wish, compact = false }) => {
  return (
    <div className={`wish-item ${compact ? 'compact' : 'detailed'}`}>
      <div className="wish-item-info">
        <div className={`wish-item-rarity rarity-${String(wish.rarity)}`}></div>
        <div className={"wish-details"}>
          <div className="flex flex-row gap-2 items-center">
            <div className="wish-item-name">{wish.itemName}</div>
            <div className="wish-item-number">#{wish.id}</div>
          </div>
          <div className="wish-item-meta">
            <span className="wish-item-type">{wish.itemType}</span>
            <span className="wish-item-pity">Pity: {wish.pityCount}</span>
            {!compact && (
              <span className="wish-item-rarity-text">{wish.rarity}★</span>
            )}
          </div>
        </div>
      </div>
      <div className="wish-item-timestamp">{convertDate(new Date(wish.timestamp))}</div>
    </div>
  );
};

export default WishItem;