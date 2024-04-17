import React from 'react'
import Image from "next/image";
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
function FooterOfHeader() {
  const style = { fontSize: "27px" };
  const styleF = { fontSize: "22px" };
  const styleS = { fontSize: "16px" };
  const styleI = { fontSize: "70px" };
  return (
    <div className=" bg-white justify-between hidden lg:flex content-center sticky top-0 font-fa z-40">
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
  )
}

export default FooterOfHeader