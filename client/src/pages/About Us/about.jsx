import "./about.css";
import ServiceAbout from "./Service-About/ServiceAbout";
import own from "../../assets/img/brain.png";
import bulb from "../../assets/img/bulb-light.png";
import time from "../../assets/img/time-management.png"

const serviceabout = [
  {
    title: "Ownership",
    description:
      "We take full responsibility for our actions. We apologize for our mistakes and work with more sincerity and dedication to delight our customers.",
    icon:own,
  },
  {
    title: "Think Smarter and Bigger",
    description:
      "We constantly strive for improvement and growth. We embrace change, adopt it, and find solutions to improve ourselves.",
    icon:bulb,
  },
  {
    title: "Work Ethic",
    description:
      "We are proactive, organized, result-driven, and prompt because we expect high performance from ourselves. Consequently, we regularly invest in training to create a highly skilled and efficient talent pool.",
    icon:time,
  },
];

function About() {
  return (
    <div className="About">
      <div className="header-About">
        <h1>About Us</h1>
        <div className="Rectangle-16-About"></div>
        <p>
          BEFOG - Committed to Creating Successful Entrepreneurs and Brands!!!
        </p>
      </div>
      <div className="img-bg">
        <h1>A brief introduction of what we do</h1>
        <p>
          We offer full-funnel digital marketing, web design & development
          services to help businesses gain a competitive edge. We leverage
          data-driven digital marketing and UX/UI solutions to nurture customer
          journeys and enable enterprises to augment their brand reach and
          engagement while achieving growth in quality demand generation.
        </p>
        <a href="https://www.linkedin.com/company/100947651/admin/dashboard/">
          <button style={{ cursor: 'pointer' }}>View Portfolio</button>
        </a>
      </div>
      <h2>Why are we here?</h2>
      <div className="main-container">
        <div>
          <p>
            Launched in 2024 by a seasoned team, BEFOG is here to provide
            innovative solutions. We believe in fostering a positive environment
            that nurtures growth for entrepreneurs and brands alike.
          </p>
        </div>
        <div>
          <p>
            We specialize in designing customer-centric, data-driven, and
            growth-oriented marketing and software solutions to help businesses
            improve their brand presence and reach, achieve growth in quality
            demand generation, nurture their customer journey, improve
            conversion, sales & revenues, and gain a competitive edge.
          </p>
        </div>
      </div>
      <div className="Vision">
        <h2>Our Vision</h2>
        <p>
          We seek to create innovative yet profitable solutions for businesses
          that spell SUCCESS.
        </p>
      </div>
      <div className="choose-container">
        <h1>Why choose Befog?</h1>
        <div className="services-container-about">
          {serviceabout.map((service, index) => (
            <ServiceAbout key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
