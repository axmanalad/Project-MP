import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">Game App</Link>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/my-games" className="nav-link">My Games</Link>
    </div>
  </nav>
}

export default Navbar;