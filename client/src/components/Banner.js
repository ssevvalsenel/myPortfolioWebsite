import React from "react";

//components
import BText from "./BannerComp/BText";
import BImg from "./BannerComp/BImg";

const Banner = () => {
  return (
    <section
      className="min-h-[86vh] lg:min-h-[78vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12 ">
          {/* text */}
          <BText />
          {/* image */}
          <BImg/>
        </div>
      </div>
    </section>
  );
};

export default Banner;
