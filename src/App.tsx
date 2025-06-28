import { Route, Routes } from 'react-router-dom';
import './styles/App.css'
import Home from './pages/Home';
import MyGames from './pages/MyGames';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div className="flex">
        <Navbar />
      </div>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-games" element={<MyGames />} />
        </Routes>
      </main>
    </>
  );
}

export default App
