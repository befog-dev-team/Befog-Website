// src/ServiceCard.js
import React from 'react';
import './ServicesCard.css';

const ServicesCard = ({ topic, title, description, icon }) => {
  return (
    <div className="service-card">
      <p>{topic}</p>
      <div className="icon">
        <div className='img' style={{ backgroundImage: `url(${icon})` }}></div>
      </div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServicesCard;

