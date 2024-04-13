import Image from "next/image";
import Header from "./component/Header";
import MainBaner from "./component/mainBaner";

export default function Home() {
  return (
    <main>
      <Header />
      <MainBaner />
    </main>
  );
}
