import about1 from "../../Assests/Images/Frame.png";
import about2 from "../../Assests/Images/Frame (1).png";

function PricingBanner(){
    return(
        
        <>
        {/* about us section */}

      <div className="abt">
      <div className="container">
        {/* Title Section */}
        <div className="abt-title text-center text-white">
          <h2 className="m-0">Our Pricing Plans</h2>
          <h3 className="m-0">Over 1000 Business Vouch For It...</h3>
        </div>

        {/* Content Section */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="abt-content">
              <p className="py-4 m-0 text-white">
              we specialize in innovative digital marketing solutions that help businesses grow online. From website design to SEO, social media, and more, we create tailored strategiesthat deliver measurable results Partner with us to elevate your brand andachieve success in the digital world.</p>
            </div>
          </div>
          {/* Images */}
          <img className="img-1" src={about1} alt="Frame 1" />
          <img className="img-2" src={about2} alt="Frame 2" />
        </div>
      </div>
    </div>
    </>
    );
}

export default PricingBanner;