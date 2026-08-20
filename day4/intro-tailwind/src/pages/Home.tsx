import CaseStudies from "../components/CaseStudies";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Jumbotron / hero section */}
      <Jumbotron />

      <CaseStudies />
    </div>
  );
}
export default Home;
