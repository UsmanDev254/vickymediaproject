import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPhone } from "@fortawesome/free-solid-svg-icons";

function PricingPlan() {
  const [activeTab, setActiveTab] = useState(0);
  const [currency, setCurrency] = useState("USD");

  // Conversion rates (You can adjust these rates as per real-time rates)
  const conversionRates = {
    USD: 1,
    PKR: 300, // Example conversion rate (1 USD = 300 PKR)
    AED: 3.67, // Example conversion rate (1 USD = 3.67 AED)
  };

  // Define Tab Titles
  const TabTitle = [
    "Logo Design",
    "Branding",
    "Web Design & Develop",
    "E-commerce",
    "SEO",
    "Social Media Marketing",
  ];

  // Define the pricing content for each tab
  const pricingContent = [
    {
      title: "Logo",
      price: 5.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "3 Logo Design Concepts",
        "3 Revisions",
        "Free Color Options",
        "Free Grayscale Format",
        "6 To 24 Hours TAT",
      ],
    },
    {
      title: "Branding",
      price: 7.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "5 Branding Concepts",
        "5 Revisions",
        "Free Color Options",
        "Free Grayscale Format",
        "24 To 48 Hours TAT",
      ],
    },
    {
      title: "Web",
      price: 10.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "Responsive Web",
        "SEO Optimization",
        "User-Friendly Interface",
        "Fast Load Time",
        "Support for Mobile & Desktop",
      ],
    },
    {
      title: "E-commerce",
      price: 15.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "E-commerce Setup",
        "Product Management",
        "Payment Gateway Integration",
        "Order Management",
        "24/7 Support",
      ],
    },
    {
      title: "SEO",
      price: 8.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "Keyword Research",
        "On-Page SEO Optimization",
        "Link Building",
        "SEO Audits",
        "Rank Tracking",
      ],
    },
    {
      title: "Marketing",
      price: 6.00,
      description: "Lorem ipsum dolor sit amet.",
      features: [
        "Social Media Strategy",
        "Content Creation",
        "Audience Engagement",
        "Ad Campaigns",
        "Analytics & Reporting",
      ],
    },
    {
        title: "SEO",
        price: 8.00,
        description: "Lorem ipsum dolor sit amet.",
        features: [
          "Keyword Research",
          "On-Page SEO Optimization",
          "Link Building",
          "SEO Audits",
          "Rank Tracking",
        ],
      },
      {
        title: "Web",
        price: 10.00,
        description: "Lorem ipsum dolor sit amet.",
        features: [
          "Responsive Web Design",
          "SEO Optimization",
          "User-Friendly Interface",
          "Fast Load Time",
          "Support for Mobile & Desktop",
        ],
      },
  ];

  // Get the content for the selected tab
  const activeContent = pricingContent.slice(activeTab, activeTab + 3); // Show first 3 by default

  // Function to convert price based on selected currency
  const convertPrice = (price) => {
    return (price * conversionRates[currency]).toFixed(2);
  };

  return (
    <>
      <div className="Pricing_Tab py-3 py-md-5 mt-2 mt-md-5 mb-5 px-md-0">
        <div className="Pricing_Title container d-flex flex-column justify-content-center align-items-center">
          <h2 className="section-title">Our Prices</h2>
          <h3 className="section-subtitle text-white w-75 my-0 my-md-3">
            All Pricing Plans
          </h3>
        </div>
        <div className="currency-selector my-3 text-center text-md-start container">
          <label htmlFor="currency" className="text-white fw-bolder mx-3">
            Choose Currency:
          </label>
          <select
            id="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">USD</option>
            <option value="PKR">PKR</option>
            <option value="AED">AED</option>
          </select>
        </div>
        <div id="tabs" className="container">
          <div className="pricing_tabs mt-2 mt-md-3 mb-2 mb-md-5 px-0">
            {TabTitle.map((tab, index) => (
              <button
                key={index}
                className={activeTab === index ? "active" : null}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="container d-flex justify-content-between flex-wrap align-item-center col-12">
          {/* Always show the first 3 pricing cards */}
          {activeContent.map((content, index) => (
            <div
              key={index}
              className="col-12 col-md-4 px-2 images logos web ecommerce"
            >
              <div className="price-card d-flex flex-column gap-3">
                <div className="pricing_plan_header text-start">
                  <h4 className="fw-bold m-0 fs-4">{content.title}</h4>
                  <h2 className="current-price m-0">
                    {currency} {convertPrice(content.price)}
                  </h2>
                  <p>{content.description}</p>
                </div>
                <div className="plan_list text-start">
                  <ul className="m-0 p-0">
                    {content.features.map((feature, idx) => (
                      <li key={idx} className="fw-medium py-1">
                        <FontAwesomeIcon icon={faCheck} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="delivery_content d-flex flex-column justify-content-center align-items-center gap-3">
                  <p className="chat_now">For Rush Delivery Chat Now</p>
                  <NavLink to="/pricing" className="price-bttn">
                    ORDER NOW
                  </NavLink>
                  <span className="text-center d-block">
                    <FontAwesomeIcon icon={faPhone} />
                    +00 000 0000
                  </span>
                </div>
                <div className="strip">{content.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default PricingPlan;
