import { FaAt, FaLinkedin, FaGithub } from "react-icons/fa6";
import Navbar from "./Navbar";

function Jumbotron() {
  return (
    <div
      className="box-border bg-[#d7d7d7] md:bg-[linear-gradient(100deg,#d7d7d7_50%,#000000_50%)]"
      id="home"
    >
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 px-6 md:px-0">
        <div className="flex flex-col justify-center mx-auto text-center md:text-left py-8 md:py-0">
          <div className="font-bold">
            <p className="text-2xl md:text-[40px] pb-4 md:pb-8">Hi, I am</p>
            <p className="text-4xl md:text-[80px]">Thomas Gajda</p>
            <p className="text-lg md:text-[25px] text-[#606060] md:text-[#909090]">
              Front End Developer / UI Designer
            </p>
          </div>
          <div className="flex flex-row justify-center md:justify-start gap-4 text-3xl md:text-4xl pt-6 md:pt-8">
            <div className="bg-[#c4c4c4] p-2 shadow-lg hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <FaAt />
            </div>
            <div className="bg-[#c4c4c4] p-2 shadow-lg hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <FaGithub />
            </div>
            <div className="bg-[#c4c4c4] p-2 shadow-lg hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
              <FaLinkedin />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/Profile.png"
            alt="Thomas Gajda"
            className="object-cover max-w-full h-auto"
          />
        </div>
      </div>
      <div className="bg-black text-white flex flex-col gap-6 md:gap-8 justify-start items-start px-6 md:pl-16 md:pr-32 py-8">
        <p className="table mx-auto md:mx-0 text-xl md:text-2xl tracking-[4px] font-semibold">
          IT BERRIES
        </p>
        <p className="text-sm md:text-base leading-relaxed">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est. Morbi commodo, eros in
          dignissim tempus, lacus odio rutrum augue, in semper sem magna quis
          tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit.
          Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet
          varius turpis vel pharetra. Ut ante justo, consequat vitae elementum
          tempor, accumsan nec eros.
        </p>
        <button className="table mx-auto md:mx-0 border-2 border-black border-x-white px-8 py-2 hover:bg-white hover:text-black active:scale-95 transition-all duration-200">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Jumbotron;
