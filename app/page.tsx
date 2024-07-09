import Hero from "@/components/Hero";
import "./globals.css";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Client from "@/components/Client";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl  w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <Grid />
        <Skills/>
        <RecentProjects />
        <Client />
        <Approach/>
        <Footer />
      </div>
    </main>
  );
}
