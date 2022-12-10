import React from "react";

function MSG({ msg, user = false }) {
  return (
    <div
      className={`py-2 sm:py-3 lg:py-4 px-6 lg:px-8 xl:py-12 xl:px-12 rounded-full relative z-20 w-fit max-w-[1128.5px] ${
        user ? "bg-[#C6C6C6] ml-auto" : "bg-yellow"
      }`}
    >
      {/* <div className="w-[140px] h-[70px] absolute bottom-0 left-[-70px] bg-yellow -z-[20]">
        <div className="absolute top-0 left-0 w-1/2 h-full rounded-br-full bg-dark-black"></div>
      </div> */}

      {/* <div className="absolute bottom-0 right-[88%] w-[120px] h-[30%] bg-yellow -z-20"></div> */}

      <h1 className="font-sora font-medium text-dark-black text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-5xl">
        {msg}
      </h1>
    </div>
  );
}

export default MSG;
