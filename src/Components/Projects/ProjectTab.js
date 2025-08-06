import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css/autoplay"; // Import Autoplay styles
import "swiper/css"; // Import Swiper styles

// Import your images (as in your original code)
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

import Brand1 from "../../Assests/Images/branding-3.webp";
import Brand2 from "../../Assests/Images/branding-1.webp";
import Brand3 from "../../Assests/Images/branding-2.webp";
import Brand4 from "../../Assests/Images/branding-3.webp";
import Brand5 from "../../Assests/Images/branding-1.webp";
import Brand6 from "../../Assests/Images/branding-2.webp";
import Brand7 from "../../Assests/Images/branding-3.webp";
import Brand8 from "../../Assests/Images/branding-1.webp";
import Brand9 from "../../Assests/Images/branding-2.webp";
import Brand10 from "../../Assests/Images/branding-3.webp";

import Web1 from "../../Assests/Images/web-1.webp";
import Web2 from "../../Assests/Images/web-2.webp";
import Web3 from "../../Assests/Images/web-3.webp";
import Web4 from "../../Assests/Images/web-4.webp";
import Web5 from "../../Assests/Images/web-5.webp";
import Web6 from "../../Assests/Images/web-1.webp";
import Web7 from "../../Assests/Images/web-2.webp";
import Web8 from "../../Assests/Images/web-3.webp";
import Web9 from "../../Assests/Images/web-4.webp";
import Web10 from "../../Assests/Images/web-5.webp";

function ProjectTab() {
  const [activeTab, setActiveTab] = useState(0);

  // Group images into sets of 3 for each tab
  const TabsContent = {
    tab1: [
      [LogoDesign1, LogoDesign2, LogoDesign3],
      [LogoDesign4, LogoDesign5, LogoDesign6],
      [LogoDesign7, LogoDesign8, LogoDesign9],
      [LogoDesign10, LogoDesign1, LogoDesign2],
      [LogoDesign4, LogoDesign5, LogoDesign6],
    ],
    tab2: [
      [Brand1, Brand2, Brand3],
      [Brand4, Brand5, Brand6],
      [Brand7, Brand8, Brand9],
      [Brand10, Brand1, Brand2],
      [Brand4, Brand5, Brand6],
    ],
    tab3: [
      [Web1, Web2, Web3],
      [Web4, Web5, Web6],
      [Web7, Web8, Web9],
      [Web10, Web1, Web2],
      [Web4, Web5, Web6],
    ],
  };

  const tabKeys = Object.keys(TabsContent); // Extract tab keys (tab1, tab2, etc.)

  return (
    <div className="Project_Tab container mt-2 mt-md-5 mb-5 px-md-0">
      <div className="Project_Title">
        <h2 className="section-title">Our Projects</h2>
        <h3 className="section-subtitle">
        Crafting Unique Solutions through Passionate Design Work.
        </h3>
      </div>
      <div id="tabs">
        <menu className="mt-2 mt-md-3 mb-2 mb-md-5 px-0">
          <button
            className={activeTab === 0 ? "active" : null}
            onClick={() => setActiveTab(0)}
          >
            Logo Design
          </button>
          <button
            className={activeTab === 1 ? "active" : null}
            onClick={() => setActiveTab(1)}
          >
            Branding
          </button>
          <button
            className={activeTab === 2 ? "active" : null}
            onClick={() => setActiveTab(2)}
          >
            Website
          </button>
        </menu>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={2000}
          modules={[Autoplay]}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
            1200: { slidesPerView: 4, spaceBetween: 30 },
          }}
          className="mySwiper pt-2 pt-md-0"
        >
          {/* Reminder------> key={`group-${groupIndex}`} = key={"group-" + groupIndex} */}

          {TabsContent[tabKeys[activeTab]].map((imageGroup, groupIndex) => (
            <SwiperSlide key={`group-${groupIndex}`} className="slide">
              {imageGroup.map((img, imgIndex) => (
                <div key={`img-${imgIndex}`} className="image-block">
                  <img className="w-100" src={img} alt={`image-${imgIndex}`} />
                </div>
              ))}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProjectTab;
