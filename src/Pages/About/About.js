import AboutUs from "../../Components/AboutUsBanner/AboutUsBanner";
import FAQS from "../../Components/Faqs/Faqs";
import Testimonial from "../../Components/Testimonials/Testimonial";
import Footer from "../../Components/Footer/Footer";

// import fontawesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadSideVirus,
  faUserShield,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";

// import image
import Marketing from "../../Assests/Images/about-2.jpg";

const SolutionBoxes = [
  {
    icon: faHeadSideVirus,
    title: "Educated & Skilled Professionals",
    desctiption: `Our team consists of highly motivated and talented individuals who stay updated with the latest advancements. We're here to assist you promptly and efficiently whenever you need support`,
  },
  {
    icon: faUserShield,
    title: "High-Level Safety",
    desctiption: `Your safety and security are our highest priorities. As a leading digital marketing agency in the USA, we follow strict security protocols to ensure a safe online experience for all our clients.`,
  },
  {
    icon: faUserGraduate,
    title: "100% Customer Satisfaction",
    desctiption: `We are dedicated to helping you achieve your goals through digital marketing. Your success is our success, and we put our best into every project to meet and exceed your expectations.`,
  },
];

function AboutPage() {
  return (
    <>
      <AboutUs />

      {/* Get solution section start  */}

      <div className="get_solution_parent">
        <div className="container d-flex flex-column gap-5">
          <div className="solution_title">
            <h2>We Help To Get Solutions</h2>
          </div>
          <div className="solution_boxes_parent d-flex flex-column flex-lg-row gap-5 gap-lg-0">
            <div className="boxes_inner_main text-start d-flex flex-column gap-5">
              {SolutionBoxes.map((box, index) => (
                <div key={index} className="box_child">
                  <span>
                    <FontAwesomeIcon
                      icon={box.icon}
                      style={{ color: "#ff9104" }}
                    />
                  </span>
                  <h3>{box.title}</h3>
                  <p>{box.desctiption}</p>
                </div>
              ))}
            </div>
            <div className="boxes_img_main">
              <div className="marketing_img">
                <img
                  src={Marketing}
                  alt="marketing"
                  className="w-100 object-fit-cover"
                ></img>
              </div>
              <div className="marketing_box">
                <h5 style={{ color: "#ff9104" }}>Are you business</h5>
                <h4>Looking for help?</h4>
                <p>We are committed to generating Great Results</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* According Section Start  */}
      <FAQS />

      {/* Testimonial section start */}
      <Testimonial />
      {/* Footer start */}
      <Footer />
    </>
  );
}

export default AboutPage;
