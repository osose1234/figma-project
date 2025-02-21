import "react";
import "../Styles/Product.css";
import Rec from "../Components/Rec.jpg";
const destinations = [
  {
    id: 1,
    image: "rome.jpg",
    location: "Rome, Italy",
    price: "$5.42k",
    duration: "10 Days Trip",
  },
  {
    id: 2,
    image: "london.jpg",
    location: "London, UK",
    price: "$4.2k",
    duration: "12 Days Trip",
  },
  {
    id: 3,
    image: "europe.jpg",
    location: "Full Europe",
    price: "$15k",
    duration: "28 Days Trip",
  },
];

const Product = () => {
  return (
    <div className="top-destinations-container">
      <h3 className="section-subtitle">Top Selling</h3>
      <h2 className="section-title">Top Destinations</h2>
      <div className="destinations">
        {destinations.map((destination) => (
          <div key={destination.id} className="destination-card">
            <img className="a" src={Rec} alt={destination.location} />
            <div className="destination-info">
              <h3>{destination.location}</h3>
              <span className="price">{destination.price}</span>
              <p className="duration">&#x1F4CD; {destination.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
