import { Link } from "react-router-dom";
import "./strategy.css";

const services = [
  { title: "Content Production" },
  { title: "Content Marketing" },
  { title: "Tailored Content Creation & Marketing" },
  { title: "Awareness, Engagement& Retention" },
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
function strategy() {
  return (
    <div className="main-uiux">
      <div className="uiux">
        <div className="text-section">
          <h1 className="title">
            <span className="highlight">App Development</span>
          </h1>
          <p className="subtitle">
            Empower your brand with tailored mobile and web app solutions. 
            Enhance user engagement, drive retention, and boost sales through 
            innovative app design and development strategies.
          </p>
          <Link to="/contact">
            <button style={{ cursor: 'pointer' }} className="contact-button">Get in Touch</button>
          </Link>
        </div>
        <div className="image-section">
          <div className="ui-img">
            <div className="img-strategy"></div>
          </div>
        </div>
      </div>
      <div className="offer">
        <h1>What are we offering</h1>
        <div className="offering-container">
          {services.map((service, index) => (
            <div key={index} className="service-box">
              <p>{service.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text">
        <div className="text-containter-web">
          <h2>Our Strengths</h2>
          <ul>
            <li>Served 150+ clients globally.</li>
            <li>
              Our team includes Google-certified professionals.
            </li>
            <li>Our precise Content Marketing solutions are budget-friendly.</li>
            <li>
              Our solutions are industry standard compliant, which makes us trustworthy & credible.
            </li>
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

export default strategy;
