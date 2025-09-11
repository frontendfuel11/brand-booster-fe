import React from "react";
import WorkCard from "../common/WorkCard";
import { FaArrowRight } from "react-icons/fa6";

const HowWorks = () => {
  return (
    <div className="bg-white my-15 lg:my-30  lg:px-25 flex-col items-center justify-center w-screen">
      <div className="flex flex-col justify-center lg:w-[46.43rem] mx-auto items-center text-center mb-15 lg:gap-6">
        <h1 className="font-futura lg:font-bold lg:text-7xl text-[2rem] uppercase text-blue-900">
          how does it works ?
        </h1>
        <p className="text-textB lg:font-normal  lg:mt-4 lg:text-xl text-sm mt-2 px-2.5 lg:px-0 leading-[150%] tracking-0">
          We get you featured in the news to boost your visibility, build brand
          trust, attract new customers, and drive real business impact.
        </p>
      </div>
      <WorkCard />
      <button className="flex items-center lg:mt-0 mt-10 w-[92%] lg:w-auto justify-center py-2 lg:px-12 font-normal lg:py-5 gap-3 rounded-full mx-auto bg-gradient-to-tr from-sky to-blue text-white capitalize ">
        <span className="trecking-widest">see our packages</span>{" "}
        <FaArrowRight />
      </button>
    </div>
  );
};

export default HowWorks;
