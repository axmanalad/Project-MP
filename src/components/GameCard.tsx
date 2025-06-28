import "../styles/components/game-card.css";

interface Game {
  id: number;
  title: string;
  releaseDate: string;
  url: string;
}

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  const handleFavoriteClick = () => {
    alert(`You clicked on favorite for ${game.title}`);
  }

  return (
    <div className="game-card">
      <div className="game-image-container">
        <img src={game.url} alt={game.title} className="game-image" />
        <div className="game-overlay">
          <button type="button" className="favorite-button" onClick={handleFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="game-info">
        <h3 className="game-title">{game.title}</h3>
        <p className="game-release-date">Released: {game.releaseDate}</p>
      </div>
    </div>
  );
}

export default GameCard;