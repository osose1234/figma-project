import "react";
import "../Styles/Name.css";

const Name = () => {
  return (
    <div className="container">
      <div className="steps">
        <h2>Book Your Next Trip In 3 Easy Steps</h2>
        <div className="step">
          <h3>1</h3>
          <h4>Choose Destination</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </p>
        </div>
        <div className="step">
          <h3>2</h3>
          <h4>Make Payment</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </p>
        </div>
        <div className="step">
          <h3>3</h3>
          <h4>Reach Airport on Selected Date</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
            tortor tempus.
          </p>
        </div>
      </div>
      <div className="trip-details">
        <img src="greece.jpg" alt="Trip to Greece" />
        <h3>Trip To Greece</h3>
        <p>14-29 June | By Robbin j</p>
        <p>Ongoing Trip to rome</p>
        <p>40% completed</p>
        <p>24 people going</p>
        <button>♡</button>
      </div>
      <div className="testimonials">
        <h2>TESTIMONIALS</h2>
        <h3>What People Say About Us.</h3>
        <div className="testimonial">
          <p>
            On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.
          </p>
          <div className="testimonial-author">
            <img src="avatar.jpg" alt="Mike Taylor" />
            <h4>Mike Taylor</h4>
            <p>Lahore, Pakistan</p>
          </div>
        </div>
        <div className="testimonial">
          <p>
            On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.
          </p>
          <div className="testimonial-author">
            <img src="avatar.jpg" alt="Chris Thomas" />
            <h4>Chris Thomas</h4>
            <p>CEO of Red Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
