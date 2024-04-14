import Image from "next/image";
import Header from "./components/Header";
import MainBaner from "./components/mainBaner";
import Line from "./components/line";
import Slide from "./components/Slide";
import SlideT from "./components/SlideT";

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
