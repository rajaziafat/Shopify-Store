import About from "layouts/About";
import Brands from "layouts/Brands";
import Cards from "layouts/Cards";
import FeaturesBanner from "layouts/FeaturesBanner";
import GalleryGrid from "layouts/GalleryGrid";
import Messages from "layouts/Messages";
import Navbar from "layouts/Navbar";
import Quotes from "layouts/Quotes";
import Team from "layouts/Team";
import TechStack from "layouts/TechStack";
import React from "react";
import Hero from "./layouts/Hero";

function App() {
  return (
    <div>
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <FeaturesBanner />
      <GalleryGrid />
      <Quotes />
      <About />
      <Brands />
      <Team />
      <div className="mb-12 sm:mb-16">
        <TechStack />
      </div>
      <div className="mb-12 sm:mb-28 lg:mb-40">
        <Cards />
      </div>
      <div className="mb-28">
        <Messages />
      </div>
    </div>
  );
}

export default App;
