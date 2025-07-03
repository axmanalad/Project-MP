import GameCard from "../components/GameCard";
import { games } from "../data/games";
import { useGameContext } from "../hooks/useGameContext";
import "../styles/pages/add-game.css";
import { centerGrid } from "../utils/centerGrid";
import {useMemo, useState} from "react";

function AddGame() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isMyGame } = useGameContext();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const filteredGames = useMemo(() => {
    return games.filter(game =>
      game.title.toLowerCase().includes(searchQuery.toLowerCase()) && !isMyGame(game.id)
    );
  }, [searchQuery, isMyGame]);

  const gridClass = useMemo(() => {
    return `grid gap-6 ${centerGrid(filteredGames.length)}`;
  }, [filteredGames.length]);

  return (
    <div className="add-game-page">
      <h1 className="text-2xl font-bold">Add a New Game</h1>
      <p className="text-gray-400">Use the form below to add a new game to your collection.</p>

      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for a game..." className="search-input"
         value={searchQuery} onChange={(e) => {
          setSearchQuery(e.target.value)
          }} />
        <button type="submit" className="search-button">Search</button>
      </form>
      {/* Add Game Form Component would go here */}
      <div className={gridClass}>
        {filteredGames.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  );
}

export default AddGame;