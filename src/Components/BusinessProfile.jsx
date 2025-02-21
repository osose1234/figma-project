import "react";
import "../Styles/BusinessProfile.css";
import Sit from "./Sit.jpg";
import Vase from "./Vase.jpg";
import { useNavigate } from "react-router-dom"; // Replace with actual icon

const BusinessProfile = () => {
  const navigate = useNavigate();
  return (
    <div className="business-profile-container">
      {/* Left Section */}
      <div className="business-info">
        <h2>Show what you offer, from menu dishes to services.</h2>
        <p>
          Whether you’re a restaurant, store, or service provider, your profile
          helps customers do business with you easily and directly with menus,
          quotes, and more.
        </p>
        <button className="manage-btn">Manage now</button>
      </div>

      {/* Right Section (Profile Card) */}
      <div className="profile-card">
        <div className="profile-header">
          <div className="profile-details">
            <h3>Abuja Voltage</h3>
            <p className="rating">
              ⭐ 4.9 <span>(27 reviews)</span>
            </p>
            <p className="category">Electrician in Abuja, NG</p>
          </div>
          <img src={Sit} alt="Business" className="profile-img" />
        </div>

        {/* Navigation */}
        <div className="profile-nav">
          <span className="active">OVERVIEW</span>
          <span>UPDATES</span>
          <span>SERVICES</span>
          <span>REVIEWS</span>
          <span>PHOTOS</span>
        </div>

        {/* Action Buttons */}
        <div className="action-buttons">
          <div className="action">
            📞 <p>CALL</p>
          </div>
          <div className="action">
            💬 <p>CHAT</p>
          </div>
          <div className="action">
            📍 <p>DIRECTIONS</p>
          </div>
          <div className="action">
            🌐 <p>WEBSITE</p>
          </div>
        </div>

        {/* Quote Button */}
        <button className="btn" onClick={() => navigate("/newpage")}>
          REQUEST A QUOTE
        </button>
        {/* Location */}
        <div className="location">
          <img src={Vase} alt="Location" />
          <p>Abuja NG</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessProfile;
