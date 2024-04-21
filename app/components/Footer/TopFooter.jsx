import React from "react";
import image from "../../../public/lock.png";
import "./top.css";
import Image from "next/image";
import svgloc from '../../../public/SVG/loc.svg'
import svgmail from '../../../public/SVG/email.svg'
import svgphone from '../../../public/SVG/phone.svg'
import svginsta from '../../../public/SVG/insta.svg'
import svgwhatsapp from '../../../public/SVG/whatsapp.svg'
function TopFooter() {
  return (
    <div className=" font-fa p-[10px] mx-5 bg-[#f11b1b] background flex flex-col  lg:flex-row-reverse justify-between rounded-t-3xl border-solid border-8 border-rose-300 mb-[-40px] z-50">
      {/* LOCK IMAGE */}
      <div className="flex justify-end mb-4">
        <Image src={image} className="h-auto" />
      </div>
      {/* ADDRESS */}
      <div className="text-white lg:flex-row-reverse flex-col">
        <p className="font-semibold text-base text-end text-[#f1f1f1] my-1 pr-2 "> با ما همراه شوید  &nbsp;  &nbsp; &minus; </p>
        <p className="text-end text-sm flex flex-row-reverse gap-2 my-2">
          <Image src={svgloc} className="text-white w-7"/>
          تهران خیابان گیشا - پاساژ نصرنوین پلاک 543</p>
        <p className="text-end text-sm flex flex-row-reverse gap-2 my-2">
        <Image src={svgmail} className="text-white w-7"/>
          info@jingilpingil.shop</p>
        <p className="text-end text-sm flex flex-row-reverse gap-2 my-2">
        <Image src={svgphone} className="text-white w-7"/>
          09360936992</p>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="flex flex-row items-center justify-center mb-5 z-50">
        <div className="social-div border-[3px] border-solid border-white p-1 rounded-xl">
       
        <p className="flex flex-row text-white">  <span  className="hidden show "> اینستگرام </span> <Image src={svginsta} className=" w-7 flex p-1"/> </p>
        </div>
        <div className="social-div border-[3px] border-solid border-white p-1 rounded-xl">
        
        <p className="flex flex-row text-white"> <span className="hidden show"> واتساپ </span> <Image src={svgwhatsapp} className=" w-7 flex p-1"/> </p>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
