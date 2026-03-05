import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Orgchart from "@/components/Orgchart";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Team />
      <Orgchart />
      <Contact />
      <Footer />
    </>
  );
}
