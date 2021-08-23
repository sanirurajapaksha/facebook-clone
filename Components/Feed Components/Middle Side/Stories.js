import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation } from "swiper/core";

SwiperCore.use([Navigation]);

function Stories() {
  return (
    <div className="flex flex-row bg-red-200 h-60 w-full justify-center items-center">
      <Swiper navigation={true} className="">
        <div className="w-20 h-20 bg-green-300">hello</div>
        <div className="w-20 h-20 bg-green-300">hello</div>
        <div className="w-20 h-20 bg-green-300">hello</div>
        <div className="w-20 h-20 bg-green-300">hello</div>
        <div className="w-20 h-20 bg-green-300">hello</div>
      </Swiper>
    </div>
  );
}

export default Stories;
