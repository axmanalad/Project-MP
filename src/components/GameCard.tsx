import "../styles/components/game-card.css";
import type { GameCardProps } from "../types";
import { convertDate } from "../utilities/convertDate";

function GameCard({ game }: GameCardProps) {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click when clicking favorite
    alert(`You clicked on favorite for ${game.title}`);
  }

  const handleCardClick = () => {
    window.open(game.websiteUrl, '_blank');
  }

  return (
    <div className="game-card cursor-pointer" onClick={handleCardClick}>
      <div className="game-image-container">
        <img src={game.imageUrl} alt={game.title} className="game-image" />
        <div className="game-overlay">
          <button type="button" className="favorite-button" onClick={handleFavoriteClick}>
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