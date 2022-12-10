import Button from "components/Button";
import React from "react";

function About() {
  return (
    <div className="py-12 sm:py-16 md:py-24 xl:py-32">
      <div className="container">
        <h1 className="text-base md:text-lg xl:text-2xl text-yellow font-JetBrainsMono uppercase mb-5 xl:mb-7 text-center">
          MELBOURNE SHOPIFY DESIGN AND DEVELOPMENT AGENCY
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg xl:text-2xl text-white font-JetBrainsMono text-center max-w-[64rem] w-full mx-auto opacity-80 mb-7"
          style={{ lineHeight: 1.4 }}
        >
          Your Shopify store should be unique as your brand. Whether you’re in
          the market for new a store, or some extra oomph for an existing one,
          we’re here for you. We’re an Australian-based agency that works with
          Shopify on a daily basis, so you know you’re in good hands.
        </p>

        <div className="flex justify-center">
          <Button label="start a project" />
        </div>
      </div>
    </div>
  );
}

export default About;
