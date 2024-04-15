import React from "react";
import Image from "next/image";
import three from "../../public/s1.jpg";
import two from "../../public/s2.jpg";
import one from "../../public/s3.jpg";

function Slide() {
  return (
    <div className="flex flex-row justify-around font-fa">
     <div className="relative ">
        <Image src={one} className=" rounded-3xl w-[430px] h-[250px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
      <div className="relative ">
        <Image src={two} className=" rounded-3xl w-[430px] h-[250px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
      <div className="relative ">
        <Image src={three} className=" rounded-3xl w-[430px] h-[300px]" />
        <div className=" absolute bg-[#f59931]  w-full rounded-b-3xl h-[50px] text-center text-white text-lg font-bold bottom-0">
          تراول ماگ
        </div>
      </div>
    </div>
  );
}

export default Slide;
