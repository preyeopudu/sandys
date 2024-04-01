import puffpuff from "../assets/puff.png";
import star from "../assets/Star.png";
import emoji from "../assets/emoji.png";

const Menu = () => {
  return (
    <div className=" h-72 px-8 lg:p-4 flex flex-col justify-between p-4 rounded-2xl lg:rounded-3xl border bg-sandy-black">
      <p className="font-sans text-2xl text-white">Spring Roll</p>

      <div className=" h-16">
        <img src={puffpuff} alt="star" className="ml-2 md:hidden w-full" />
      </div>

      <p className="font-sans text-base xl:text-2xl text-sandy-green  font-bold">
        € 0.05
      </p>

      <div className="flex justify-between items-center">
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src={star}
            alt="star"
            className="md:h-6 md:w-6 h-4 w-4"
          />
        ))}
        <img src={emoji} alt="star" className="md:h-6 md:w-6 h-4 w-4" />
      </div>

      <button className="rounded-3xl text-nowrap border border-sandy-green text-whte bg-sandy-green px-6 w-full p-6 flex items-center justify-center h-10">
        Add To Cart
      </button>
    </div>
  );
};

export default Menu;
