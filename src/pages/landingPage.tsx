import DiscountSection from "../sections/discountSection";
import ExploreDishesSection from "../sections/exploreDishesSection";
import HeroSection from "../sections/heroSection";
import Navbar from "../sections/navbar";
import SandyService from "../sections/sandyService";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <DiscountSection />
      <ExploreDishesSection />
      <SandyService />
    </div>
  );
};

export default LandingPage;
