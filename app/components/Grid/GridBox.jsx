"use client";
import React from "react";
import { AiOutlineRocket } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { motion } from "framer-motion";
import { BsCollection } from "react-icons/bs";
import { BsFastForward } from "react-icons/bs";
import { BsExclamationTriangle } from "react-icons/bs";
import './grid.css'
function GridBox() {
  const style = { fontSize: "50px" };
  return (
    <div className=" gridT gap-2 grid ">
      <div className="flex-row-reverse flex hover:bg-[#f59931] rounded-2xl hover:text-white mx-2 mb-2  justify-end">
        <div className="m-2">
          <p className="font-bold"> ارسال سریع</p>
          <p>امکان تحویل اکسپرس</p>
        </div>
        <motion.div
          className="p-[7px] h-[70px] w-[54]"
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {" "}
          <AiOutlineRocket
            className="text-[#ce0600] hover:text-white"
            style={style}
          />{" "}
        </motion.div>
      </div>
      <div className="flex-row-reverse flex hover:bg-[#f59931] rounded-2xl hover:text-white mx-2 mb-2  justify-end">
        <div className="m-2">
          <p className="font-bold"> قرغه کشی فصلی</p>
          <p>هر خرید 10 امتیاز</p>
        </div>
        <motion.div
          className="p-[7px] h-[70px] w-[54]"
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {" "}
          <BsExclamationTriangle
            className="text-[#ce0600] hover:text-white"
            style={style}
          />{" "}
        </motion.div>
      </div>
      <div className="flex-row-reverse flex hover:bg-[#f59931] rounded-2xl hover:text-white mx-2 mb-2  justify-end">
        <div className="m-2">
          <p className="font-bold">ضمانت اصالت کالا</p>
          <p>اورجینال و پلمپ </p>
        </div>
        <motion.div
          className="p-[7px] h-[70px] w-[54]"
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {" "}
          <BsFastForward
            className="text-[#ce0600] hover:text-white"
            style={style}
          />{" "}
        </motion.div>
      </div>
      <div className="flex-row-reverse flex hover:bg-[#f59931] rounded-2xl hover:text-white mx-2  mb-2 justify-end">
        <div className="m-2">
          <p className="font-bold">پرداخت در محل</p>
          <p>توست کلیه کارت ها</p>
        </div>
        <motion.div
          className="p-[7px] h-[70px] w-[54]"
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {" "}
          <BsCollection
            className="text-[#ce0600] hover:text-white"
            style={style}
          />{" "}
        </motion.div>
      </div>
      <div className="flex-row-reverse flex hover:bg-[#f59931] rounded-2xl hover:text-white mx-2 mb-2  justify-end">
        <div className="m-2">
          <p className="font-bold">پشتیبانی 24 ساعته </p>
          <p>هفت روز هفته </p>
        </div>
        <motion.div
          className="p-[7px] h-[70px] w-[54]"
          whileHover={{ scale: 1.2, rotate: 20 }}
        >
          {" "}
          <AiOutlinePhone
            className="text-[#ce0600] hover:text-white"
            style={style}
          />{" "}
        </motion.div>
      </div>
    </div>
  );
}

export default GridBox;
