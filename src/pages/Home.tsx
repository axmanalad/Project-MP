import GameCard from "../components/GameCard";
import Hero from "../components/Hero";
// import {useState} from "react";
import "../styles/pages/home.css";
import { games } from "../data/games";

// TODO: Move search functionality to a different page called AddGame.tsx

function Home() {
  // const [searchQuery, setSearchQuery] = useState("");

  // const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   alert(`Searching for: ${searchQuery}`);
  // };

  return (
    <div className="home">
      <Hero />
      {/* <form onSubmit={handleSearch} className="search-form">
        <input type="text" placeholder="Search for a game..." className="search-input"
         value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} />
        <button type="submit" className="search-button">Search</button>
      </form> */}

      <h2>Upcoming Games Supported</h2>
      <div className="games-grid">
        {games.map(game => (
          // game.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
          (
            <GameCard game={game} key={game.id} />
          )
        ))}
      </div>
    </div>
  )
}

export default Home;