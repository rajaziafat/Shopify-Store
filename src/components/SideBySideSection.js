import React from "react";

function SideBySideSection({ reverse = false, desc, img }) {
  return (
    <div className="grid md:grid-cols-2 gap-6 md:gap-12">
      {reverse && (
        <div className="row-start-2 row-end-3 md:row-span-1">
          <img src={img} className="w-full" alt="" />
        </div>
      )}

      <div className="flex items-end">
        <p
          className="font-medium font-sora text-base sm:text-2xl lg:text-3xl xl:text-5xl"
          style={{ lineHeight: 1.3 }}
        >
          {desc}
        </p>
      </div>
      {!reverse && (
        <div>
          <img src={img} className="w-full" alt="" />
        </div>
      )}
    </div>
  );
}

export default SideBySideSection;
