// src/App.js
import ServiceCard from "./ServicesCard/ServicesCard";
import "./services.css";
import Serviceitem from "./Service-item/Serviceitem";
import whatsapp from "../../assets/img/whatsapp.png";
import pen from "../../assets/img/pen.png";
import ui from "../../assets/img/uiux.png";
import web from "../../assets/img/web.png";
import dig from "../../assets/img/digital.png";
import soc from "../../assets/img/social2.png";
import con from "../../assets/img/strategy-.png";
import weui from "../../assets/img/s-ui.png";
import wedev from "../../assets/img/s-web.png";
import wedeg from "../../assets/img/s-deg.png";
import webus from "../../assets/img/w-bus.png";

const serviceitem = [
  {
    title: "UI/UX DESIGN",
    description: "",
    redirectUrl: "/uiux",
    icon: ui,
  },
  {
    title: "WEB DEVELOPMENT",
    description: "",
    redirectUrl: "/web",
    icon: web,
  },
  {
    title: "DIGITAL MARKETING",
    description: "",
    redirectUrl: "/Digital",
    icon: dig,
  },

  {
    title: "Social Media Marketing",
    description: "",
    redirectUrl: "/Social",
    icon: soc,
  },
  {
    title: "Content Strategy",
    description: "",
    redirectUrl: "/strategy",
    icon: con,
  },

];

const service = [
  {
    topic: "WE DESIGN",
    icon: weui,
    title: "UI/UX Design",
    description:
      "Launch Iconic Brands at the Intersection of Creativity and Technology.",
  },
  {
    topic: "WE DEVELOP",
    icon: wedev,
    title: "Web Development",
    description:
      "We are Creative Nerds. We Don’t Just Develop Websites, But Also Crafting a Successful Brand for You.",
  },
  {
    topic: "WE SUPPORT",
    icon: wedeg,
    title: "Digital Marketing",
    description:
      "Nurture Your Vision, Magnify Your Brand by Increasing Your Sales with Inspiring Digital Marketing Solutions.",
  },
  {
    topic: "WE CONSULT",
    icon: webus,
    title: "Business Consultancy Service",
    description: "Let’s Navigate Your Business Challenges Together.",
  },
];

const Services = () => {
  return (
    <div className="ser">
      <div className="header-ser">
        <h1>OUR SERVICES</h1>
        <div className="Rectangle-16-ser"></div>
        <h3>What We Do</h3>
        <p>
          We offer full-funnel digital marketing, web design & development
          services to help businesses gain a competitive edge.
        </p>
      </div>
      <div className="service-cards">
        {service.map((item, index) => (
          <ServiceCard
            key={index}
            topic={item.topic}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
      <div className="servicesitems">
        <h1>SERVICES WE PROVIDE</h1>
        <div className="services-container">
          {serviceitem.map((service, index) => (
            <Serviceitem key={index} {...service} />
          ))}
        </div>
        <a href="/contact">
          <button style={{ cursor: 'pointer' }} className="consult-button">Book Free Consultant</button>
        </a>
      </div>
      <div className="contact">
        <div className="callUs">
          <img src={whatsapp} alt="" />
          <h3>Call Us</h3>
          <p>Support: +91 1234567890</p>
        </div>
        <div className="img1">
        </div>
        <div className="img2">
        </div>
        <div className="writeUs">
          <img src={pen} alt="" />
          <h3>Write Us</h3>
          <p>contact.us@befog.in</p>
        </div>
      </div>
      <p className="last-text">Grow your careers at the heart of change</p>
      <a href="/contact">
        <button style={{ cursor: 'pointer' }} className="cta-button">Get in Touch</button>
      </a>
    </div>
  );
};

export default Services;
