import Experience from "@/components/Experience";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skill from "../components/Skill";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skill />
        <Portfolio />
        <Experience />
        <Testimonial />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
export default Home;
