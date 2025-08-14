import type { WishStatsData } from "../../../../types";

function WishStatCard({ label, value, subtext, type }: WishStatsData) {
  // Change color of stat card based on type and label
  const getStatClass = (label: string, type: string) => {
    if (type === 'streak') {
      // Current and Longest
      if (label.includes('Current') || label.includes('Longest')) {
        if (label.includes('Win')) {
          return 'win';
        } else if (label.includes('Loss')) {
          return 'loss';
        }
      }
    } else if (type === 'average') {
      if (label.includes('5★')) {
        return 'five-star';
      } else if (label.includes('4★')) {
        return 'four-star';
      }
    }
    return '';
  };

  return (
    <div className={`wish-stat-item ${type} ${getStatClass(label, type)}`}>
      <div className={`wish-stat-value ${type} ${getStatClass(label, type)}`}>{value}</div>
      <div className="wish-stat-label">{label}</div>
      {subtext && <div className="wish-stat-subtext">{subtext}</div>}
    </div>
  );
};

export default WishStatCard;