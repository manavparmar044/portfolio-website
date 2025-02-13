import { AboutSection } from "@/components/AboutSection";
import { Banner } from "@/components/Banner";
import { Hero } from "@/components/Hero";
import { LogoScroll } from "@/components/LogoScroll";
import { Navbar } from "@/components/Navbar";
import { ProjectSection } from "@/components/ProjectSection";

export default function Home() {
  return (
    <div className="">
      {/* <Header /> */}
      <Banner />
      <Navbar />
      <Hero />
      <LogoScroll />
      {/* Project Section */}
      <ProjectSection />
      <AboutSection />
    </div>
  );
}
