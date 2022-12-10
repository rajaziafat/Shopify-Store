import React from "react";
import Marquee from "react-fast-marquee";

function Quotes() {
  return (
    <div className="bg-yellow h-16 md:h-20 xl:h-32">
      <Marquee
        gradient={false}
        className="flex items-center h-full"
        speed={50}
        direction="left"
      >
        <h1 className="px-8 font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          We do one thing,{" "}
        </h1>

        <h1 className="px-8 font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          and we do it well,
        </h1>

        <h1 className="px-8 font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
          {" "}
          we create exceptional websites that sell.
        </h1>
      </Marquee>
    </div>
  );
}

export default Quotes;
