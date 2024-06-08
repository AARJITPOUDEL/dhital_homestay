import Image from "next/image";
import Navbar from "@/components/Navbar.tsx/Navbar";
import Hero from "@/components/Hero/Hero";
import Number from "@/components/Number/Number";
import Card from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Question from "@/components/Question/Question";
import Display from "@/components/Display/Display";
import Gallery from "@/components/Gallery/Gallery";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Number></Number>
      <Card></Card>
      <Display></Display>
      <Gallery></Gallery>
      <Question></Question>
      <Footer></Footer>
    </div>
  );
}
