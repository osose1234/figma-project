import "react";
import "../Styles/Subscribe.css";

const Subscribe = () => {
  return (
    <div className="subscribe-container">
      <h2>
        Subscribe to get information, latest news and other interesting offers
        about <span>Cobham</span>
      </h2>
      <div className="subscribe-form">
        <input type="email" placeholder="Your email" />
        <button>Subscribe</button>
      </div>
      <div className="subscribe-icon">
        <span>📩</span>
      </div>
    </div>
  );
};

export default Subscribe;
