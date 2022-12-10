import React from "react";

function GridCard({ img, title, className }) {
  return (
    <div
      className={`${className} h-[50vh] lg:min-h-screen lg:h-full relative overflow-hidden flex items-end justify-center lg:pb-16 z-20`}
    >
      <img
        src={img}
        className="w-full h-full object-cover -z-20 lg:absolute top-0 left-0"
        alt=""
      />

      {title && (
        <div className="absolute w-[80%] max-w-[24rem] lg:max-w-none lg:w-fit bottom-12 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:static py-2 xl:py-3 px-5 bg-yellow rounded-full text-xs sm:text-sm lg:text-base xl:text-2xl text-black font-sora text-center">
          {title}
        </div>
      )}
    </div>
  );
}

export default GridCard;
