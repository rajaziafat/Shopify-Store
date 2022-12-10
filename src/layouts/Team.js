import TeamCard from "components/TeamCard";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Team() {
  return (
    <div className="py-16 sm:py-24 xl:py-32 relative z-10">
      <div className="container">
        {/* max-w-[1018px] */}
        <div className=" w-full mx-auto z-10 relative">
          <img
            src="images/quote.png"
            className="absolute bottom-[80%] md:bottom-[50%] right-[70%] -z-20 opacity-20 w-[28%] md:w-[20%] xl:w-[30%] rotate-180 pointer-events-none select-none"
            alt=""
          />
          <img
            src="images/quote.png"
            className="absolute top-[80%] md:top-[50%] left-[70%] -z-20 opacity-20 w-[28%] md:w-[20%] xl:w-[30%] pointer-events-none select-none"
            alt=""
          />

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".team-slider",
              clickable: true,
              type: "bullets",
              bulletElement: "div",
              bulletClass: "team-bullet",
              bulletActiveClass: "team-bullet-active",
              renderBullet: (index, className) => {
                return `<div  class=${className}></div>`;
              },
            }}
            className="team-slider-wrapper"
          >
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
            <SwiperSlide>
              <TeamCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="sm:h-[80%] sm:max-h-[400px] w-[76%] sm:w-full -z-20 team-slider absolute top-[92%] sm:top-1/2 left-1/2 sm:left-0 -translate-x-1/2 sm:translate-x-0 sm:px-[4%] sm:-translate-y-1/2 sm:grid sm:grid-cols-[3px_3px] sm:justify-between sm:gap-6 flex justify-center items-center space-x-4 sm:space-x-0"></div>
    </div>
  );
}

export default Team;
