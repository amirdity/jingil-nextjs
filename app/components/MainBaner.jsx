import React from "react";
import Image from "next/image";
import muge from "../../public/white-mugs.webp";
import "./mainBaner.css";
function MainBaner() {
  return (
    <div className=" flex h-[500px] items-center justify-center text-center gap-x-10 mx-5 rounded-xl banner ">
      <div className="flex">
        <Image src={muge} />
      </div>
      <div className="text-right">
        <p className=" text-right text-3xl text-white">ماگ</p>
        <p className="text-3xl text-white">جینگیل پینگیل</p>
        <p className="text-3xl text-white"> این فرصت رو از دست نده</p>
        <button className="border-solid border-2 border-white text-2xl text-white hover:bg-[#0e2282] rounded-lg px-5">
          ⬅ مشاهده محصولات
        </button>
      </div>
    </div>
  );
}

export default MainBaner;
