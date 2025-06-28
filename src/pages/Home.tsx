import GameCard from "../components/GameCard";
import {useState} from "react";
import "../styles/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const games = [
    { id: 1, title: "Genshin Impact", releaseDate: "2020-09-28", url: "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg" },
    { id: 2, title: "Honkai Star Rail", releaseDate: "2023-04-26", url: "https://upload.wikimedia.org/wikipedia/en/7/7f/Honkai_Star_Rail_%28logo%29.png" },
    { id: 3, title: "Wuthering Waves", releaseDate: "2023-12-07", url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Wuthering_Waves_logo.svg" },
  ]

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for a game..." className="search-input"
         value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} />
        <button type="submit" className="search-button">Search</button>
      </form>

      <h2>Upcoming Games Supported</h2>
      <div className="games-grid">
        {games.map(game => (
          game.title.toLowerCase().startsWith(searchQuery) && (
            <GameCard game={game} key={game.id} />
          )
        ))}
      </div>
    </div>
  )
}

export default Home;