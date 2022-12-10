import React from "react";

function HeroSliderCard({ img, subImg, subImgClassName }) {
  return (
    <div className="relative w-full h-full flex items-end pb-10 justify-center z-10 select-none pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[rgba(0,0,0,.57)]"></div>

      <img
        src={img}
        className="absolute top-0 left-0 w-full h-full object-cover -z-20"
        alt=""
      />

      <img src={subImg} className={subImgClassName} alt="" />
    </div>
  );
}

export default HeroSliderCard;
