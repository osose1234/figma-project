import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

function NewPage() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <header className="navbar"></header>

      <section className="hero-section">
        <div className="hero-content">
          <p className="arrival">New Arrival</p>
          <h1>Discover Our New Collection</h1>
          <p className="description">
            Welcome to Furniro , consectetur adipiscing elit. Ut elit tellus,
            luctus nec ullamcorper mattis.
          </p>
          <button className="btn" onClick={() => navigate("/Sign")}>
            BUY
          </button>
        </div>{" "}
        <div className="hero-content">
          <h1>
            Hello, I’m <span>Brooklyn Gilbert</span>
          </h1>
          <p>
            Im a Freelance <span className="highlight">UI/UX Designer</span> and{" "}
            <span className="highlight">Developer</span> based in London,
            England. I strive to build immersive and beautiful web applications
            through carefully crafted code and user-centric design.
          </p>{" "}
          <button className="btn" onClick={() => navigate("/Contact")}>
            Go to New Page
          </button>
        </div>
      </section>
    </div>
  );
}

export default NewPage;
