import "../Styles/LandingPage.css";
import Vid from "../assets/Vid.mp4";
const LandingPage = () => {
  return (
    <div className="landing-container">
      {/* Video Background */}
      <video src={Vid} autoPlay loop muted className="background-video">
        Your browser does not support the video tag.
      </video>

      <header className="header">
        <h1>High-Quality Furniture Just For You</h1>
        <p>
          Our furniture is made from selected and best quality materials that
          are suitable for your dream home.
        </p>
        <button className="shop-button">Shop Now</button>
      </header>

      <section className="features">
        <div className="feature-item">High Quality</div>
        <div className="feature-item">Warranty Protection</div>
        <div className="feature-item">Free Shipping</div>
        <div className="feature-item">24/7 Support</div>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        <div className="product-grid">
          <div className="product">Syltherine - Rp 2.500.000</div>
          <div className="product">Leviosa - Rp 2.500.000</div>
          <div className="product">Lolito - Rp 7.000.000</div>
          <div className="product">Respira - Rp 500.000</div>
        </div>
      </section>

      <section className="inspiration">
        <h2>50+ Beautiful Room Inspirations</h2>
        <button className="explore-button">Explore More</button>
      </section>
    </div>
  );
};

export default LandingPage;
