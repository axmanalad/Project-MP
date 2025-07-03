import GameCard from "../components/GameCard";
import Hero from "../components/Hero";
import "../styles/pages/home.css";
import { games } from "../data/games";

function Home() {
  return (
    <div className="home">
      <Hero />
      <h2>Upcoming Games Supported</h2>
      <div className="games-grid">
        {games.map(game => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </div>
  )
}

export default Home;