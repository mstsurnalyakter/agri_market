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
                Empower Your Future
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Empower yourself with the tools and opportunities needed to
                succeed in today&apos;s competitive job market.
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
                Unlock Your English Potential
              </h1>
              <p className="text-lg mt-3 font-medium w-5/6 mx-auto text-center">
                Join our platform and master English with expert guidance and
                interactive learning tools.
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
                Learn English with Expert Tutors
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Connect with certified tutors who will guide you on your journey
                to fluency.
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
                Speak English Like a Pro
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Develop the skills to speak English fluently and professionally
                in any situation.
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
                Engage, Learn, Succeed
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Engage with our resources, learn effectively, and succeed in
                mastering English.
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
                Empower Your Future
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Empower yourself with the tools and opportunities needed to
                succeed in today&apos;s competitive job market.
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
                Empower Your Communication Skills
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Enhance your ability to communicate effectively with our
                targeted language programs
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
                Empower Your Future
              </h1>
              <p className="text-lg font-medium mt-6 w-5/6 mx-auto text-center">
                Empower yourself with the tools and opportunities needed to
                succeed in today&apos;s competitive job market.
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
