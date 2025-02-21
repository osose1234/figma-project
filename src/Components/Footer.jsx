import "react";
import { useNavigate } from "react-router-dom";
import Logo from "../Components/Logo.png";
import "../styles/Contact.css";

function Contact() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer-section">
        <h2 className="logo">
          <img className="Li" src={Logo} />
        </h2>
      </div>

      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h3>Help</h3>
        <ul>
          <li>
            <a href="#">Payment Options</a>
          </li>
          <li>
            <a href="#">Returns</a>
          </li>
          <li>
            <a href="#">Privacy Policies</a>
          </li>
        </ul>
      </div>

      <div className="footer-section newsletter">
        <h3>Newsletter</h3>
        <div className="subscribe">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            aria-label="Enter your email to subscribe"
          />
          <button>SUBSCRIBE</button>
          <button className="btn" onClick={() => navigate("/PP")}>
            Contact us
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
