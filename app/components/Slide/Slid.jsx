"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, History } from "swiper/modules";

import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slide.css";

// import required modules

import { motion } from "framer-motion";
import Image from "next/image";
import one from "../../../public/1.jpg";
import two from "../../../public/2.jpg";
import three from "../../../public/3.jpg";
import fore from "../../../public/4.jpg";
import five from "../../../public/5.jpg";
import six from "../../../public/6.jpg";
import seven from "../../../public/7.jpg";
function Line() {
  return (
    <div className=" font-fa h-[40vh] my-10  mx-10">
      <Swiper
        style={{
          "--swiper-navigation-color": "#666",
        }}
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        history={{
          key: "slide",
        }}
        breakpoints={{
          200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          900: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1100: {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          1300: {
            slidesPerView: 7,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, History]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#ddccfe]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={seven} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#fecce1]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={six} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#ccdcfe]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={five} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#d5fecc]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={fore} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#ccfef6]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={three} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#fecccc]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={two} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col">
            <div className=" bg-[#fff2d3]  rounded-full">
              <motion.div
                whileHover={{ y: -25, scale: 1.2 }}
                whileTap={{ scale: 1 }}
                className="p-5"
              >
                <Image src={one} className="rounded-2xl" />
              </motion.div>
            </div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931]  ">⬅ نمایش </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Line;
