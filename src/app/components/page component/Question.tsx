import React from "react";
import Questionboard from "../common/Questionboard";

const Question = () => {
  return (
    <div className="bg-purple-50  w-full flex flex-col items-center  lg:py-24 py-10 lg:px-20 px-3">
      <div className="text-center space-y-2">
        <h1 className="lg:text-[4rem] text-3xl font-extrabold font-futura tracking-[-2%]  uppercase text-blue-900">
          frequently asked questions
        </h1>
        <p className="lg:text-lg text-sm text-textB ">
          Benefit from the readership and authority our partnered news sites
          have built over many years. <br /> Our growing list of news sites
          ranks high on Google, delivering you quality readers and clicks.
        </p>
      </div>
      <Questionboard/>
    </div>
  );
};

export default Question;
