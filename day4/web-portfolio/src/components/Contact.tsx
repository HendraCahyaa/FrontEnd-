import { HiChevronDoubleUp } from "react-icons/hi2";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { HiEnvelope } from "react-icons/hi2";
function Contact() {
  return (
    <div className="bg-[#ffffff]" id="contact">
      <div className="flex flex-col justify-center items-center py-8 gap-8">
        <p className=" border-4 border-black font-bold py-4 px-4 md:px-16 text-2xl tracking-[12px]">
          CONTACT
        </p>
        <p className="px-10">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <img src="/separatorBlack.png" alt="" />
      </div>
      <form className="flex flex-col justify-center items-center gap-8 px-10 md:w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="ENTER YOUR NAME"
          className="w-full border-0 border-l-2 border-b-2 border-gray-500 focus:border-black transition-colors focus:ring-0 outline-none py-4 pl-3 pr-2 text-left"
        />

        <input
          type="email"
          placeholder="ENTER YOUR EMAIL"
          className="w-full border-0 border-l-2 border-b-2 border-gray-500 focus:border-black transition-colors focus:ring-0 outline-none py-4 pl-3 pr-2 text-left"
        />

        <input
          type="text"
          placeholder="ENTER YOUR PHONE"
          className="w-full border-0 border-l-2 border-b-2 border-gray-500 focus:border-black transition-colors focus:ring-0 outline-none py-4 pl-3 pr-2 text-left"
        />

        <textarea
          placeholder="ENTER YOUR MESSAGE"
          className="w-full border-0 border-l-2 border-b-2 border-gray-500 focus:border-black transition-colors focus:ring-0 outline-none py-4 pl-3 pr-2 h-32 resize-y text-left"
        />

        <button className=" border-2 border-white border-x-black py-2 px-16 mb-4 font-bold hover:bg-black hover:text-white active:scale-95 transition-all duration-200">
          SUBMIT
        </button>
      </form>
      <div className="bg-black flex flex-col mx-auto text-white justify-center items-center py-8">
        <a
          href="#home"
          className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
        >
          <HiChevronDoubleUp className="table mx-auto" />
          BACK TO TOP
        </a>
        <div className="grid grid-cols-4 gap-4 text-2xl my-4">
          <div className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <FaFacebookSquare />
          </div>
          <div className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <FaLinkedin />
          </div>
          <div className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <FaInstagram />
          </div>
          <div className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer">
            <HiEnvelope />
          </div>
        </div>
        <div>
          <p>@2020 Tomasz Gajda All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}
export default Contact;
