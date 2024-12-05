import "./about.css";
import ServiceAbout from "./Service-About/ServiceAbout";
import own from "../../assets/img/customer-centricity_16911946.png";
import bulb from "../../assets/img/transparency_17835391.png";
import time from "../../assets/img/partnership-development_18275570.png"

const serviceabout = [
  {
    title: "Client-Centric Approach",
    description:
      "Our services are personalized to ensure customer satisfaction and achieve desired results efficiently.",
    icon:own,
  },
  {
    title: "Transparency and Trust",
    description:
      "Clear communication, ethical practices, and commitment to deadlines build strong client relationships.",
    icon:bulb,
  },
  {
    title: "Skilled Workforce",
    description:
      "Our team comprises experienced professionals dedicated to delivering excellence in every project.",
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
        <h2>A brief introduction of what we do</h2>
        <p>
          We offer full-funnel digital marketing, web design & development
          services to help businesses gain a competitive edge. We leverage
          data-driven digital marketing and UX/UI solutions to nurture customer
          journeys and enable enterprises to augment their brand reach and
          engagement while achieving growth in quality demand generation.
        </p>
        {/* <a href="https://www.linkedin.com/company/100947651/admin/dashboard/">
          <button style={{ cursor: 'pointer' }}>View Portfolio</button>
        </a> */}
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
