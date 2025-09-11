import React from "react";
import magnifier from "../../asset/icons/magnifier.png";
import pen from "../../asset/icons/pen.png";
import support from "../../asset/icons/support.png";
import trust from "../../asset/icons/trust.png";
import report from "../../asset/icons/report.png";
import verified from "../../asset/icons/verified.png";
import Image from "next/image";

const Data = [
  {
    img: magnifier,
    heading: "seo Experts",
    subtext: "Our stories often outrank your competition.",
  },
  {
    img: pen,
    heading: "experienced writers",
    subtext: "We write news stories that drive interest and sales.",
  },
  {
    img: support,
    heading: "helpful support",
    subtext: "50+ Support Guides and Live Chat support.",
  },
  {
    img: trust,
    heading: "'as seen on ' trust badge",
    subtext: "Build trust and credibility on your website.",
  },
  {
    img: verified,
    heading: "verified outlets",
    subtext:
      "News sites are verified by social media, SEO stats & FCC registration.",
  },
  {
    img: report,
    heading: "industry-leading reports",
    subtext:
      "News sites are verified by social media, SEO stats & FCC registration.",
  },
];

const WhyUseCard = () => {
  return (
    <div className="lg:mt-11  flex flex-wrap  gap-6 justify-center px-[2%] ">
      {Data.map((item, index) => {
        return (
          <div
            className="lg:w-[28%] w-[96%]  h-auto bg-[#f5f5f5] lg:px-7 lg:py-7 p-3  rounded-2xl lg:space-y-7.5 space-y-6 "
            key={index}
          >
            <div className=" lg:h-11 h-9 w-auto">
              <Image src={item.img} alt="" className="h-full w-full"
              style={{height:'50px', width:'auto'}} />
            </div>
            <div className="space-y-3">
              <h3 className="lg:text-4xl text-xl font-futura font-bold uppercase text-blue-900 ">
                {item.heading}
              </h3>
              <p className="lg:text-lg text-sm text-textB ">{item.subtext}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default WhyUseCard;
