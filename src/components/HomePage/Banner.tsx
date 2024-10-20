"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import banner1 from "../../../public/banner/banner1.webp";
import banner2 from "../../../public/banner/banner2.webp";
import banner3 from "../../../public/banner/banner3.jpg";
import banner4 from "../../../public/banner/banner4.jpg";
import banner5 from "../../../public/banner/banner5.webp";
import banner6 from "../../../public/banner/banner6.jpeg";
import banner7 from "../../../public/banner/banner7.jpg";
import banner8 from "../../../public/banner/banner8.jpg";
import Image from "next/image";



const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner8}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Empowering Farmers, Connecting Businesses
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                A platform where farmers can easily sell their products, and
                businesses can find quality goods directly from the source.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner1}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200  flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                From Farm to Your Business
              </h1>
              <p className="text-lg mt-3 font-medium w-5/6 mx-auto text-center">
                Simplifying the process for farmers to reach businesses and
                ensuring high-quality products for your needs.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner2}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Fresh Produce, Direct from the Farm
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Buy directly from farmers, ensuring fresh, high-quality products
                for your business.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner4}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Bridging the Gap Between Farmers and Buyers
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                A dedicated platform to bring together farmers and business
                buyers for seamless transactions.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner5}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200  flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Support Local Farmers, Grow Your Business
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Help farmers sell their products easily while securing premium
                products for your business.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner6}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Quality Products, Straight from the Source
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Access farm-fresh products directly from trusted farmers,
                supporting local agriculture.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner3}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Simplifying Farm-to-Business Trade
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Our platform makes it easy for farmers to sell and businesses to
                buy, fostering a strong agricultural market.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src={banner7}
              alt="Find Your Next Opportunity"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 text-gray-200 flex flex-col items-center justify-center">
              <h1 className="md:text-4xl text-3xl w-5/6 text-center font-extrabold">
                Quality Products, Straight from the Source
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Access farm-fresh products directly from trusted farmers,
                supporting local agriculture.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

Banner.propTypes = {};

export default Banner;
