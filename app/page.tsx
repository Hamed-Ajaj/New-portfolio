import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl  w-full">
        <Navbar />
        <Hero />
        <Grid />
        <Skills />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
}
