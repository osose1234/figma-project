import "react";
import "../Styles/New.css";
import Card1 from "../Components/card1.png"; // Replace with actual images
import Card2 from "../Components/card2.png";
import Card3 from "../Components/card3.png";

const New = () => {
  return (
    <div className="solutions-container">
      <h2>Solutions that can help you meet your goals</h2>
      <p>
        Interested in learning more about what Google Ads has to offer? Click on
        the cards below to explore more related campaigns and helpful tools.
      </p>

      <div className="cards">
        {/* Card 1 */}
        <div className="card">
          <img src={Card1} alt="Smart Bidding" />
          <h3>Smart Bidding</h3>
          <p>
            Set your bids in real time using Smart Bidding, which uses Google’s
            AI to help you reach your business goals.
          </p>
          <a href="#" className="learn-more">
            Learn more
          </a>
        </div>

        {/* Card 2 */}
        <div className="card">
          <img src={Card2} alt="Conversion Measurement" />
          <h3>Conversion Measurement</h3>
          <p>
            Prioritize privacy while measuring which ads drive customers to make
            purchases online or in-store, sign contracts, and more.
          </p>
          <a href="#" className="learn-more">
            Learn more
          </a>
        </div>

        {/* Card 3 */}
        <div className="card">
          <img src={Card3} alt="Insights Page" />
          <h3>Insights Page</h3>
          <p>
            Grow your business with insights and trends that are tailored to
            your business.
          </p>
          <a href="#" className="learn-more">
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default New;
