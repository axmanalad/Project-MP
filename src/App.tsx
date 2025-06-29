import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Home from './pages/Home';
import MyGames from './pages/MyGames';
import Navbar from './components/Navbar';
import { GameProvider } from './contexts/GameProvider';

function App() {
  return (
    <GameProvider>
      <header className="flex">
        <Navbar />
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-games" element={<MyGames />} />
        </Routes>
      </main>
    </GameProvider>
  );
}

export default App
