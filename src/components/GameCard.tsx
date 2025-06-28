import "../styles/GameCard.css";

function GameCard({game} : {game: {title: string, releaseDate: string, url: string}}) {

  const handleFavoriteClick = () => {
    alert(`You clicked on favorite for ${game.title}`);
  }

  return (
    <div className="game-card">
      <div className="game-poster">
        <img src={game.url} alt={game.title}/>        <div className="game-overlay">
          <button type="button" className="favorite-button" onClick={handleFavoriteClick}>
            ♥
          </button>
        </div>
      </div>
      <div className="game-info">
        <h3>{game.title}</h3>
        <h3>{game.releaseDate}</h3>
      </div>
    </div>
  )
}

export default GameCard;