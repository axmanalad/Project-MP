import { Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useGameContext } from "../../hooks/useGameContext";
import GameHeader from "../../components/games/shared/GameHeader";
import GenshinDashboard from "../../components/games/genshin/GenshinDashboard";
import ComingSoonDashboard from "../../components/games/shared/ComingSoonDashboard";
import "../../styles/pages/games/game-page.css";

const GamePage: React.FC = () => {
  const { gameTitle } = useParams<{ gameTitle: string }>();
  const { myGames } = useGameContext();

  // Scroll to top when component mounts or gameTitle changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [gameTitle]);

  // Normalize the game title
  const normalizedTitle = gameTitle?.replace(/-/g, ' ');

  // Check if user has this game.
  const currentGame = myGames.find(game => game.title.toLowerCase().replace(/\s+/g, '-') === gameTitle);

  if (!currentGame) {
    return <Navigate to="/my-games" replace />;
  }

  const renderGameDashboard = () => {
    switch (gameTitle) {
      case 'genshin-impact':
        return <GenshinDashboard game={currentGame} />;
      case 'honkai-star-rail':
        return <ComingSoonDashboard gameName="Honkai Star Rail" />;
      case 'wuthering-waves':
        return <ComingSoonDashboard gameName="Wuthering Waves" />;
      default:
        return <ComingSoonDashboard gameName={normalizedTitle ?? "Unknown Game"} />;
    }
  };
  
  return (
    <div className="game-page">
      <div className="parent-container">
        <GameHeader game={currentGame} />
        <main className="game-content">
          {renderGameDashboard()}
        </main>
      </div>
    </div>
  )
}

export default GamePage;