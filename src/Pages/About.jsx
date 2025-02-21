import "react";
import { useNavigate } from "react-router-dom";
import "../styles/About.css";

function About() {
  const navigate = useNavigate();
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our website! We are dedicated to providing the best services
        to our customers. Our team is passionate about delivering high-quality
        solutions that meet your needs.
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to innovate and lead in our industry, ensuring customer
        satisfaction and excellence in every project we undertake.
      </p>
      <h2>Contact Us</h2>
      <p>Email: contact@ourwebsite.com</p>
      <p>Phone: (123) 456-7890</p>{" "}
      <button className="btn" onClick={() => navigate("/newpage")}>
        Go to New Page
      </button>
    </div>
  );
}

export default About;
