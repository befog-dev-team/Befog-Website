import React from 'react';
import './ServiceAbout.css';

const ServiceAbout = ({ title, description, background, icon }) => {
  return (
    <div className="service-item-about" style={{ backgroundImage: `url(${background})` }}>
      <div className="content-About">
        <div className="icon">
          <div className="icon-img" style={{ backgroundImage: `url(${icon})` }}></div>
        </div>
        <h2>{title}</h2>
        {description && <p>{description}</p>} {/* Conditionally render description */}
      </div>
    </div>
  );
};

export default ServiceAbout;
