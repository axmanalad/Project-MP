import { Link } from "react-router-dom";
import type { GameHeaderProps } from "../../../types";
import "../../../styles/components/games/shared/game-header.css";

const GameHeader: React.FC<GameHeaderProps> = ({ game }) => {
  return (
    <header className="game-header">
      <div 
        className="game-banner-bg" 
        style={{ backgroundImage: `url(${game.bgImageURL})` }}
      ></div>
      <div className="game-header-content">
        <div className="flex justify-between items-start">
          <div className="game-header-info">
            <Link to="/my-games" className="text-purple-200 hover:text-white mb-2 inline-block text-sm">
              ← Back to My Games
            </Link>
            <h1 className="game-title">{game.title}</h1>
            <p className="game-subtitle">
              {game.isAvailable ? `Manage your ${game.title}'s progress` : `${game.title} is not available yet`}
            </p>
            
            {game.isAvailable && (
              <div className="game-stats mt-4">
                <div className="game-stat">
                  <div className="game-stat-label">Last Played</div>
                  <div className="game-stat-value">2 days ago</div>
                </div>
                <div className="game-stat">
                  <div className="game-stat-label">Total Playtime</div>
                  <div className="game-stat-value">1234 days</div>
                </div>
              </div>
            )}
          </div>
          {game.isAvailable && (
            <div className="game-header-actions">
              <button type="button" className="game-header-btn">
                ⚙️ Settings
              </button>
              <button type="button" className="game-header-btn primary">
                🔄 Sync Data
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default GameHeader;