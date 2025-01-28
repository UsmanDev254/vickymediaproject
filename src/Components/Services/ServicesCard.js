import React from "react";
import Card1 from "../../Assests/Images/branding.png";
import Card2 from "../../Assests/Images/web-designing.png";
import Card3 from "../../Assests/Images/logo-design.png";
import Card4 from "../../Assests/Images/mobile-app.png";
import Card5 from "../../Assests/Images/ecommerce (1).png";
import Card6 from "../../Assests/Images/seo.png";

const services = [
  {
    title: "Branding",
    description:
      "We craft impactful brand identities, combining creativity and strategy to elevate your business. From logos to complete branding solutions, we ensure your brand stands out and resonates with your audience.",
    icon: Card1, // Replace with your SVG or image icon
  },
  {
    title: "Website Design & Develop",
    description:
      "Crafting impactful websites with innovative design and seamless development, we blend creativity and strategy to elevate brands, delivering digital solutions that inspire, engage, and leave a lasting impression.",
    icon: Card2,
  },
  {
    title: "Logo Design",
    description:
      "We design logos that capture your brand’s essence, creating a unique visual identity. Our team crafts memorable, impactful logos that make your business instantly recognizable and set you apart.",
    icon: Card3,
  },
  {
    title: "App Development",
    description:
      "As a full-service digital marketing agency, we craft compelling branding. From striking graphics to engaging stories, our team designs a memorable identity to make your business stand out.",
    icon: Card4,
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Transform your online business with our tailored e-commerce solutions, featuring user-friendly design, secure payment processing, and robust inventory management, ensuring a seamless shopping experience for your customers.",
    icon: Card5,
  },
  {
    title: "SEO Marketing",
    description:
      "SEO (Search Engine Optimization) is the process of enhancing a website's visibility on search engines. It involves optimizing content, improving site structure, and building backlinks to attract organic traffic.",
    icon: Card6,
  },
];

function ServiceSection() {
  return (
    <>
      <div className="services-section container">
        <h2 className="section-title">Our Services</h2>
        <h3 className="section-subtitle">
          Empowering Brands with Cutting-Edge Digital Solutions
        </h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="box_main">
              <div className="card_child_box col-md-10">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="card_icon col-md-2">
                <img src={service.icon}></img>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ServiceSection;
