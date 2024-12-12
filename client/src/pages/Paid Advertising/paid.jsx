import { Link } from "react-router-dom";
import "./paid.css";

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
function paid() {
  return (
    <div className="main-uiux">
      <div className="uiux">
        <div className="text-section">
          <h1 className="title">
            <span className="highlight">Paid Advertising</span>
          </h1>
          <p className="subtitle">
            Build, Grow, and Boost your business revenue by focusing on core
            strategy — attract, convert, and retain customers forever!!!
          </p>
          <Link to="/contact">
            <button style={{ cursor: 'pointer' }} className="contact-button">Get in Touch</button>
          </Link>
        </div>
        <div className="image-section">
          <div className="ui-img">
            <div className="img-paid"></div>
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
            <li>
              We evaluate your business goals and past performance to design a
              tailored strategy.
            </li>
            <li>
              We deliver a delightful customer experience with tailored digital
              marketing solutions.
            </li>
            <li>
              With diverse skills and expertise, we have assisted global and
              domestic brands to gain recognition, improve their demand
              generation funnel, and boost their revenue.
            </li>
            <li>
              We have delivered 150+ successful brands in a short time, by
              designing a focused and transparent growth strategy and with
              prompt project delivery.
            </li>
            <li>
              We value and nurture our partnerships with dedicated customer
              support available at each stage of the project and after delivery,
              too.
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

export default paid;
