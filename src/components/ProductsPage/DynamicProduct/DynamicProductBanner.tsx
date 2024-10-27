"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import React from "react";
import Image from "next/image";

type DynamicProductBannerProps = {
    image:string
}

const DynamicProductBanner: React.FC<DynamicProductBannerProps> = ({image}) => {
  return (
    <>
      <Swiper
      >
        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={image}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
              width={1000} height={1000}
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default DynamicProductBanner;
