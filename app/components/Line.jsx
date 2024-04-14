"use client";
import React from "react";
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
    <div className="flex gap-x-5 justify-center align-middle items-center mt-10 mb-10">
      <motion.div
        className=" gap-x-10 text-center rounded-xl"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={one} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={two} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>{" "}
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={three} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>{" "}
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={fore} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>{" "}
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={five} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>{" "}
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1 }}
      >
        <Image src={six} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>{" "}
      <motion.div
        className=" gap-x-6 text-center"
        whileHover={{ y: -7, scale: 1.2 }}
        whileTap={{ scale: 1.5 }}
      >
        <Image src={seven} />
        <p>ماگ</p>
        <p> ⬅ نمایش </p>
      </motion.div>
    </div>
  );
}

export default Line;
