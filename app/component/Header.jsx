import Image from "next/image";
import React from "react";
import logo from "../../public/jingilpingil-logo.png";
import { IconName } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import "../component/header.css";
import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiAlignLeft } from "react-icons/fi";
import { FaSlidersH } from "react-icons/fa";
import { SiEmlakjet } from "react-icons/si";
import { RiCupLine } from "react-icons/ri";
function Header() {
  return (
    <div className="">
      <header className="bg-[#fcd8bb]  w-full h-20  justify-between align-center items-center gap-[20px] flex">
        <div className="flex items-center gap-x-5 m-5">
          {" "}
          <FiAlignLeft className="h-4" />
          <BsFillPersonFill />
          <BsCart3 /> <FiHeart />
          <VscAccount />
        </div>
        <div className="flex rounded-full">
          <button className="bg-[#6205f7] p-3 rounded-l-full w-[40px] h-[40px]">
            <FiSearch className="text-white w-[16px] h-[16px]" />
          </button>
          <button className="bg-white p-2 ">
            <FaSlidersH className="w-[22px] h-[22px]" />
          </button>

          <input
            type="search"
            name="s"
            value=""
            className="w-[500px] border placeholder-gray-600 rounded-r-full focus:placeholder-gray-500  align-middle justify-end flex right-0 float-right h-[40px] "
            placeholder="جست و جو در فروشگاه جینگیل پینگیل ..."
            aria-label="Search"
          ></input>
        </div>

        <div className="m-4 justify-end">
          <Image src={logo} className="h-[33px] w-[150px] cursor-pointer  " />
        </div>
      </header>
      {/**footer of the header */}
      <div className="h-[50px] bg-white gap-x-[1100px] hidden lg:flex">
        <div className="right-0">
          <a>
            <p className="hover:text-blue-600">پشتیبانی : 09122026676 </p>
          </a>
        </div>
        <div className="flex flex-row">
          <a className="hover:text-blue-600 p-1 m-1 left-0">
            <p className="flex p-1">
              ماگ
              <RiCupLine />
            </p>
          </a>
          <a className="hover:text-blue-600 p-1 m-1 ">
            <p className="flex p-1">
              صفحه اصلی <SiEmlakjet />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
