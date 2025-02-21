import "react";
import "../Styles/Solutions.css"; // Import the CSS file
import Logo from "../Components/Logo.png";
import Plane from "../Components/Plane.png";
const Solutions = () => {
  return (
    <div className="solutions-container">
      <div className="solutions-text">
        <h2>Discover other solutions that can help your business</h2>
        <p>
          Google Ads solutions can help you achieve your goals with smarter
          campaigns, measurement and insights. Learn more about setting goals
          for your chosen marketing objective.
        </p>
      </div>

      <div className="solutions-cards">
        <div className="card">
          <img src={Logo} alt="AI-powered Ads" />
          go
          <h3>AI-powered ad solutions: what works, and what’s next</h3>
          <p>
            Combine your expertise with Google’s AI to drive your business
            further, faster.
          </p>
        </div>
        <div className="card">
          <img src={Plane} alt="Google Ads Tools" />
          <h3>Google Ads Tools and Products</h3>
          <p>
            Google Ads tools can help you improve performance and get more done.
          </p>
        </div>{" "}
      </div>
    </div>
  );
};

export default Solutions;
