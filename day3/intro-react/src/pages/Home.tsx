import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";
function Home() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        <StudentCard name="Budi" age={20} />
        <StudentCard name="Joko" age={30} />
        <StudentCard name="Siti" age={25} />
        <StudentCard name="Jack" age={31} />
      </div>
    </div>
  );
}
export default Home;
