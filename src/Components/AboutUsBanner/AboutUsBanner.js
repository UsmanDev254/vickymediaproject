import about1 from "../../Assests/Images/Frame.png";
import about2 from "../../Assests/Images/Frame (1).png";

function AboutUs(){
    return(
        
        <>
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
    </>
    );
}

export default AboutUs;