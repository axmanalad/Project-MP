import type { PityCardProps } from "../../../../types";
import { calculatePity } from "../../../../utils/pityCalculation";
import "../../../../styles/components/games/shared/WishTracker/pity-card.css";


function PityCard({
  gachaType,
  current,
  max,
  guaranteed,
  onClick,
  isSelected = false,
}: PityCardProps) {
  return (
    <div 
      className={`pity-card ${onClick ? 'clickable' : ''} ${isSelected ? 'selected' : ''}`}
      onClick={onClick}>
      <h3>{gachaType} Banner</h3>
        <>
          <div className="pity-count">{current}/{max}</div>
          <div className="pity-progress">
            <div className="progress-bar" style={{ width: calculatePity(current, max) }}></div>
          </div>
          {guaranteed && (
            <span className="guaranteed-text">Guaranteed ⭐</span>
          )}
        </>
    </div>
  )
}

export default PityCard;