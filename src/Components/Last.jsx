import "react";
import "../styles/Last.css";
import Sit from "./Sit.jpg";
import Ha from "./Ha.jpg";

import img from "./img.jpg";
import Vase from "./Vase.jpg";

const Last = () => {
  return (
    <div className="gallery-container">
      <h2>
        Share your setup with <br />
        <span>#FuniroFurniture</span>
      </h2>
      <div className="image-grid">
        <img src={Vase} className="grid-item" />{" "}
        <img src={img} className="grid-item" />
        <img src={Ha} className="grid-item" />
        <img src={Ha} className="grid-item" />
        <img src={Ha} className="grid-item" />
        <img src={Sit} className="grid-item" />{" "}
        <img src={Sit} className="grid-item" />
        <img src={Sit} className="grid-item" />
      </div>
    </div>
  );
};

export default Last;
