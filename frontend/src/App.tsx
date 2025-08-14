import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Home from './pages/Home';
import MyGames from './pages/MyGames';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import GamePage from './pages/games/GamePage';
import Navbar from './components/Navbar';
import { GameProvider } from './contexts/GameProvider';
import AddGame from './pages/AddGame';

function App() {
  return (
    <GameProvider>
      <header className="flex">
        <Navbar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/my-games" element={<MyGames />} />
          <Route path="/game/:gameTitle" element={<GamePage />} />
          <Route path="/add-game" element={<AddGame />} />
        </Routes>
      </main>
    </GameProvider>
  );
}

export default App
