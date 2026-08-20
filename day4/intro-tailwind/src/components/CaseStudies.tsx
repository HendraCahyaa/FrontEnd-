import { HiChevronRight } from "react-icons/hi";

function CaseStudies() {
  return (
    <div className="container mx-auto py-20">
      <h2 className="text-center font-bold text-2xl">Case Studies</h2>
      <p className="text-center text-[#9C9C9C] py-8">
        Solving user & business problems since last 15+ years.Lorem ipsum dolor
        sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
        ut labore et dolore magna aliqua.{" "}
      </p>

      <div className="grid grid-cols-2 gap-8 pb-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFF6E9] w-fit px-4 py-1 rounded-3xl">
            <p className="text-[#FFA217] font-bold">Fintech</p>
          </div>

          <h3 className="text-black font-bold text-xl">Work name here</h3>

          <p className="text-[#9C9C9C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="bg-[#FFA217] text-white px-12 py-2 rounded-sm font-bold flex items-center gap-2 w-fit">
            View Case Study <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="/fintech.png"
            alt="Fintect Picture"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pb-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6 order-2">
          <div className="bg-[#FFF6E9] w-fit px-4 py-1 rounded-3xl">
            <p className="text-[#FFA217] font-bold">Fintech</p>
          </div>

          <h3 className="text-black font-bold text-xl">Work name here</h3>

          <p className="text-[#9C9C9C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="bg-[#FFA217] text-white px-12 py-2 rounded-sm font-bold flex items-center gap-2 w-fit">
            View Case Study <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="order-1">
          <img
            src="/fintech.png"
            alt="Fintect Picture"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pb-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#FFF6E9] w-fit px-4 py-1 rounded-3xl">
            <p className="text-[#FFA217] font-bold">Fintech</p>
          </div>

          <h3 className="text-black font-bold text-xl">Work name here</h3>

          <p className="text-[#9C9C9C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="bg-[#FFA217] text-white px-12 py-2 rounded-sm font-bold flex items-center gap-2 w-fit">
            View Case Study <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* RIGHT */}
        <div>
          <img
            src="/fintech.png"
            alt="Fintect Picture"
            className="w-full object-cover"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pb-12">
        {/* LEFT */}
        <div className="flex flex-col gap-6 order-2">
          <div className="bg-[#FFF6E9] w-fit px-4 py-1 rounded-3xl">
            <p className="text-[#FFA217] font-bold">Fintech</p>
          </div>

          <h3 className="text-black font-bold text-xl">Work name here</h3>

          <p className="text-[#9C9C9C]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. sed do
            eiusmod tempor incididunt ut labore et dolore magna.
          </p>

          <button className="bg-[#FFA217] text-white px-12 py-2 rounded-sm font-bold flex items-center gap-2 w-fit">
            View Case Study <HiChevronRight className="text-2xl" />
          </button>
        </div>

        {/* RIGHT */}
        <div className="order-1">
          <img
            src="/fintech.png"
            alt="Fintect Picture"
            className="w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default CaseStudies;
