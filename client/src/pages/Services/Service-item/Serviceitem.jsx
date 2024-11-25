// src/Serviceitem.js
import PropTypes from 'prop-types';
import './Serviceitem.css';
import { Link } from 'react-router-dom';

const Serviceitem = ({ title, description, background, redirectUrl, icon }) => {
  return (
    <Link
      to={redirectUrl}
      className="service-item"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="content">
        <div className="icon">
          <img src={icon} alt={title} />
        </div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
};

Serviceitem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string,
  redirectUrl: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Serviceitem;
