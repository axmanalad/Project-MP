import type { PityCounter } from "../../../../types";
import { calculatePity } from "../../../../utils/pityCalculation";

function PityCard({bannerType, current, max, guaranteed}: PityCounter) {
  return (
    <div className="pity-card">
      <h3>{bannerType} Banner</h3>
      <div className="pity-count">{current}/{max}</div>
      <div className="pity-progress">
        <div className="progress-bar" style={{ width: calculatePity(current, max) }}></div>
      </div>
      {guaranteed && (
        <span className="guaranteed-text">Guaranteed ⭐</span>
      )}
    </div>
  )
}

export default PityCard;