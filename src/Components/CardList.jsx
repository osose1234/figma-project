import { useState } from "react";
import "../Styles/CardList.css";

const offers = [
  { id: "A", credit: 300, spend: 300 },
  { id: "B", credit: 600, spend: 900 },
  { id: "C", credit: 900, spend: 1800 },
];

const SignupOffers = () => {
  const [selectedOffer, setSelectedOffer] = useState(null);

  return (
    <div className="signup-container">
      <h2>Choose a sign-up offer to jumpstart your first campaign</h2>
      <p>
        Select an offer that fits your monthly budget and sign up when ready.
        Youll receive your account credit once you meet the minimum spend
        requirement for the offer you selected.
        <a href="#"> Terms and conditions apply.</a>
      </p>
      <div className="offers">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`offer-card ${
              selectedOffer === offer.id ? "selected" : ""
            }`}
            onClick={() => setSelectedOffer(offer.id)}
          >
            <span className="offer-badge">OFFER {offer.id}</span>
            <h3>${offer.credit}</h3>
            <p>in Ads Credit</p>
            <p>
              Spend ${offer.spend} with Google Ads in the first 60 days to
              unlock the credit.
            </p>
          </div>
        ))}
      </div>
      <button className="claim-button" disabled={!selectedOffer}>
        Claim now
      </button>
    </div>
  );
};

export default SignupOffers;
