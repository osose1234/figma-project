import "react";
import "../Styles/ore.css";
import More from "../Pages/More.jpg";
function Ore() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>High-Quality Furniture Just For You</h1>
        <p>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home.
        </p>
        <button className="shop-now">Shop Now</button>
      </div>

      <div className="hero-image">
        <img src={More} alt="Luxury Sofa" />
        <div className="product-info">
          <h3>Bohauss</h3>
          <p>Luxury big sofa 2-seat</p>
          <p className="price">Rp 17.000.000</p>
        </div>
      </div>

      <div className="navigation">
        <span className="dot active"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>

      <div className="arrows">
        <button className="prev">❮</button>
        <button className="next">❯</button>
      </div>
    </section>
  );
}

export default Ore;
