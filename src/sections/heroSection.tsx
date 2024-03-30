import playStore from "../assets/playstore.png";
import apple from "../assets/apple.png";
import plantain from "../assets/plantain.png";

const HeroSection = () => {
  return (
    <section
      className="text-white py-16 h-screen md:h-screen flex items-center"
      style={{
        backgroundImage: `url(${plantain})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="p-4 flex flex-col justify-end md:justify-center h-full px-4 md:px-32 ">
        <div>
          <h1 className="text-4xl md:text-7xl font-bold text-sandy-green">
            No.1 African
          </h1>
          <h1 className=" md:text-7xl leading-10 my-8  font-bold font-mellow text-5xl text-sandy-orange">
            Food Hub
          </h1>

          <div className="mt-8 flex  md:gap-x-7">
            <img
              src={playStore}
              alt="Play Store"
              className="mb-4 h-12 md:mb-0"
            />
            <img src={apple} alt="Apple Store" className="mb-4 h-12 md:mb-0" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
