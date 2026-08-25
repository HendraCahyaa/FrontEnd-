import About from "../components/About";
import Contact from "../components/Contact";
import Jumbotron from "../components/Jumbotron";
import Portfolio from "../components/Portfolio";

function Home() {
  return (
    <div>
      <Jumbotron />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}
export default Home;
