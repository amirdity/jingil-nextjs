import Image from "next/image";
import React from "react";
import image from "../../../public/enamad.png";
import svgmon from "../../../public/SVG/mon.svg";
import "./top.css";
function BottemFooter() {
  return (
    <div className=" bg-rose-200">
      <div className="w-full flex flex-col lg:flex-row-reverse justify-between align-top pt-10 text-end font-fa mt-[-40px] -z-50">
        {/* LINKS */}
        <div className="flex flex-col lg:flex-row-reverse justify-center">
          <div className="flex flex-col mx-10 my-5 ">
            <p className="text-lg font-semibold mb-5">
              درباره‌ جینگیل پینگیل &nbsp; &nbsp; &minus;{" "}
            </p>
            <h1 className="mb-2">مجله‌ی درباره‌ جینگیل پینگیل &nbsp; &lt; </h1>
            <h1 className="mb-2">شرایط و قوانین &nbsp; &lt; </h1>
          </div>
          <div className="flex flex-col mx-10 my-5 ">
            <p className="text-lg font-semibold mb-5">
              خدمات مشتریان &nbsp; &nbsp; &minus;{" "}
            </p>
            <h1 className="mb-2">پرسش‌های متداول &nbsp; &lt; </h1>
            <h1 className="mb-2">راهنمای خرید &nbsp; &lt; </h1>
            <h1 className="mb-2"> حریم خصوصی &nbsp; &lt; </h1>
            <h1 className="mb-2">پیگیری سفارش &nbsp; &lt; </h1>
          </div>
        </div>
        {/* ENAMAD */}
        <div className="flex">
          <Image src={image} className="w-auto max-w-[400px]" />
        </div>
      </div>
      {/* RIGHTS */}
      <div className="justify-center w-full">
        <Image src={svgmon} className="mon w-full h-[25px] mb-[-1px]" />
        <div className="w-full bg-[#bf0606] border-[#bf0606]">
          <p className="text-center flex justify-center items-center align-middle font-medium text-xl text-white">
            کلیه حقوق برای فروشگاه اینترنتی درباره‌ جینگیل پینگیل محفوظ است .
            طراحی و توسعه یافته توسط فناوری رایان
          </p>
        </div>
        {/* <p className=" text-center flex justify-center items-center align-middle font-medium text-xl text-white m-10">
          کلیه حقوق برای فروشگاه اینترنتی درباره‌ جینگیل پینگیل محفوظ است .
          طراحی و توسعه یافته توسط فناوری رایان
        </p> */}
      </div>
    </div>
  );
}

export default BottemFooter;
