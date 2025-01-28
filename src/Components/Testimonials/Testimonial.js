import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css";

import Vector1 from "../../Assests/Images/vecter-man.jpeg";
import Vector2 from "../../Assests/Images/avatar2.webp";

// Font awesome icon import

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons"; // Import the specific icon

function Testimonial() {
  const TestimonialContent = [
    {
      image: Vector1,
      name: "John Devid",
      review:
        "Fast and friendly service, easy to communicate with and delivered an amazing logo and website for our new company that exceeded our expectations!",
    },
    {
      image: Vector2,
      name: "Thresa",
      review:
        "Vicky Media Solutions was able to turn around a project quickly & professionally. I enjoyed the experience and will definitely with them again!",
    },
    {
      image: Vector1,
      name: "Asim Umar",
      review:
        "This was a very good experience. Vicky Media & their team did a fantastic job answering my questions & make sure I was happy with the end result. I highly recommend.",
    },
    {
      image: Vector2,
      name: "Shahid Mehmood",
      review:
        "I’m really impressed with the mobile app development services! The team delivered a high-quality app on time, and their attention to detail exceeded my expectations.",
    },
  ];

  return (
    <section className="testimonial pt-3 pt-md-5 mb-3 mb-md-5">
      <div className="container">
        <div className="Project_Title">
          <h2 className="section-title">Testimonial</h2>
          <h3 className="section-subtitle">Success Stories From Clients</h3>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0, // Adjusted for readability
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="mySwiper2 pt-2 pt-md-4"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {/* <div className="Testimonmial_parent"> */}
            {TestimonialContent.map((test, index) => (
              <SwiperSlide key={index} className="Testinomial_Content_Main">
                <div className="testimonial_header">
                  <div className="testimonial_img col-3">
                    <img src={test.image}></img>
                  </div>
                  <div className="avatar_name col-9 text-start px-3">
                    <h4>{test.name}</h4>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                  </div>
                </div>
                <div className="testimonail_review">{test.review}</div>
              </SwiperSlide>
            ))}
          {/* </div> */}
        </Swiper>


        {/* Reverse Slider Start............. */}

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0, // Adjusted for readability
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={2000}
          modules={[Autoplay]}
          className="mySwiper2 pt-2 pt-md-4"
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
            1200: { slidesPerView: 3, spaceBetween: 30 },
          }}
        >
          {/* <div className="Testimonmial_parent"> */}
            {TestimonialContent.map((test, index) => (
              <SwiperSlide key={index} className="Testinomial_Content_Main">
                <div className="testimonial_header">
                  <div className="testimonial_img col-3">
                    <img src={test.image}></img>
                  </div>
                  <div className="avatar_name col-9 text-start px-3">
                    <h4>{test.name}</h4>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ color: "#e5bc2a" }}
                    />
                  </div>
                </div>
                <div className="testimonail_review">{test.review}</div>
              </SwiperSlide>
            ))}
          {/* </div> */}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonial;
