import "react";
import "./style.css"; // Import CSS

const index = ({ image, title, description, date, comments }) => {
  return (
    <div className="post-card">
      <div className="post-image">
        <img src={image} alt={title} />
        <span className="badge">NEW</span>
      </div>
      <div className="post-content">
        <div className="tags">
          <span>Google</span> <span>Trending</span> <span>New</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="post-footer">
          <span className="date">📅 {date}</span>
          <span className="comments">📊 {comments} comments</span>
        </div>
        <a href="#" className="learn-more">
          Learn More →
        </a>
      </div>
    </div>
  );
};

export default index;
