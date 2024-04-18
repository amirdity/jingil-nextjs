import Header from "./components/Header/Header";
import MainBaner from "./components/MainBaner/MainBaner";
import Line from "./components/Slide/Slid";
import Slide from "./components/Line/Line1";
import SlideT from "./components/Line/Line2";
import GridBox from "./components/GridBox";
import FooterOfHeader from "./components/Header/FooterOfHeader";
// LOADING PAGE

// import ClipLoader from "react-spinners/ClipLoader";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <main>
      <Header />
      <FooterOfHeader />
      <Suspense fallback={<p className="text-3xl">Loading ...</p>}>
        <MainBaner />
        </Suspense>
        <Line />
        <Slide />
        <SlideT />
        {/** <GridBox/> */}
      
    </main>
  );
}
