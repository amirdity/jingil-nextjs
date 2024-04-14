import React from "react";
import Image from "next/image";
import three from "../../public/s4.jpg";
import two from "../../public/s5.jpg";
import one from "../../public/s6.jpg";
import './slide.css'
function SlideT() {
  return (
    <div className="flex flex-row justify-around mt-20 items-center ">
      <div className="relative ">
        <Image src={one} className=" rounded-3xl h-[250px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
      <div className="relative ">
        <Image src={two} className=" rounded-3xl w-[430px] h-[200px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
      <div className="relative ">
        <Image src={three} className=" rounded-3xl w-[430px] h-[200px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
    </div>
  );
}

export default SlideT;
