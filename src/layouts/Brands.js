import BrandImgComponent from "components/BrandImgComponent";
import React from "react";

function Brands() {
  return (
    <div className="py-14 bg-yellow">
      <div className="container">
        <h1 className="text-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-sora text-dark-black mb-10 sm:mb-12 xl:mb-20">
          We’ve assisted a few brands so far...
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-[repeat(4,7.5rem)] justify-between gap-x-20 md:gap-0 max-w-[17rem] md:max-w-[60rem] mx-auto">
          <div className="xl:space-y-6">
            <BrandImgComponent img="images/brands/1.png" />
            <BrandImgComponent img="images/brands/2.png" imgScale={1.6} />
            <BrandImgComponent img="images/brands/3.png" />
          </div>

          <div className="xl:space-y-6">
            <BrandImgComponent img="images/brands/4.png" />
            <BrandImgComponent img="images/brands/5.png" />
            <BrandImgComponent img="images/brands/6.png" />
          </div>

          <div className="xl:space-y-6">
            <BrandImgComponent img="images/brands/7.png" imgScale={0.7} />
            <BrandImgComponent img="images/brands/8.png" />
            <BrandImgComponent img="images/brands/9.png" imgScale={1.3} />
          </div>

          <div className="xl:space-y-6">
            <BrandImgComponent img="images/brands/10.png" />
            <BrandImgComponent img="images/brands/11.png" />
            <BrandImgComponent img="images/brands/12.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
