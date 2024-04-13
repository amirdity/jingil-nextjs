import Image from "next/image";
import Header from "./component/Header";
import MainBaner from "./component/mainBaner";
import Line from "./component/line";
import Slide from "./component/Slide";
import SlideT from "./component/SlideT";

export default function Home() {
  return (
    <main>
      <Header />
      <MainBaner />
      <Line />
      <Slide />
      <SlideT />
    </main>
  );
}
