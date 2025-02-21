import "react";
import "../styles/Page.css";
import { useNavigate } from "react-router-dom";
import Vase from "../Components/Vase.jpg";
import Sit from "../Components/Sit.jpg";
import img from "../Components/img.jpg";
import Ha from "../Components/Si.jpg";

import "../styles/Four.css";
function Page() {
  const navigate = useNavigate();
  return (
    <div className="gallery-container">
      <h2>
        Start Your Day With a new Product
        <br />
        <span>#FuniroFurniture</span>
      </h2>
      <div className="i">
        <div className="Ab">
          <img src={Vase} className="grid-item" />{" "}
        </div>
        <div className="Ga">
          <img src={img} className="grid-item" />
        </div>
        <div className="Ma">
          <img src={Ha} className="grid-item" />
        </div>{" "}
        <div className="Ma">
          <img src={Sit} className="grid-item" />
        </div>
      </div>{" "}
      <button className="btn" onClick={() => navigate("/newpage")}>
        Go to New Page Go to New Page
      </button>
    </div>
  );
}
export default Page;
