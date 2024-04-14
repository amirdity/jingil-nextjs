import React from "react";
import Image from "next/image";
import three from "../../public/s1.jpg";
import two from "../../public/s2.jpg";
import one from "../../public/s3.jpg";

function Slide() {
  return (
    <div className="flex flex-row justify-around">
      <div className="relative container">
        <Image src={one} className=" rounded-3xl h-[200px]" />
        <div className="bottom-right absolute bg-purple-700 botton-[-5px] w-[430px] rounded-b-3xl h-[50px] text-center text-white text-lg font-bold">
          تراول ماگ
        </div>
      </div>
      <div className="relative container mx-5">
        <Image src={two} className=" rounded-3xl w-[430px] h-[200px]" />
        <div className="bottom-right absolute bg-purple-700 botton-[-5px] w-[430px] rounded-b-3xl h-[50px] text-center text-white text-lg font-bold">
          تراول ماگ
        </div>
      </div>
      <div className="relative container">
        <Image src={three} className=" rounded-3xl w-[430px] h-[250px]" />
        <div className="bottom-right absolute bg-purple-700 botton-[-5px] w-[430px] rounded-b-3xl h-[50px] text-center text-white text-lg font-bold">
          تراول ماگ
        </div>
      </div>
    </div>
  );
}

export default Slide;
