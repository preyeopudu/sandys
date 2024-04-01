import DiscountSection from "../sections/discountSection";
import ExploreDishesSection from "../sections/exploreDishesSection";
import HeroSection from "../sections/heroSection";
import Navbar from "../sections/navbar";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <HeroSection />
      <DiscountSection />
      <ExploreDishesSection />
    </div>
  );
};

export default LandingPage;
