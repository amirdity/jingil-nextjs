import React from "react";
import Image from "next/image";
import muge from "../../public/white-mugs.webp";
function MainBaner() {
  return (
    <div className="bg-[#6205f7] h-[1000px] w-full flex flex-col lg:flex items-center justify-center text-center ">
      <div className="">
        <p className="text-2xl text-white">ماگ</p>
        <p className="text-2xl text-white">جینگیل پینگیل</p>
        <p className="text-2xl text-white"> این فرصت رو از دست نده</p>
        <button className="border-solid border-2 border-white text-2xl text-white">
          مشاهده محصولات
        </button>
      </div>
      <div className="flex">
        <Image src={muge} />
      </div>
    </div>
  );
}

export default MainBaner;
