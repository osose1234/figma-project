import { Link } from "react-router-dom"; // ✅ Import Link
import "react";
import "../Styles/Navbar.css";
import Logo from "../Components/Logo.png";

const Nav = () => {
  return (
    <nav className="Av">
      <ul className="nav-links">
        <img className="Li" src={Logo} alt="Logo" />
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/Contacts">
            <button>Destination</button>
          </Link>
        </li>
        <li>
          <Link to="/Contact">
            <button>Hotels</button>
          </Link>
        </li>
        <li>
          <Link to="/NewPage">
            <button>Flight</button>
          </Link>
        </li>
        <li>
          <Link to="/Shop">
            <button>Booking</button>
          </Link>
        </li>
        <li>
          <Link to="/Sign">
            <button>Login</button>
          </Link>
        </li>

        <li>
          <button className="signup-btn">Sign up</button>
        </li>
        <li>EN ▼</li>
      </ul>
    </nav>
  );
};
export default Nav;
