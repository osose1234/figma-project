import "react";
import Sit from "./Sit.jpg";
import "../Styles/Third.css";

function Third() {
  const rooms = [
    {
      id: 1,
      title: "Inner Peace",
      type: "Bed Room",
      image: "/images/stool.jpg",
    },
    {
      id: 2,
      title: "Minimal Style",
      type: "Dining Room",
      image: "/images/Living.jpg",
    },
    {
      id: 3,
      title: "Modern Look",
      type: "Living Room",
      image: "/images/Dining.jpg",
    },
  ];

  return (
    <div className="room-slider">
      <div className="text-section">
        <h2>50+ Beautiful rooms inspiration</h2>
        <p>
          Our designer already made a lot of beautiful prototypes of rooms that
          inspire you.
        </p>
        <button className="explore-btn">Explore More</button>
      </div>
      {rooms.map((room) => (
        <div key={room.id} className="slide">
          <img src={Sit} alt={room.title} />

          <div className="overlay">
            <p className="room-type">{room.type}</p>
            <h3 className="room-title">{room.title}</h3>
            <button className="arrow-btn">→</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Third;
