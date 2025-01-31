import PricingBanner from "../../Components/PricingPlans/PricingBanner";
import PricingPlan from "../../Components/PricingPlans/PricingPlan";
import FAQS from "../../Components/Faqs/Faqs";
import Footer from "../../Components/Footer/Footer";


function PricingPage(){
    return(
        <>
            <PricingBanner />
            <PricingPlan />
            <FAQS />
            <Footer />
        </>
    );
}

export default PricingPage;