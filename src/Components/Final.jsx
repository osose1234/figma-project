import "react";
import "../Styles/Final.css";
import "react";
import "../styles/Last.css";
import Sit from "./Sit.jpg";
import Ha from "./Ha.jpg";
import img from "./img.jpg";
import Vase from "./Vase.jpg";
import Sa from "../Components/Sa.jpg";
import Da from "../Components/Da.jpg";
function Final() {
  return (
    <div className="gallery-container">
      <h2>
        Share your setup with <br />
        <span>#FuniroFurniture</span>
      </h2>
      <div className="image-grid">
        <img src={Sa} className="grid-ite" />{" "}
        <img src={Da} className="grid-item" />
        <img src={Ha} className="grid-item" />
        <img src={img} className="grid-item" />{" "}
        <h2>
          Latests Products <br />
          <span>#FuniroFurniture</span>
        </h2>
        <img src={Sit} className="grid-item" />
        <img src={Da} className="grid-item" />{" "}
        <img src={Ha} className="grid-item" />
        <img src={img} className="grid-item" />
      </div>{" "}
      <div className="image-grid">
        <img src={Sit} className="grid-item" />{" "}
        <img src={Vase} className="grid-item" />
        <img src={Ha} className="grid-item" />
        <img src={img} className="grid-item" />{" "}
        <h2>
          Latests Products <br />
          <span>#FuniroFurniture</span>
        </h2>
        <img src={Da} className="grid-item" />
        <img src={Vase} className="grid-item" />{" "}
        <img src={Ha} className="grid-item" />
        <img src={img} className="grid-item" />
      </div>
    </div>
  );
}

export default Final;
