import React from "react";
import Image from "next/image";
import muge from "../../../public/white-mugs.webp";
import "./mainBaner.css";
function MainBaner() {
  return (
    <div className=" font-fa flex items-center justify-around text-center gap-x-10 mx-5 rounded-xl banner pt-[30px] mt-[30px] flex-col-reverse lg:flex-row h-[500px]">
      {/**IMAGE */}
      <div className="flex  content-center">
        <Image src={muge} className="" />
      </div>
      {/**TEXT */}
      <div className="lg:text-right mx-[100px]">
        <p className=" text-[18px] text-white m-2">ماگ</p>
        <p className="text-3xl text-white text-[26px] m-2">جینگیل پینگیل</p>
        <p className="text-3xl text-[15px] text-white m-2">
          {" "}
          این فرصت رو از دست نده
        </p>
        <button className=" m-2 border-solid border-2 border-white text-lg text-white hover:bg-[#0e2282] rounded-lg px-8 py-2">
          ⬅ مشاهده محصولات
        </button>
      </div>
    </div>
  );
}

export default MainBaner;
