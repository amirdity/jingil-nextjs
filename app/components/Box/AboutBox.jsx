"use client"
import Image from "next/image";
import React, { useState } from "react";
import img from '../../../public/SVG/market.svg'
function AboutBox() {
  const [Style, setStyle] = useState("h-[100px]")
  const[Text,setText] = useState(" دیدن ادامه ")
  function showMore() {
    if(Text === " دیدن ادامه "){
      setText(" کوتاه کردن ")
      setStyle("h-auto")
    } else {
      setText(" دیدن ادامه ")
      setStyle("h-[100px]")
    }

    
  }
  
  return (
    <>
      <div className={`m-5 bg-white rounded-3xl border-solid border border-gray-400 flex flex-col overflow-hidden`}>
        {/* HEADER */}
        <div className=" border-b border-gray-400 m-10">
          <p className="flex flex-row-reverse text-xl pb-2">
            <Image src={img} className="mx-2"/>
            درباره فروشگاه اینترنتی جینگیل پینگیل
          </p>
        </div>
        {/* ABOUT TEXT */}
        <div className={`mx-10 text-lg font-medium text-black ${Style} overflow-hidden `}>
          <p className="text-end ">
            به فروشگاه آنلاین جینگیل پینگیل خوش آمدید! ما در جینگیل پینگیل به
            عنوان یکی از برترین مقاصد خرید آنلاین برای محصولات خانگی، اکسسوری‌ها
            و لوازم دکوری، به تلاش برای ارائه بهترین تجربه خرید برای مشتریان
            عزیز می‌پردازیم.
          </p>

          <p className="text-end ">
            در جینگیل پینگیل، ما با دقت به انتخاب محصولات خود می‌پردازیم تا تنوع
            و کیفیت را به شما ارائه دهیم.
          </p>

          <p className="text-end">
            از لوازم خانگی اساسی گرفته تا اکسسوری‌های جذاب دکوری، همه چیز در
            اینجا برای شما در دسترس است.
          </p>

          <p className="text-end ">
            ما به شما اطمینان می‌دهیم که با انتخاب محصولات از جینگیل پینگیل، از
            کیفیت بی‌نظیر، قیمت مناسب و خدمات عالی بهره‌مند خواهید شد. همچنین،
            سیستم مطمئن و امن پرداخت ما به شما اطمینان می‌دهد که تجربه خرید
            آنلاین شما با ما لذت‌بخش و بی‌دردسر خواهد بود.
          </p>

          <p className="text-end ">
            با جینگیل پینگیل، دنیایی از انتخابات فوق‌العاده و تجربه‌ی خریدی
            منحصر به فرد را تجربه کنید.
          </p>

          <p className="text-end ">
            به ما بپیوندید و تمام نیازهای خانگی و دکوری خود را با اطمینان از
            کیفیت و قیمت مناسب، از جینگیل پینگیل تهیه کنید.
          </p>
        </div>
        {/* BUTTON SHOW LESS */}
        <div className="flex justify-end mx-10 h-20">
          <button onClick={showMore}> {Text}</button>
        </div>
      </div>
    </>
  );
}

export default AboutBox;
