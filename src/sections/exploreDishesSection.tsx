import ExploreItem from "../components/exploreItem";
import Menu from "../components/menuItems";
import rolls from "../assets/roll.jpeg"; // Corrected the path to the image

const ExploreDishesSection = () => {
  const dishes = [
    "Starters",
    "Main",
    "Breakfast",
    "Chef Special",
    "Family Combo",
    "Sides",
    "Continental",
    "Soup",
    "Drinks",
  ];

  return (
    <div className="md:mx-24 mx-5">
      <p className="text-4xl font-black lg:text-7xl font-mellow mt-6 text-sandy-green text-center">
        Explore All Our <span className="text-sandy-orange">Dishes</span>
      </p>

      <div className="overflow-x-auto mt-6 scrollbar-hidden border-sandy-orange border-t-8 ">
        <div className="flex justify-between">
          {dishes.map((dish, index) => (
            <ExploreItem key={index} title={dish} />
          ))}
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-6 xl:h-104">
        <div className="w-full xl:px-6 xl:w-3/5 grid xl:gap-x-6  grid-cols-2 md:grid-cols-3 scrollbar-thin gap-4 md:gap-6 mt-6  xl:h-full xl:overflow-y-auto">
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
          <Menu />
        </div>
        <div className=" xl:w-2/5 px-16 hidden relative xl:flex justify-center items-center ">
          <img
            src={rolls}
            alt="Spring rolls"
            className=" object-cover object-center  lg:h-full w-full rounded-5xl"
          />
          <div className="absolute px-14 bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white flex justify-between items-center">
            <div className="flex-grow">
              <p className="text-xl font-semibold">Spring Roll</p>
            </div>
            <div className="flex-shrink-0">
              <p className="text-xl font-semibold">€ 5.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreDishesSection;
