import { Link } from "react-router-dom";
import "./uiux.css";

const services = [
  { title: "Information Architecture" },
  { title: "Design System" },
  { title: "Flow Maps" },
  { title: "Low-Fidelity & High-Fidelity Wireframes" },
];

const workservices = [
  {
    title: "Product Research & Strategy",
    description: "We begin our journey by analyzing your business objectives and end-user requirements to create a draft of Low-Fidelity Wireframes."
  },
  {
    title: "Product Conceptualization",
    description: "Succeeding the approval of the Low-Fidelity Wireframes, our Design Thinking team creates High-Fidelity Wireframes for your review and feedback."
  },
  {
    title: "Development",
    description: "We use Agile methodology to collaborate and iterate on the product design and development until we achieve flawless UX/UI functionality and experience."
  }
];


function uiux() {
  return (
    <div className="main-uiux">
      <div className="uiux">
        <div className="text-section">
          <h1 className="title">
            <span className="highlight">UI/UX Designing</span>
          </h1>
          <p className="subtitle">
            Launch Iconic Brands at the Intersection of Creativity and
            Technology!!!
          </p>
          <Link to="/contact">
            <button  style={{cursor: 'pointer'}} className="contact-button">Get in Touch</button>
          </Link>
        </div>
        <div className="image-section">
          <div className="ui-img">
            <div className="img"></div>
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
        <div className="text-containter">
          <h2>Our Strengths</h2>
          <ul>
            <li>Profile audience and create user stories at an early stage.</li>
            <li>
              Analyze and draft the complexity of the project and time frame
              before brainstorming with the customer.
            </li>
            <li>Focus on the product goal and design, simultaneously.</li>
            <li>
              Our Design Thinking team works in collaboration with the web
              development team to build and deliver projects, promptly.
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

export default uiux;
