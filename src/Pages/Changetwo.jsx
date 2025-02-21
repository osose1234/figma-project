import { useRef } from "react";
import "../Styles/Carousel.css";
import img from "./img.jpg";

import Sit from "./Sit.jpg";
import Vase from "./Vase.jpg";
const Changetwo = () => {
  const carouselRef = useRef(null);

  return (
    (<img src={Vase} alt="ME" />),
    (<img src={Sit} alt="ME" />),
    (<img src={img} alt="ME" />),
    (
      <div className="carousel-container">
        <div className="carousel">
          <button className="nav left" onClick={() => scroll("left")}>
            &lt;
          </button>{" "}
          <div className="carousel-items" ref={carouselRef}>
            <div className="card">
              <img src={Sit} />
              <div className="card-content">
                <h3>Welcome</h3>
                <p>{}</p>
              </div>
            </div>
          </div>{" "}
          <button className="nav right" onClick={() => scroll("right")}>
            &gt;
          </button>{" "}
          <button className="nav right" onClick={() => scroll("right")}>
            &gt;
          </button>
        </div>
      </div>
    )
  );
};

export default Changetwo;
