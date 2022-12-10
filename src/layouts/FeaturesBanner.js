import React from "react";
import Marquee from "react-fast-marquee";

function FeaturesBanner() {
  return (
    <div className="bg-yellow h-16 md:h-20 xl:h-32">
      <Marquee
        gradient={false}
        className="flex items-center h-full"
        speed={50}
        direction="right"
      >
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Shopify.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Klaviyo.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Design.{" "}
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Development.
          </h1>
        </div>
        <div className="mx-4 flex-1">
          <h1 className="font-sora text-dark-black font-semibold text-xl sm:text-2xl md:text-3xl xl:text-5xl">
            Headless.
          </h1>
        </div>
      </Marquee>
    </div>
  );
}

export default FeaturesBanner;
