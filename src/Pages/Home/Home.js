// import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Ellipse1 from "../../Assests/Images/Ellipse 404.png";
import Ellipse2 from "../../Assests/Images/Ellipse 405.png";
import Ellipse3 from "../../Assests/Images/Ellipse 406.png";
import Ellipse4 from "../../Assests/Images/Ellipse 407.png";
import Ellipse5 from "../../Assests/Images/Ellipse 408.png";
import Ellipse6 from "../../Assests/Images/Star 1.png";
import Ellipse7 from "../../Assests/Images/Group 3.png";

import AboutUs from "../../Components/AboutUsBanner/AboutUsBanner";
import ServiceSection from "../../Components/Services/ServicesCard";
import ProjectTab from "../../Components/Projects/ProjectTab";
// import LogoSlide from "../../Components/Projects/LogoSlider";
import Testimonial from "../../Components/Testimonials/Testimonial";
import Footer from "../../Components/Footer/Footer";
import PricingPlan from "../../Components/PricingPlans/PricingPlan";

function HomePage() {
  return (
    // Banner section start
    <>
      <div className="banner">
        <div className="container">
          <div className="banner-content text-start">
            <h1 className="text-white m-0">
              Creative Digital <br></br>Marketing Agency
            </h1>
            <p className="text-white my-4">
              Driving growth with tailored digital strategies and impactful
              design, we empower your brand to stand out in the digital
              landscape, connecting with audiences and maximizing engagement to
              fuel long-term success and visibility.
            </p>
            <div className="banner-btn d-flex align-items-center">
              <NavLink href="#" className="bttnn">
                Request Our Services
              </NavLink>
              <NavLink href="#" className="bttnn" id="bttnn-2">
                Get in Touch Now!
              </NavLink>
            </div>
          </div>
          <img
            style={{
              width: "100px",
              right: 0,
              top: "200px",
              position: "absolute",
            }}
            src={Ellipse7}
            alt=""
          />
          <img
            style={{
              width: "60px",
              left: 0,
              bottom: "150px",
              position: "absolute",
            }}
            src={Ellipse6}
            alt=""
          />
          <img
            className="ball ball_1"
            style={{
              width: "30px",
              right: "70px",
              top: "200px",
              position: "absolute",
            }}
            src={Ellipse2}
            alt=""
          />
          <img
            className="ball ball_2"
            style={{
              width: "30px",
              right: "200px",
              top: "80px",
              position: "absolute",
            }}
            src={Ellipse3}
            alt=""
          />
          <img
            className="ball ball_3"
            style={{
              width: "30px",
              left: "200px",
              top: "130px",
              position: "absolute",
            }}
            src={Ellipse4}
            alt=""
          />
          <img
            className="ball ball_4"
            style={{
              width: "30px",
              left: "60px",
              top: "300px",
              position: "absolute",
            }}
            src={Ellipse1}
            alt=""
          />
          <img
            className="ball ball_5"
            style={{
              width: "30px",
              left: "600px",
              bottom: "200px",
              position: "absolute",
            }}
            src={Ellipse5}
            alt=""
          />
        </div>
      </div>

      {/* Marquee section start  */}

      <div className="marquee1">
        <div className="marquee-content ">
          <h4>WEB DESIGNING</h4>
          <h4>WEB DEVELOPEMENT</h4>
          <h4>DIGITAL MARKETING</h4>
          <h4>ECOMMERCE</h4>
        </div>
      </div>
      <div className="marquee2">
        <div className="marquee-content marquee-content2">
          <h4>WEB DESIGNING</h4>
          <h4>WEB DEVELOPEMENT</h4>
          <h4>DIGITAL MARKETING</h4>
          <h4>ECOMMERCE</h4>
        </div>
      </div>

      <AboutUs />
      <ServiceSection />
      <ProjectTab />
      {/* <LogoSlide /> */}
      <PricingPlan />
      <Testimonial />
      <Footer />

    </>
  );
}

export default HomePage;
