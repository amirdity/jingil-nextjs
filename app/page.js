"use client";
import Header from "./components/Header/Header";
import MainBaner from "./components/MainBaner/MainBaner";
import Line from "./components/Slide/Slid";
import Slide from "./components/Line/Line1";
import SlideT from "./components/Line/Line2";
import GridBox from "./components/GridBox";
import FooterOfHeader from "./components/Header/FooterOfHeader";
import Loading from "./loading";
import { useEffect, useState } from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 3300);
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <main>
      <Header />
      <FooterOfHeader />
      <MainBaner />
      <Line />
      <Slide />
      <SlideT />
      {/** <GridBox/> */}
    </main>
  );
}
