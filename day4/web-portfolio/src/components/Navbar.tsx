import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <div className="relative bg-transparent text-white flex justify-between items-center font-medium text-lg px-6 md:px-16 py-4 z-50">
      <img src="/logo1.png" alt="Logo" className="h-8 md:h-10 object-contain" />

      <div className="group block md:hidden relative">
        <button className="p-2 border border-white/20 rounded-lg active:bg-white/10">
          <RxHamburgerMenu className="text-2xl text-black" />
        </button>

        <div className="hidden group-hover:flex group-focus-within:flex flex-col gap-4 absolute right-0 top-full mt-2 w-48 bg-black/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/10 text-center">
          <a href="#about" className="py-2 hover:bg-gray-700 rounded-full">
            About me
          </a>
          <a href="#skill" className="py-2 hover:bg-gray-700 rounded-full">
            Skills
          </a>
          <a href="#portfolio" className="py-2 hover:bg-gray-700 rounded-full">
            Portfolio
          </a>
          <a href="#contact" className="py-2 hover:bg-gray-700 rounded-full">
            Contact
          </a>
        </div>
      </div>
      <div className="hidden md:flex gap-8 lg:gap-16 items-center">
        <a
          href="#about"
          className="py-2 px-4 rounded-full hover:-translate-y-1 hover:bg-gray-300 hover:text-black hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
        >
          About me
        </a>
        <a
          href="#skill"
          className="py-2 px-4 rounded-full hover:-translate-y-1 hover:bg-gray-300 hover:text-black hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
        >
          Skills
        </a>
        <a
          href="#portfolio"
          className="py-2 px-4 rounded-full hover:-translate-y-1 hover:bg-gray-300 hover:text-black hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className="py-2 px-4 rounded-full hover:-translate-y-1 hover:bg-gray-300 hover:text-black hover:shadow-lg hover:shadow-gray-500/50 transition-all duration-300"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
