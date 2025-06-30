import "../styles/pages/my-games.css";
import { useGameContext } from "../hooks/useGameContext";
import { centerGrid } from "../utils/centerGrid";
import GameCard from "../components/GameCard";

function MyGames() {
  const { myGames } = useGameContext();

  const getGridClass = (count: number) => {
    return centerGrid(count);
  };

  if (myGames.length > 0) {
    return (
      <div className="my-games">
        <div className="parent-container">
          <h2 className="my-games-title">My Games</h2>
          <div className={`grid gap-6 ${getGridClass(myGames.length)}`}>
            {myGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="my-games">
        <div className="parent-container">
          <div className="games-empty">
            <h2>No Games Found</h2>
            <p>Start adding some games to your library!</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MyGames;