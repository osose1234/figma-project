import "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>Welcome to the Home Page</h2>
      <button className="btn" onClick={() => navigate("/")}>
        Go to New Page
      </button>
    </div>
  );
}

export default Home;
