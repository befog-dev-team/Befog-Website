// src/Serviceitem.js
import PropTypes from 'prop-types';
import './Serviceitem.css';
import { Link } from 'react-router-dom';

const Serviceitem = ({ title, description, background, redirectUrl, icon }) => {
  return (
    <Link
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
    </Link>
  );
};

Serviceitem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  redirectUrl: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Serviceitem;
