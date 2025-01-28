// import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Ellipse1 from "../../Assests/Images/Ellipse 404.png";
import Ellipse2 from "../../Assests/Images/Ellipse 405.png";
import Ellipse3 from "../../Assests/Images/Ellipse 406.png";
import Ellipse4 from "../../Assests/Images/Ellipse 407.png";
import Ellipse5 from "../../Assests/Images/Ellipse 408.png";
import Ellipse6 from "../../Assests/Images/Star 1.png";
import Ellipse7 from "../../Assests/Images/Group 3.png";
import about1 from "../../Assests/Images/Frame.png";
import about2 from "../../Assests/Images/Frame (1).png";
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

      {/* about us section */}

      <div className="abt">
        <div className="container">
          {/* Title Section */}
          <div className="abt-title text-center text-white">
            <h2 className="m-0">Break the Barriers!</h2>
            <h3 className="m-0">Build the Future with Us...</h3>
          </div>

          {/* Content Section */}
          <div className="row justify-content-center my-md-5 my-2">
            <div className="col-lg-2">
              <div className="abt-content text-white">
                <h3 className="m-0 about_title">About Us</h3>
              </div>
            </div>
            <div className="col-lg-10">
              <div className="abt-content">
                <p className="py-4 m-0 text-white">
                  We specialize in innovative digital marketing solutions that
                  help businesses grow online. From website design to SEO,
                  social media, and more, we create tailored strategies that
                  deliver measurable results. Partner with us to elevate your
                  brand and achieve success in the digital world.
                </p>
              </div>
            </div>
            {/* Images */}
            <img className="img-1" src={about1} alt="Frame 1" />
            <img className="img-2" src={about2} alt="Frame 2" />
          </div>

          {/* Counter Section */}
          <div className="row">
            <div className="col-md-3 col-6">
              <div className="abt-counter text-center">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <h4 className="text-white m-0">0</h4>
                  <strong className="text-white">+</strong>
                </div>
                <h6 className="text-white m-0">Satisfied Client</h6>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="abt-counter text-center">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <h4 className="text-white m-0">0</h4>
                  <strong className="text-white">+</strong>
                </div>
                <h6 className="text-white m-0">Projects</h6>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="abt-counter text-center">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <h4 className="text-white m-0">0</h4>
                  <strong className="text-white">+</strong>
                </div>
                <h6 className="text-white m-0">Service Hours</h6>
              </div>
            </div>
            <div className="col-md-3 col-6">
              <div className="abt-counter text-center">
                <div className="d-flex align-items-center justify-content-center mb-2">
                  <h4 className="text-white m-0">0</h4>
                  <strong className="text-white">+</strong>
                </div>
                <h6 className="text-white m-0">Support Available</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      {/* Services card html */}

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
