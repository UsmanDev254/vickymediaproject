import PortfolioBanner from "../../Components/PortfolioBanner/PortfolioBanner";
import ProjectTab from "../../Components/Projects/ProjectTab";
import Testimonial from "../../Components/Testimonials/Testimonial";
import FAQS from "../../Components/Faqs/Faqs";
import Footer from "../../Components/Footer/Footer";


function PortfolioPage(){
    return(
        <>
            <PortfolioBanner />
            <ProjectTab />
            <Testimonial />
            <FAQS />
            <Footer />
        </>
    );
}

export default PortfolioPage;