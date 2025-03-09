import React from "react";
import { A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function ActionAnime() {
  return (
    <div>
      <div className="xl:px-20 lg:px-12 md:px-10 px-4 py-20">
        <div className="heading flex items-center gap-3 py-8">
          <div className="w-[3px] h-[30px] bg-[#ff640a]"></div>
          <h1 className="text-2xl">Action & Adventure</h1>
        </div>
        <Swiper
          modules={[A11y, Autoplay]}
          spaceBetween={50}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 1000,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            520: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/assets/img/Lookism.jpg"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/BlueLock.avif"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/Jujutsu Kaisen.jpg"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/ViralHit.png"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/Realife.jpe"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/Nina.webp"
              alt="IMG"
              className="w-full h-[465px]"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
