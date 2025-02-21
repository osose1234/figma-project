import "react";
import "../styles/Shop.css";
import { useNavigate } from "react-router-dom";
import Vase from "../Components/Vase.jpg";
import Sit from "../Components/Sit.jpg";
import img from "../Components/img.jpg";
import Ha from "../Components/Ha.jpg";
import "../styles/Four.css";
function Shop() {
  const navigate = useNavigate();
  return (
    <div className="gallery-container">
      <h2>
        Start Your Day With a new Product
        <br />
        <span>#FuniroFurniture</span>
      </h2>
      <div className="i">
        <div className="a">
          <img src={Vase} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>{" "}
        <div className="a">
          <img src={img} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>
        <div className="a">
          <img src={Sit} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>
        <div className="a">
          <img src={Ha} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>{" "}
        <div className="a">
          <img src={Ha} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>{" "}
        <div className="a">
          <img src={Ha} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>{" "}
        <div className="a">
          <img src={Ha} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#500,00 </div>
          <b>#300,00</b>
        </div>{" "}
        <div className="a">
          <img src={Ha} className="grid-item" />
          #FuniroFurniture
          <br /> purchase items for cheap<div id="big">#600,00 </div>
          <b>#300,00</b>
        </div>
      </div>{" "}
      <button className="btn" onClick={() => navigate("/Sign")}>
        Get latest products
      </button>
    </div>
  );
}
export default Shop;
