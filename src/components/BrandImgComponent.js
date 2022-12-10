import React from "react";

function BrandImgComponent({
  img,
  imgClassName = "w-full h-full",
  imgScale = 1,
}) {
  return (
    <div className="aspect-square flex items-center justify-center relative">
      <img
        src={img}
        alt=""
        className={`object-contain ${imgClassName}`}
        style={{ transform: `scale(${imgScale})` }}
      />
    </div>
  );
}

export default BrandImgComponent;
