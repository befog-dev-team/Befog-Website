import React from "react";
import "./Testimonial.css";

const Testimonial = ({ name, rating, text }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-content">
        <span className="quote-mark">“</span>
        <p>{text}</p>
      </div>
      <div className="testimonial-footer">
        <div className="circle-and-info">
          <div className="small-circle"></div>
          <div className="info">
            <p className="name">{name}</p>
            <p className="rating">Rating: {rating} ★</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
