import { useNavigate, Link } from "react-router-dom";
import "react";
import "../Styles/Navbar.css";

import Logo from "../Components/Logo.png";
import Back from "../assets/Back.mp4"; // Import your video file

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Video Background */}
      <video src={Back} autoPlay loop muted className="background-video">
        Your browser does not support the video tag.
      </video>

      {/* Navbar */}
      <nav className="Av">
        <ul className="nav-links">
          <li>
            <img className="Btn" src={Logo} alt="Logo" />
          </li>
          <li>
            <Link to="/">
              <button className="tn">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/pp">
              <button className="tn">Destination</button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
              <button className="tn">Hotels</button>
            </Link>
          </li>
          <li>
            <Link to="/ain">
              <button className="tn">Flight</button>
            </Link>
          </li>
          <li>
            <Link to="/Shop">
              <button className="tn">Booking</button>
            </Link>
          </li>
          <li>
            <Link to="/Sign">
              <button className="signup-btn">Login</button>
            </Link>
          </li>
          <li>EN ▼</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <div className="hero">
        <div className="hero-text">
          <img className="log" src={Logo} alt="Logo" />
          <p className="highlight">BEST DESTINATIONS AROUND THE WORLD</p>

          <h2>
            Travel, <span className="underline">enjoy</span> and live a new and
            full life
          </h2>
          <p className="subtext">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          <div className="buttons">
            <button className="btn" onClick={() => navigate("/newpage")}>
              Find out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
