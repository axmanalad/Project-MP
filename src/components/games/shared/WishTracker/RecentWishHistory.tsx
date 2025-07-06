import type { WishItem } from "../../../../types";

function RecentWishHistory({ id, itemName, itemType, rarity, pityCount, timestamp }: WishItem) {
  return (
    <div key={id} className="wish-item">
      <div className="wish-item-info">
        <div className={`wish-item-rarity rarity-${rarity.toString()}`}></div>
        <div>
          <div className="wish-item-name">{itemName}</div>
          <div className="flex items-center gap-2">
            <div className="wish-item-type">{itemType}</div>
            <div className="wish-item-pity">#{pityCount}</div>
          </div>
        </div>
      </div>
      <div className="wish-item-date">{timestamp}</div>
    </div>
  )
}

export default RecentWishHistory;