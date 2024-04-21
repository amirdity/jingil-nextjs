import Image from "next/image";
import React from "react";
import image from "../../../public/enamad.png";
function BottemFooter() {
  return (
    <div className=" bg-rose-200 -z-40">
      <div className=" w-full  flex flex-col lg:flex-row-reverse justify-between align-top pt-10 text-end font-fa">
        <div className="flex flex-col lg:flex-row-reverse justify-center">
          <div className="flex flex-col mx-20 my-10 ">
            <p className="text-base font-semibold">
              درباره‌ جینگیل پینگیل &nbsp; &nbsp; &minus;{" "}
            </p>
            <h1>مجله‌ی درباره‌ جینگیل پینگیل &lt; </h1>
            <h1>شرایط و قوانین &lt; </h1>
          </div>
          <div className="flex flex-col mx-20 my-10">
            <p className="text-base font-semibold">
              خدمات مشتریان &nbsp; &nbsp; &minus;{" "}
            </p>
            <h1>پرسش‌های متداول &lt; </h1>
            <h1>راهنمای خرید &lt; </h1>
            <h1> حریم خصوصی &lt; </h1>
            <h1>پیگیری سفارش &lt; </h1>
          </div>
        </div>
        {/* ENAMAD */}
        <div className="flex">
          <Image src={image} className="w-auto max-w-[400px]" />
        </div>
      </div>
      {/* RIGHTS */}
      <div className="bg-rose-600  rounded-t-full flex justify-center">
        <p className=" text-center flex justify-center items-center align-middle font-medium text-xl text-white m-10">
          کلیه حقوق برای فروشگاه اینترنتی درباره‌ جینگیل پینگیل محفوظ است .
          طراحی و توسعه یافته توسط فناوری رایان
        </p>
      </div>
    </div>
  );
}

export default BottemFooter;
