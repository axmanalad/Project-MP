import GameCard from "../components/GameCard";
import Hero from "../components/Hero";
// import {useState} from "react";
import "../styles/pages/home.css";

// TODO: Move search functionality to a different page called AddGame.tsx

function Home() {
  // const [searchQuery, setSearchQuery] = useState("");

  const games = [
    { id: 1, title: "Genshin Impact", releaseDate: "2020-09-28", url: "https://cdn1.epicgames.com/offer/879b0d8776ab46a59a129983ba78f0ce/genshintall_1200x1600-4a5697be3925e8cb1f59725a9830cafc" },
    { id: 2, title: "Honkai Star Rail", releaseDate: "2023-04-26", url: "https://cdn1.epicgames.com/spt-assets/6f3979ff608f42e286c83507a69b27f5/honkai-star-rail-v3a6b.jpg" },
    { id: 3, title: "Wuthering Waves", releaseDate: "2024-05-23", url: "https://cdn1.epicgames.com/spt-assets/c1586295960b46f88bbfeec32c199e0e/wuthering-waves-uw6vy.jpg" },
  ]

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