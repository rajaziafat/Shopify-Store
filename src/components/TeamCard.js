import React from "react";
import Button from "./Button";

function TeamCard() {
  return (
    <div className="flex flex-col items-center relative">
      {" "}
      <img src="images/member-1.png" className="max-w-[62px]  mb-5" alt="" />
      <p className="font-JetBrainsMono text-center text-yellow text-lg md:text-xl xl:text-2xl mb-4 md:mb-6">
        Simon Rewadi - Slyletica
      </p>
      <p
        className="font-JetBrainsMono text-center text-xs sm:text-base lg:text-xl xl:text-2xl text-white opacity-80 mb-12"
        style={{ lineHeight: 1.6 }}
      >
        Ten Sq have been a vital partner to the success of our digital projects,
        and the digital projects of our clients. Delivering high quality,
        thoughtful, and scalable solutions!
      </p>
      <Button label="start a project" />
    </div>
  );
}

export default TeamCard;
