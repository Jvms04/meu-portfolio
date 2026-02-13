import Image from "next/image";
import Hero from "@/components/Hero";
import Projetos from "@/components/Projetos";
import Trajetoria from "@/components/Trajetoria";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projetos />
      <Trajetoria />
      <About />
      <Footer />
    </main>
  );
}
