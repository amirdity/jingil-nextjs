import React from "react";
import Image from "next/image";
import three from "../../../public/s4.jpg";
import two from "../../../public/s5.jpg";
import one from "../../../public/s6.jpg";

function SlideT() {
  return (
    <div className="flex flex-col lg:flex-row justify-around font-fa gap-5 m-5">
      <div className=" flex justify-center my-2">
        <div className="relative">
          <Image src={two} className="rounded-3xl object-fill " />
          <div className="absolute bg-[#f59931] right-0 left-0 flex rounded-b-3xl h-[50px]  text-white text-lg font-bold bottom-0 justify-center pt-2">
            ترول ماگ
          </div>
        </div>
      </div>
      <div className=" flex justify-center my-2">
        <div className="relative">
          <Image src={three} className="rounded-3xl object-fill " />
          <div className="absolute bg-[#f59931] right-0 left-0 flex rounded-b-3xl h-[50px]  text-white text-lg font-bold bottom-0 justify-center pt-2">
            ترول ماگ
          </div>
        </div>
      </div>
      <div className=" flex justify-center my-2">
        <div className="relative">
          <Image src={two} className="rounded-3xl object-fill " />
          <div className="absolute bg-[#f59931] right-0 left-0 flex rounded-b-3xl h-[50px]  text-white text-lg font-bold bottom-0 justify-center pt-2">
            ترول ماگ
          </div>
        </div>
      </div>
    </div>
  );
}

export default SlideT;
