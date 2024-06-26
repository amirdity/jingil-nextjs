import React from "react";
import image from "../../../public/lock.png";
import "./top.css";
import Image from "next/image";
import svgloc from "../../../public/SVG/loc.svg";
import svgmail from "../../../public/SVG/email.svg";
import svgphone from "../../../public/SVG/phone.svg";
import svginsta from "../../../public/SVG/insta.svg";
import svgwhatsapp from "../../../public/SVG/whatsapp.svg";
function TopFooter() {
  return (
    // XL EVERY THIING ROW
    <div
      style={{ position: "relative", zIndex: "1" }}
      className=" font-fa p-[10px] mx-5 bg-[#bf0606] background flex flex-col  md:flex-row-reverse rounded-t-3xl border-solid border-8 border-rose-300 mb-[-40-px] z-[1000]"
    >
      {/* LOCK IMAGE */}
      <div className="flex justify-end mb-4 lg:w-[150px] flex-none">
        <Image
          src={image}
          className="h-auto max-h-[150px] w-auto min-h-[100px] my-5"
        />
      </div>
      {/* ADDRESS */}
      <div className="text-white flex flex-col xl:flex-row-reverse align-middle lg:mt-[55px] flex-1">
        {/* TITLE */}
        <div className="lg:flex-row flex justify-end flex-col">
          <p className="font-semibold text-lg text-end text-[#f1f1f1] my-1 pr-2 ">
            {" "}
            با ما همراه شوید &nbsp; &nbsp; &minus;{" "}
          </p>
        </div>
        {/* OTHER */}
        <div className="lg:flex-row flex justify-end flex-col">
          <div>
            <p className="text-end text-sm flex flex-row-reverse gap-2 my-2 ">
              <Image src={svgloc} className="text-white w-7" />
              تهران خیابان گیشا - پاساژ نصرنوین پلاک 543
            </p>
          </div>
          <div>
            <p className="text-end text-sm flex flex-row-reverse gap-2 my-2 ">
              <Image src={svgmail} className="text-white w-7" />
              info@jingilpingil.shop
            </p>
          </div>
          <div>
            {" "}
            <p className="text-end text-sm flex flex-row-reverse gap-2 my-2 ">
              <Image src={svgphone} className="text-white w-7" />
              09360936992
            </p>
          </div>
        </div>
      </div>
      {/* SOCIAL MEDIA */}
      <div className="flex flex-row items-center justify-center mb-5 z-50 min-w-[150px] left-0 flex-none">
        <div className="social-div border-[3px] border-solid border-white p-1 rounded-xl m-1">
          <p className="flex flex-row text-white">
            {" "}
            <span className="hidden show "> اینستگرام </span>{" "}
            <Image src={svginsta} className=" w-7 flex p-1" />{" "}
          </p>
        </div>
        <div className="social-div border-[3px] border-solid border-white p-1 rounded-xl m-1">
          <p className="flex flex-row text-white">
            {" "}
            <span className="hidden show"> واتساپ </span>{" "}
            <Image src={svgwhatsapp} className=" w-7 flex p-1" />{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TopFooter;
