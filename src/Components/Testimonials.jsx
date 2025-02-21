import "react";
import "../Styles/Testimonial.css";
import Two from "../Components/Two.jpg";
import { useNavigate } from "react-router-dom";
import pre from "../Components/pre.png";
import B from "../Components/B.png";
import C from "../Components/C.png";
import D from "../Components/D.png";
import E from "../Components/E.png";
const Testimonials = () => {
  const navigate = useNavigate();
  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h4>TESTIMONIALS</h4>
        <h2>What People Say About Us.</h2>
      </div>
      <div className="testimonial-card">
        <img src={Two} alt="User" className="user-image" />
        <div className="testimonial-content">
          <p>
            On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.
          </p>
          <h5>Mike Taylor</h5>
          <span>Lahore, Pakistan</span>
        </div>
        <img src={Two} alt="User" className="user-image" />
        <div className="testimonial-content">
          <p>
            On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.
          </p>
          <h5>Mike Taylor</h5>
          <span>Lahore, Pakistan</span>
        </div>
      </div>
      <button className="btn" onClick={() => navigate("/BusinessProfile")}>
        Contact us
      </button>
      <div className="partner-logos">
        <img src={pre} alt="Axon" />
        <img src={B} alt="Jetstar" />
        <img src={C} alt="Expedia" />
        <img className="D" src={D} alt="Qantas" />
        <img className="E" src={E} alt="Alitalia" />
      </div>
    </section>
  );
};

export default Testimonials;
