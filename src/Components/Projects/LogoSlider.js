// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css/autoplay"; // Import Autoplay styles

// Import Swiper styles
import "swiper/css";

// Import images
import LogoDesign1 from "../../Assests/Images/logo-1.webp";
import LogoDesign2 from "../../Assests/Images/logo-2.webp";
import LogoDesign3 from "../../Assests/Images/logo-3.webp";
import LogoDesign4 from "../../Assests/Images/logo-4.webp";
import LogoDesign5 from "../../Assests/Images/logo-5.webp";
import LogoDesign6 from "../../Assests/Images/logo-6.webp";
import LogoDesign7 from "../../Assests/Images/logo-1.webp";
import LogoDesign8 from "../../Assests/Images/logo-2.webp";
import LogoDesign9 from "../../Assests/Images/logo-3.webp";
import LogoDesign10 from "../../Assests/Images/logo-4.webp";



function LogoSlide() {
  // Array of images grouped in sets of 3
  const slidesContent = [
    [LogoDesign1, LogoDesign2, LogoDesign3],
    [LogoDesign4, LogoDesign5, LogoDesign6],
    [LogoDesign7, LogoDesign8, LogoDesign9],
    [LogoDesign10, LogoDesign1, LogoDesign2],
    [LogoDesign4, LogoDesign5, LogoDesign6],
  ];

  return (
    <div className="container mt-2 mt-md-5">
      <Swiper
        slidesPerView={4} // Number of slides visible at once
        spaceBetween={20} // Space between slides
        loop={true}
        autoplay={{
          delay: 0, // Continuous autoplay
          disableOnInteraction: false,
        }}
        speed={2000} // Slide speed
        modules={[Autoplay]}
        className="mySwiper"
      >
        {slidesContent.map((images, index) => (
          <SwiperSlide key={`slide-${index}`} className="slide">
            {images.map((img, imgIndex) => (
              <div className="image-block" key={`img-${imgIndex}`}>
                <img className="w-100" src={img} alt={`logo-${imgIndex}`} />
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LogoSlide;
