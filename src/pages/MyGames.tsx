import "../styles/pages/my-games.css";

function MyGames() {
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

export default MyGames;