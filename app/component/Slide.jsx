import React from "react";
import Image from "next/image";
import three from "../../public/s1.jpg";
import two from "../../public/s2.jpg";
import one from "../../public/s3.jpg";

function Slide() {
  return (
    <div className="flex flex-row justify-around">
      <div>
        <Image src={one} className=" rounded-3xl w-[430px] h-[200px]" />
      </div>
      <div>
        <Image src={two} className=" rounded-3xl w-[430px] h-[200px]" />
      </div>
      <div>
        <Image src={three} className=" rounded-3xl w-[430px] h-[250px]" />
      </div>
    </div>
  );
}

export default Slide;
