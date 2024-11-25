import React from "react";

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="service-card">
      <div className={`icon ${icon}`}></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
