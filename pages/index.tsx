import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Project";
import Experience from "@/components/Experience/WorkExperience";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
    </>
  );
}
