import React from "react";
import { FaArrowDown } from "react-icons/fa";

interface ExploreItemProps {
  title: string;
}

const ExploreItem: React.FC<ExploreItemProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center text-white py-3 mx-1 px-2 ">
      <FaArrowDown className="md:text-2xl text-base mb-2" />
      <p className=" lg:text-2xl text-nowrap my-1">{title}</p>
    </div>
  );
};

export default ExploreItem;
