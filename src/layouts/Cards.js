import SideBySideSection from "components/SideBySideSection";
import React from "react";

function Cards() {
  return (
    <div>
      <div className="container space-y-12 sm:space-y-16 md:space-y-24">
        <SideBySideSection
          img="images/medicins.png"
          desc="We helped Hab Shifa Australia increase subscription revenue by 200%"
        />
        <SideBySideSection
          img="images/man.png"
          desc="We helped Cody Simpson to launch his eco fashion label & scale it across Aus & the US"
          reverse={true}
        />
        <SideBySideSection
          img="images/medicins.png"
          desc="We helped Hab Shifa Australia increase subscription revenue by 200%"
        />
      </div>
    </div>
  );
}

export default Cards;
