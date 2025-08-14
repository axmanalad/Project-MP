import "../styles/pages/my-games.css";
import { useGameContext } from "../hooks/useGameContext";
import { centerGrid } from "../utils/centerGrid";
import GameCard from "../components/GameCard";
import { gameQuickStats, quickStats } from "../data/quickStats";
import StatCard from "../components/StatCard";
import { Link } from "react-router";
import { useMemo } from "react";
import { pityStats } from "../data/wishStats";

function MyGames() {
  const { myGames } = useGameContext();

  const dynamicQuickStats = useMemo(() => {
    return quickStats.map((stat) => {
      if (stat.title === "Total Games") {
        return { ...stat, value: myGames.length };
      }
      return stat;
    });
  }, [myGames.length]);

  const getDynamicGameStats = (gameId: number) => {
    const gamePityData = pityStats[gameId];
    const characterBanner = gamePityData.find(banner => banner.bannerType === 'Character');

    return gameQuickStats.map((stat) => {
      if (stat.title === "Character Pity") {
        return {
          ...stat,
          value: characterBanner ? characterBanner.current : 0
        };
      }
      if (stat.title === "Energy") {
        return { ...stat, value: stat.value };
      }
      return stat;
    });
  };

  if (myGames.length > 0) {
    return (
      <div className="my-games">
        <div className="parent-container">
          {/* Dashboard Header */}
          <div className="dashboard-header">
            <h1 className="my-games-title text-2xl font-bold">My Games</h1>
            <p className="dashboard-subtitle text-lg">Manage your gacha collection</p>
          </div>

          {/* Quick Stats Overview */}
          <div className="quick-stats">
            <h3 className="quick-stats-title">Quick Stats</h3>
            <div className="quick-stats-grid">
              {dynamicQuickStats.map((stat) => (
                <StatCard key={stat.title} title={stat.title} value={stat.value} />
              ))}
            </div>
          </div>

          {/* Game Grid - Click to enter specific game */}
          <div className="games-section">
            <h2 className="games-section-title">Your Games</h2>
            <div className={`grid gap-6 ${centerGrid(myGames.length)}`}>
              {myGames.map((game) => {
                const dynamicGameStats = getDynamicGameStats(game.id);
                return (
                  <div key={game.id} className="game-item-wrapper">
                    <Link
                      to={`/game/${game.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="game-link"
                    >
                      <GameCard game={game} />
                    </Link>
                    <div className="quick-stats-overlay">
                      {dynamicGameStats.map((stat) => (
                        <StatCard key={stat.title} title={stat.title} value={stat.value} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Add Game Button */}
        <div className="add-game-section">
          <Link to="/add-game" className="btn px-3 py-2">
            Add New Game
          </Link>
        </div>
      </div>
    )
  } else {
    return (
      <div className="my-games">
        <div className="parent-container">
          <div className="games-empty">
            <h2>No Games Found</h2>
            <p>Start by adding a gacha game to your library!</p>
            <div className="mt-6">
              <Link to="/add-game" className="btn px-3 py-2">
                Browse Games
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyGames;