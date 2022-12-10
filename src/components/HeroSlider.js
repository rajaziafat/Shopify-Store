import Marquee from "react-fast-marquee";
import HeroSliderCard from "../components/HeroSliderCard";

function HeroSlider() {
  return (
    <div className="absolute top-0 left-0 w-full min-h-full h-full ">
      <Marquee
        gradient={false}
        className="grid grid-cols-3"
        speed={50}
        style={{ minHeight: "100%" }}
      >
        <HeroSliderCard
          img="images/pink-banner.png"
          subImg="images/collagen.png"
          subImgClassName="w-[32%]"
        />
        <HeroSliderCard
          img="images/men-banner.png"
          subImg="images/prince.png"
          subImgClassName="w-[32%]"
        />
        <HeroSliderCard
          img="images/girl-banner.png"
          subImg="images/collagen.png"
          subImgClassName="w-[32%]"
        />
      </Marquee>
    </div>
  );
}

export default HeroSlider;
