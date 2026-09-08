function Navbar() {
  return (
    <div className="flex justify-between items-center px-10 py-4">
      <div>
        <span className="text-xl font-semibold">NEXORA</span>
      </div>
      <div className="flex gap-4 text-gray-800">
        <a href="">Home</a>
        <a href="">About Us</a>
        <a href="">Services</a>
        <a href="">Teams</a>
        <a href="">Blog</a>
      </div>
      <div className="flex gap-4 items-center">
        <a href="">Login</a>
        <a href="" className="bg-blue-500 py-2 px-4 rounded-xl text-white">
          Get Started
        </a>
      </div>
    </div>
  );
}
export default Navbar;
