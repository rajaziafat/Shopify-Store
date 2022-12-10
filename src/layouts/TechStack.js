import BrandImgComponent from "components/BrandImgComponent";
import React from "react";

function TechStack() {
  return (
    <div className="py-14 bg-yellow">
      <div className="container">
        <h1 className="text-center font-medium text-xl sm:text-2xl lg:text-3xl xl:text-5xl font-sora text-dark-black mb-4 sm:mb-12 xl:mb-20">
          Did someone say tech stack?
        </h1>

        <div className="grid grid-cols-[repeat(2,6rem)] sm:grid-cols-[repeat(4,6rem)] lg:grid-cols-[repeat(4,7.5rem)] justify-between max-w-[16rem] sm:max-w-[40rem] xl:max-w-[60rem] mx-auto">
          <div className="">
            <BrandImgComponent img="images/stack/1.png" imgScale={1.2} />
            <BrandImgComponent img="images/stack/2.png" />
            <BrandImgComponent img="images/stack/3.png" />
            <BrandImgComponent img="images/stack/4.png" />
          </div>

          <div className="">
            <BrandImgComponent img="images/stack/5.png" />
            <BrandImgComponent img="images/stack/6.png" />
            <BrandImgComponent img="images/stack/7.png" />
            <BrandImgComponent img="images/stack/8.png" />
          </div>

          <div className="">
            <BrandImgComponent img="images/stack/9.png" />
            <BrandImgComponent img="images/stack/10.png" />
            <BrandImgComponent img="images/stack/11.png" />
            <BrandImgComponent img="images/stack/12.png" />
          </div>

          <div className="">
            <BrandImgComponent img="images/stack/13.png" />
            <BrandImgComponent img="images/stack/14.png" />
            <BrandImgComponent img="images/stack/15.png" />
            <BrandImgComponent img="images/stack/16.png" imgScale={0.7} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TechStack;
