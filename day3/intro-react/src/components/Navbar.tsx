import { Link } from "react-router";
function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid black",
        paddingLeft: "16px",
        paddingRight: "16px",
      }}
    >
      <Link to="/">
        <p className="biru">Logo</p>
      </Link>
      <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
export default Navbar;
