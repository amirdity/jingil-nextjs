import Image from "next/image";
import React from "react";
import logo from "../../public/jingilpingil-logo.png";
import "./header.css";
import { BsCart3 } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiAlignLeft } from "react-icons/fi";
import { FaSlidersH } from "react-icons/fa";
import { SiEmlakjet } from "react-icons/si";
import { RiCupLine } from "react-icons/ri";
import { AiTwotonePhone } from "react-icons/ai";
import { BsArrowLeftRight } from "react-icons/bs";
import { AiOutlineFrown } from "react-icons/ai";
function Header() {
  const style = { fontSize: "27px" };
  const styleF = { fontSize: "22px" };
  const styleS = { fontSize: "16px" };
  const styleI = { fontSize: "70px" };
  return (
    <div className="font-fa">
      <header className="bg-[#fcd8bb] w-full justify-between  items-center  hidden md:flex flex-row-reverse">
        {/**  LOGO   */}
        <div className="m-4 justify-end shrink-0 ">
          <Image src={logo} className="h-[33px] w-[150px] cursor-pointer " />
        </div>

        {/**Search Bar */}
        <div className="flex flex-row-reverse">
          <input
            type="search"
            name="s"
            value=""
            className="w-[45vw] placeholder-gray-600 rounded-r-full focus:placeholder-gray-500   justify-end flex h-[40px] text-right border-0 "
            placeholder=" . .. جست و جو در فروشگاه جینگیل پینگیل     "
            aria-label="Search"
          ></input>
          <button className="bg-white p-2 border-0">
            <FaSlidersH className="" style={styleF} />
          </button>
          <button className="bg-[#f59931] p-3 rounded-l-full w-[40px] h-[40px]">
            <FiSearch className="text-white " style={styleS} />
          </button>
        </div>
        {/**  ICONS  */}
        <div className="flex items-center gap-x-[10px] m-5 shrink-0 ml-7">
          <div className="relative flex show">
            <BsCart3 style={style} className=" hover:text-[#f59931] " />{" "}
            <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
              0
            </p>
            <div className="hide absolute w-[500px] h-[130px] bg-white top-[40px] rounded-3xl flex-col content-center text-center">
              <p className="flex justify-center text-[#f59931]">
                {" "}
                <AiOutlineFrown style={styleI}  />{" "}
              </p>
              <p className=" text-center"> .هیچ محصولی در سبد خرید نیست</p>
            </div>
          </div>

          <div className="relative flex">
            <FiHeart style={style} className=" hover:text-[#f59931]" />{" "}
            <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
              0
            </p>
          </div>

          <div className="relative flex">
            <BsArrowLeftRight style={style} className=" hover:text-[#f59931]" />{" "}
            <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
              0
            </p>
          </div>
          <BsFillPersonFill style={style} className="hover:text-[#f59931] " />
        </div>
      </header>
      {/**HEADER SCREEN SMALL */}
      <header className="h-[127px] bg-[#fcd8bb] flex flex-col md:hidden">
        {/**TOP */}
        <div className="flex flex-row-reverse justify-between">
          <div className="m-4 justify-end shrink-0 ">
            <Image src={logo} className="h-[33px] w-[150px] cursor-pointer " />
          </div>
          <div className="flex items-center gap-x-[10px] m-5 shrink-0">
            {" "}
            <FiAlignLeft
              style={style}
              className="flex lg:hidden hover:text-[#f59931] "
            />{" "}
            <div className="relative flex">
              <BsCart3 style={style} className=" hover:text-[#f59931]" />{" "}
              <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
                0
              </p>
            </div>{" "}
            <div className="relative flex">
              <FiHeart style={style} className=" hover:text-[#f59931]" />{" "}
              <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
                0
              </p>
            </div>
            <div className="relative flex">
              <BsArrowLeftRight
                style={style}
                className=" hover:text-[#f59931]"
              />{" "}
              <p className="absolute rounded-full bg-[#f59931] top-[-7px] right-[-5px] w-[16px] h-[16px] font-normal text-[10px] content-center pl-1 ">
                0
              </p>
            </div>
            <BsFillPersonFill style={style} className="hover:text-[#f59931] " />
          </div>
        </div>
        {/**DOWN PART (SEARCH) */}
        <div className="flex flex-row-reverse ">
          <input
            type="search"
            name="s"
            value=""
            className="w-screen border-0 placeholder-gray-600 rounded-r-full focus:placeholder-gray-500   justify-end flex right-0 float-right h-[40px] text-right shrink"
            placeholder=" . .. جست و جو در فروشگاه جینگیل پینگیل     "
            aria-label="Search"
          ></input>
          <button className="bg-white p-2 ">
            <FaSlidersH className="" style={styleF} />
          </button>
          <button className="bg-[#f59931] p-3 rounded-l-full w-[40px] h-[40px]">
            <FiSearch className="text-white " style={styleS} />
          </button>
        </div>
      </header>
      {/**footer of the header */}
      <div className=" bg-white justify-between hidden lg:flex content-center">
        <div className="right-0 ">
          <a>
            <p className="hover:text-blue-600 flex align-middle pt-3 font-normal text-[#080452]">
              {" "}
              <AiTwotonePhone
                style={styleS}
                className="hover:text-[#e11d48] mx-2"
              />{" "}
              پشتیبانی : 09122026676{" "}
            </p>
          </a>
        </div>
        <div className="flex flex-row">
          <a className="hover:text-[#f59931] p-1 m-1 left-0">
            <p className="flex p-1 font-light">
              <span className="pt-[3px]"> ماگ</span>

              <RiCupLine style={styleF} className="m-1" />
            </p>
          </a>
          <a className="hover:text-[#f59931] p-1 m-1 ">
            <p className="flex p-1 font-light">
              <span className="pt-[3px]"> صفحه اصلی </span>

              <SiEmlakjet style={styleF} className="m-1" />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
