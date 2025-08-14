import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

function Navbar() {
  return <nav className="navbar">
    <div className="navbar-brand">
      <Link to="/">MaiPon</Link>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/my-games" className="nav-link">My Games</Link>
      <Link to="/" className="nav-link">Settings</Link>
      <Link to="/login" className="nav-link login-button">Login</Link>
    </div>
  </nav>
}

export default Navbar;