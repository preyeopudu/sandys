import DiscountSection from "../sections/discountSection";
import HeroSection from "../sections/heroSection";
import Navbar from "../sections/navbar";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <DiscountSection />
    </div>
  );
};

export default LandingPage;
