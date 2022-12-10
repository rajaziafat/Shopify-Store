import Button from "components/Button";
import HeroSlider from "../components/HeroSlider";

function Hero() {
  return (
    <div className="min-h-screen relative flex items-center">
      <HeroSlider />

      <div className="container relative z-[100]">
        <h1
          className="text-2xl sm:text-2xl md:text-3xl xl:text-5xl text-center font-JetBrainsMono text-white mb-5 lg:mb-7"
          style={{ lineHeight: 1.3 }}
        >
          Ecom UI/UX. Shopify Development. <br className="hidden md:block" />{" "}
          Designed to <span className="text-yellow">convert</span>. Developed to{" "}
          <span className="text-yellow">scale</span>.
        </h1>

        <p
          className="text-sm sm:text-base md:text-lg xl:text-2xl text-center font-JetBrainsMono text-white w-full max-w-[60rem] mx-auto font-light mb-7"
          style={{ lineHeight: 1.5 }}
        >
          Your Melbourne based Shopify developer is now single, yes we did it,
          we completely broke up with themes and now specalise in custom
          solutions alone.{" "}
        </p>

        <div className="flex justify-center">
          <Button label="start a project" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
