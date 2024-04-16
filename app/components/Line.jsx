"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, History } from 'swiper/modules';

import 'swiper/css/navigation';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./slide1.css";

// import required modules

import { motion } from "framer-motion";
import Image from "next/image";
import one from "../../public/1.jpg";
import two from "../../public/2.jpg";
import three from "../../public/3.jpg";
import fore from "../../public/4.jpg";
import five from "../../public/5.jpg";
import six from "../../public/6.jpg";
import seven from "../../public/7.jpg";
function Line() {
  return (
    <div className=" font-fa h-[40vh] my-10 px-10">
      <Swiper
      style={{
        '--swiper-navigation-color': '#666'
        
      }}
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        
        history={{
          key: 'slide',
        }}
        
        breakpoints={{
          200: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          750: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation, History]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex flex-col ">
            <motion.div
              whileHover={{ y: -25, scale: 1.2 }}
              whileTap={{ scale: 1 }} 
              className="mb-10 rounded-3xl"
            >
              <Image src={seven} className="rounded-2xl" />
            </motion.div>

            <p className="hover:text-[#f59931] "> ماگ استیل</p>
            <p className="hover:text-[#f59931] "> نمایش ⬅</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Line;
