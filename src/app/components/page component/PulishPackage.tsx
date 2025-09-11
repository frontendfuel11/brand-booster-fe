import React from "react";
import PackageRc from "../common/PackageRc";
import RestrictedTop from "../common/RestrictedTop";
import NavbarP from "../ui/NavbarP";
import Dropdown from "../ui/Dropdown";

const PulishPackage = () => {
  const links = [
    { name: "limited", to: "/limited" },
    { name: "popular", to: "/popular" },
    { name: "autharity", to: "/autharity" },
    { name: "ultimate", to: "/ultimate" },
  ];
  return (
    <div className="lg:mt-21 mt-10  bg-[#C8D0FA50] lg:py-20 py-10 flex flex-col justify-center">
      <div className=" space-y-4 pb-11">
        <h1 className="lg:text-7xl tracking-[-2%] text-3xl  font-extrabold text-blue-900 font-futura text-center uppercase ">
          publishing Packages
        </h1>
        <p className="lg:text-[1rem] text-xs text-textB capitalize leading-[150%] lg:px-0 px-7  text-center font-Inter lg:w-[47.5rem] mx-auto">
          Benefit from the readership and authority our partnered news sites
          have built over many years. Our growing list of news sites
          ranks high on Google, delivering you quality readers and clicks.
        </p>
      </div>
      <div className="lg:flex hidden">
      <NavbarP links={links} />
      </div>
      <Dropdown links={links} />
      <PackageRc/>
      <RestrictedTop/>
    </div>
  );
};

export default PulishPackage;
