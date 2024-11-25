import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";
import logo from "../../assets/picsvg.svg";

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
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebookF} className="icon" />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} className="icon" />
          </a>
          <a
            href="mailto:Befog@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
          </a>
          <a
            href="https://linkedin.com"
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
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="center">
          <p className="footer-p">Services</p>
          <ul className="footer-ul">
            <li><a href="/uiux">UI/UX</a></li>
            <li><a href="/web">Web Development</a></li>
            <li><a href="/digital">Digital Marketing</a></li>
            <li><a href="/social">Social Media Marketing</a></li>
            <li><a href="/strategy">Content Strategy</a></li>
          </ul>
        </div>
        <div className="right">
          <p className="footer-p">Get in Touch</p>
          <ul className="footer-ul">
            <li><a href="tel:+12224547890">+1-222-454-7890</a></li>
            <li><a href="mailto:Befog@gmail.com">Befog@gmail.com</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
