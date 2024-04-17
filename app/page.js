
import Header from "./components/Header/Header";
import MainBaner from "./components/MainBaner/MainBaner";
import Line from "./components/Slide/Slid";
import Slide from "./components/Line/Line1";
import SlideT from "./components/Line/Line2";
import GridBox from "./components/GridBox";
import FooterOfHeader from "./components/Header/FooterOfHeader";
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
