import { useState } from "react";

function BrandingSlider() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="Project_Tab container mt-2 mt-md-5">
      <div class="Project_Title">
        <h2 class="section-title">Our Services</h2>
        <h3 class="section-subtitle">
          Empowering Brands with Cutting-Edge Digital Solutions
        </h3>
      </div>
      <div id="tabs">
        <menu>
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
          <button
            className={activeTab === 3 ? "active" : null}
            onClick={() => setActiveTab(3)}
          >
            Social Media Marketing
          </button>
        </menu>
        <div id="tab-content"></div>
      </div>
    </div>
  );
}

export default BrandingSlider;
