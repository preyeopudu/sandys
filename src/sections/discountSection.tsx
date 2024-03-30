import { useEffect, useState } from "react";
import union from "../assets/Union.png";
import fish from "../assets/fish.png";
import amusing from "../assets/Amusing.png";
import star from "../assets/Star.png";
import emoji from "../assets/emoji.png";

const DiscountSection = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="font-sans px-8 md:px-20  py-12 md:py-28 mt-24 mx-5 md:mx-24"
      style={{
        backgroundImage: `url(${union})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center text-white w-full">
        <div className="flex flex-1 justify-center">
          <img src={fish} alt="food" />
        </div>

        <div className="flex flex-1 flex-col justify-between my-6 lg:my-0 lg:ml-6">
          <div className="flex self-start bg-black rounded-2xl p-2 md:p-3">
            <p className="text-lg md:text-xl">Today's Special Offer</p>
            <img src={amusing} alt="food" className="h-9 w-9 ml-2" />
          </div>

          <div>
            <p className="text-4xl md:text-5xl text-sandy-green font-extrabold mt-6">
              30% Discount
            </p>
            <p className="text-4xl md:text-5xl font-extrabold font-mellow mt-6 mb-1">
              Exotic Fish Plater
            </p>
            <p className="text-base md:text-xl font-normal w-full md:w-104 mb-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div
            className={`flex ${
              windowWidth < 1024 ? "flex-col" : "flex-row"
            } justify-between items-center ${
              windowWidth < 1024 ? "flex-wrap" : ""
            } lg:bg-black rounded-full mt-6 pr-4`}
          >
            <button className=" py-4 md:py-6 px-4 w-full flex-1 lg:w-auto text-lg bg-sandy-green rounded-full text-black text-center mb-6 lg:mb-0">
              Order now
            </button>
            <div className="flex-1 flex justify-center items-center">
              {[...Array(5)].map((_, index) => (
                <img
                  key={index}
                  src={star}
                  alt="star"
                  className="h-6 w-6 ml-2"
                />
              ))}
              <img src={emoji} alt="star" className="h-6 w-6 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscountSection;
