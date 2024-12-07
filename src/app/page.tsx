import Image from "next/image";
// import TopHeader from "./TopHeader";
import { Header } from "./components/Header";
import { HHeader } from "./components/Header";
import  Footer from "./components/Footer";
import Hero, { Hero1 , CardDetails, Hero3 ,CardDetails2 ,CardDetails3 } from "./components/Hero";


export default function Home() {
  return (
  <div>
  {/* //  <TopHeader /> */}
     <Header />
    < HHeader />
    <Hero />
    <Hero1 />
    <CardDetails />
   
    <Hero3 />
    <CardDetails2 />
    <CardDetails3 />
    <br />
    <Footer />
    </div> 
  );
}
