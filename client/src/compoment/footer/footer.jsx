import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import logo from "../../assets/picsvg.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container-footer">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>
      <div className="footer-content">
        <p className="footer-text">Befog (A&W Technology)</p>
        <div className="social-icons">
          <a
            href="https://www.facebook.com/techapli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a
            href="https://x.com/home?lang=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
          <a
            href="mailto:contact.us@befog.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/company/100947651/admin/dashboard/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
          </a>
        </div>
      </div>
      <div className="footer-wrapper">
        <div className="left">
          <p className="footer-p">Company</p>
          <ul className="footer-ul">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="center">
          <p className="footer-p">Services</p>
          <ul className="footer-ul">
            <li><Link to="/uiux">UI/UX</Link></li>
            <li><Link to="/web">Web Development</Link></li>
            <li><Link to="/digital">Digital Marketing</Link></li>
            <li><Link to="/social">Social Media Marketing</Link></li>
            <li><Link to="/strategy">App Development</Link></li>
          </ul>
        </div>
        <div className="right">
          <p className="footer-p">Get in Touch</p>
          <ul className="footer-ul">
            <li><a href="tel:+917985322738">+91 7985322738</a></li>
            <li><a href="mailto:contact.us@befog.in">contact.us@befog.in</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
