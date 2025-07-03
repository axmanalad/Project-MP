import type { StatCardProps } from "../types/stats";
import "../styles/components/stat-card.css";

function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="stat-card">
      <h3 className="stat-title">{title}</h3>
      <span className="stat-value">{value}</span>
    </div>
  );
}

export default StatCard;