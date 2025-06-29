import "../styles/components/game-card.css";
import type { GameCardProps } from "../types";
import { convertDate } from "../utilities/convertDate";
import { useGameContext } from "../hooks/useGameContext";

function GameCard({ game }: GameCardProps) {
  const { isMyGame, addToMyGames, removeFromMyGames } = useGameContext();
  const favorite = isMyGame(game.id);
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking favorite
    e.preventDefault();
    if (favorite) {
      removeFromMyGames(game.id);
    } else {
      addToMyGames(game);
    }
  }

  const handleCardClick = () => {
    window.open(game.websiteUrl, '_blank');
  }

  return (
    <div className="game-card cursor-pointer" onClick={handleCardClick}>
      <div className="game-image-container">
        <img src={game.imageUrl} alt={game.title} className="game-image" />
        <div className="game-overlay">
          <button type="button" className={`favorite-button ${favorite ? 'active' : ''}`} onClick={handleFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-author">{game.author}</p>
        <p className="game-release-date">Released: {convertDate(game.releaseDate)}</p>
      </div>
    </div>
  );
}

export default GameCard;