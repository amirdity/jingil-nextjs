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
    <div className=" font-fa p-[10px] mx-5 bg-[#f11b1b] background flex flex-col  lg:flex-row-reverse justify-between rounded-t-3xl  mb-5 border-solid border-8 border-rose-300">
      {/* LOCK IMAGE */}
      <div className="flex justify-end">
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
      <div className="flex flex-row items-center">
        <div className="border-[3px] border-solid border-white p-1 rounded-xl">
        <Image src={svginsta} className="text-white w-7"/>
        <p className="hidden"> اینستگرام </p>
        </div>
        <div className="border-[3px] border-solid border-white p-1 rounded-xl">
        <Image src={svgwhatsapp} className="text-white w-7"/>
        <p className="hidden">  واتساپ </p>
        </div>



      </div>
    </div>
  );
}

export default TopFooter;
