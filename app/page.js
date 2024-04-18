
import Header from "./components/Header/Header";
import MainBaner from "./components/MainBaner/MainBaner";
import Line from "./components/Slide/Slid";
import Slide from "./components/Line/Line1";
import SlideT from "./components/Line/Line2";
import GridBox from "./components/GridBox";
import FooterOfHeader from "./components/Header/FooterOfHeader";
// LOADING PAGE
// import { useState, CSSProperties } from "react";
// import ClipLoader from "react-spinners/ClipLoader";


export default function Home() {
 
  return (
    <main>
      <Header />
      <FooterOfHeader/>
      <MainBaner />
      <Line />
      <Slide/>
      <SlideT/> 
     {/** <GridBox/> */}
    </main>
  );
}
