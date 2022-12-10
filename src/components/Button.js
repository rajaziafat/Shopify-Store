import React from "react";

function Button({ label }) {
  return (
    <button className="border-1px border-yellow py-1 lg:py-[6px] xl:py-10px px-4 lg:px-5 rounded-full uppercase text-[10px] md:text-xs xl:text-base text-yellow">
      {label}
    </button>
  );
}

export default Button;
