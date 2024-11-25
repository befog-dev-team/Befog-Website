import { Link } from 'react-router-dom';
import './Digital.css';

const services = [
  {
    title:
      "Search Engine Optimization (SEO)",
  },
  { title: "Social Media (Paid & Organic)" },
  { title: "Branding" },
  { title: "Content" },
  { title: "Web" },
];

const workservices = [
  {
    title: "Product Research & Strategy",
    description:
      "We begin our journey by analyzing your business objectives and end-user requirements to create a draft of Low-Fidelity Wireframes.",
  },
  {
    title: "Product Conceptualization",
    description:
      "Succeeding the approval of the Low-Fidelity Wireframes, our Design Thinking team creates High-Fidelity Wireframes for your review and feedback.",
  },
  {
    title: "Development",
    description:
      "We use Agile methodology to collaborate and iterate on the product design and development until we achieve flawless UX/UI functionality and experience.",
  },
];
function Digital() {
  return (
    <div className="main-uiux">
      <div className="uiux">
        <div className="text-section">
          <h1 className="title">
            <span className="highlight">Digital Marketing</span>
          </h1>
          <p className="subtitle">
            Nurture Your Vision, Magnify Your Brand & Increase Your Sales with
            Inspiring Digital Marketing Solutions
          </p>
          <Link to="/contact">
            <button style={{ cursor: 'pointer' }} className="contact-button">Get in Touch</button>
          </Link>
        </div>
        <div className="image-section">
          <div className="ui-img">
            <div className="img-digital"></div>
          </div>
        </div>
      </div>
      <div className="offer">
        <h1>What are we offering</h1>
        <div className="offering-container">
          {services.map((service, index) => (
            <div key={index} className="digit-service-box">
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text">
        <div className="text-containter-web">
          <h2>Our Strengths</h2>
          <ul>
            <li>10 years of rendering excellent Web Development solutions.</li>
            <li>1000 projects successfully delivered.</li>
            <li>1000 projects successfully delivered.</li>
            <li>Dedicated Project Manager</li>
          </ul>
        </div>
      </div>
      <div className="work">
        <div className="work-befog">
          <h2>How BEFOG Works</h2>
          <div className="Rectangle-16-work"></div>
          <div className="work-container">
            {workservices.map((workservice, index) => (
              <div key={index} className="work-box">
                <h3>{workservice.title}</h3>
                <p>{workservice.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Digital;
