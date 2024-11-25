import PropTypes from 'prop-types';

const ServiceCard = ({ title, icon, description }) => {
  return (
    <div className="service-card">
      <div className={`icon ${icon}`}></div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
