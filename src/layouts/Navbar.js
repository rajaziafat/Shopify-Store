import Button from "components/Button";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import React, { useState } from "react";

function Navbar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const sidebarRef = OutsideClickDetector(() => setSidebarOpen(false));

  return (
    <div className="absolute top-0 left-0 w-full z-[200] h-16 xl:h-20 flex items-center">
      <div className="container flex items-center justify-between relative">
        <h1 className="text-2xl md:text-[30px] xl:text-[40px] font-bold text-white font-JetBrainsMono">
          100°
        </h1>

        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 w-[260px] lg:w-auto h-full lg:h-auto flex flex-col lg:flex-row lg:justify-center lg:items-center lg:space-x-12 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2 z-[300] lg:z-20 bg-dark-black lg:bg-transparent p-10 lg:p-0 space-y-4 lg:space-y-0 transition-all duration-[.3s] ${
            isSidebarOpen ? "translate-x-0" : "translate-x-[260px] "
          }`}
        >
          {/*  */}
          <div className="pb-3 block lg:hidden">
            <button className="w-4 block" onClick={() => setSidebarOpen(false)}>
              <img src="images/cross-icon.png" alt="" />
            </button>
          </div>

          <a href="/" className="text-sm lg:text-xs xl:text-base text-white">
            HOME
          </a>
          <a href="/" className="text-sm lg:text-xs xl:text-base text-white">
            WORK
          </a>
          <a href="/" className="text-sm lg:text-xs xl:text-base text-white">
            ABOUT
          </a>
          <a href="/" className="text-sm lg:text-xs xl:text-base text-white">
            CONTACT
          </a>
        </div>

        <div className="flex items-center space-x-6">
          <Button label="Enquire" />

          <button
            className="w-5 flex lg:hidden"
            onClick={() => setSidebarOpen((val) => !val)}
          >
            <img src="images/hamburger.png" alt="" />
          </button>
        </div>

        <div className={`black-screen ${isSidebarOpen && "show"}`}></div>
      </div>
    </div>
  );
}

export default Navbar;
