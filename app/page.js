import Image from "next/image";
import Header from "./component/Header";
import MainBaner from "./component/mainBaner";
import Line from "./component/line";
import Slide from "./component/Slide";

export default function Home() {
  return (
    <main>
      <Header />
      <MainBaner />
      <Line />
      <Slide />
    </main>
  );
}
