import "react";

import "../Styles/Four.css";

const services = [
  {
    title: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    icon: "🌤", // Replace with actual icon
  },
  {
    title: "Best Flights",
    className: "weather",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    icon: "✈",
  },
  {
    title: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    icon: "🎤",
  },
  {
    title: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    icon: "⚙",
  },
];

const Four = () => {
  return (
    <div className="containe">
      <h2>We Offer Best Services</h2>
      <div className="services">
        {services.map((service, index) => (
          <div key={index} className="service">
            <span className="icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Four;
