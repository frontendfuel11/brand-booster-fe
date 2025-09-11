import React from "react";
import {PricingTable} from "../common/PricingTable";
import NavbarP from "../ui/NavbarP";

const Pricing = () => {
  const links = [
    { name: "none", to: "/limited" },
    { name: "small", to: "/popular" },
    { name: "regular", to: "/autharity" },
    { name: "long", to: "/ultimate" },
  ];
  return (
    <div className="lg:mt-21 mt-5 flex flex-col justify-center items-center py-8  ">
      <div className="text-center lg:space-y-6 space-y-2 lg:mb-10 mb-6 px-4 lg:px-0">
        <h1 className="lg:text-7xl text-[2rem] font-futura uppercase tracking-[-2%] leading-[92%] font-extrabold text-blue-900  ">
          Grow Your Brand Today
        </h1>
        <p className="lg:text-xl text-sm text-[#717680] ">
          Get featured on major news sites to drive visitors and customers to
          your website, all for a one-time payment.
        </p>
      </div>
      <div className="space-y-6 flex items-center justify-center flex-col">
        <span className="text-lg text-textD font-semibold capitalize ">writing packages</span>
        <NavbarP links={links} />
      </div>
      <PricingTable />
    </div>
  );
};

export default Pricing;
