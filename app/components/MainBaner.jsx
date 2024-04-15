import React from "react";
import Image from "next/image";
import muge from "../../public/white-mugs.webp";
import "./mainBaner.css";
function MainBaner() {
  return (
    <div className=" flex items-center justify-center text-center gap-x-10 mx-5 rounded-xl banner pt-[30px] mt-[30px] flex-col-reverse lg:flex-row">
      <div className="flex mx-[100px] my-[100px]">
        <Image src={muge} />
      </div>
      <div className="text-right mx-[100px]">
        <p className=" text-right text-[18px] text-white m-2">ماگ</p>
        <p className="text-3xl text-white text-[26px] m-2">جینگیل پینگیل</p>
        <p className="text-3xl text-[15px] text-white m-2">
          {" "}
          این فرصت رو از دست نده
        </p>
        <button className=" m-2 border-solid border-2 border-white text-xl text-white hover:bg-[#0e2282] rounded-lg px-10 py-3">
          ⬅ مشاهده محصولات
        </button>
      </div>
    </div>
  );
}

export default MainBaner;
