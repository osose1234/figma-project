import "react";
import "../Styles/Cheack.css";
import Greece2 from "../assets/Greece2.mp4";
const steps = [
  {
    id: 1,
    icon: "🗺️",
    title: "Choose Destination",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "#FFC107",
  },
  {
    id: 2,
    icon: "💳",
    title: "Make Payment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "#FF5722",
  },
  {
    id: 3,
    icon: "✈️",
    title: "Reach Airport on Selected Date",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
    color: "#009688",
  },
];

const Cheack = () => {
  return (
    <div className="book-trip-container">
      <div className="trip-info">
        <h4 className="subtitle">Easy and Fast</h4>
        <h2 className="title">Book Your Next Trip In 3 Easy Steps</h2>
        <div className="steps">
          {steps.map((step) => (
            <div key={step.id} className="step">
              <span className="icon" style={{ backgroundColor: step.color }}>
                {step.icon}
              </span>
              <div className="step-text">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="trip-card">
        {/* Video Background */}
        <video src={Greece2} autoPlay loop muted className="backgroundvideo">
          Your browser does not support the video tag.
        </video>
        <h3>Trip To Greece</h3>
        <p>14-29 June | by Robbin joe</p>
        <div className="trip-details">
          <span>📍</span>
          <span>📖</span>
          <span>📅</span>
        </div>
        <p className="people-going">👥 24 people going</p>
      </div>
      <div className="ongoing-trip">
        <h4>Ongoing</h4>
        <h3>Trip to Rome</h3>
        <p className="progress">40% completed</p>
      </div>
    </div>
  );
};

export default Cheack;
