import type { StatCardProps } from "../../../types";

function GameHeaderStatCard({title, value}: StatCardProps) {
  return (
    <div className="game-stat">
      <div className="game-stat-label">{title}</div>
      <div className="game-stat-value">{value}</div>
    </div>
  )
}

export default GameHeaderStatCard;