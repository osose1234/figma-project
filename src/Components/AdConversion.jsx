import "react";
import "../Styles/AdConversion.css";
import Logo from "../Components/Logo.png";
const AdConversion = () => {
  return (
    <div className="ad-container">
      <img src={Logo} alt="Google Ads Logo" className="ad-logo" />
      <h1>Ad Conversion Measurement and Bidding</h1>
      <p>
        Understand how your campaigns are performing with privacy-safe
        conversion measurement. Then optimise campaigns using tools like Smart
        Bidding, which uses Google’s AI to help you reach your business goals.
      </p>
      <button className="start-button">Start now</button>
    </div>
  );
};

export default AdConversion;
