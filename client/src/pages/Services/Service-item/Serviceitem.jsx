// src/Serviceitem.js
import React from 'react';
import './Serviceitem.css';

const Serviceitem = ({ title, description, background, redirectUrl, icon }) => {
  return (
    <a
      href={redirectUrl} // Use href for native anchor navigation
      className="service-item"
      style={{ backgroundImage: `url(${background})` }}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} // Scroll to top on click
    >
      <div className="content">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
};

export default Serviceitem;
