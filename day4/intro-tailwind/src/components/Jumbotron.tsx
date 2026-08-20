function Jumbotron() {
  return (
    <div className="bg-black">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 text-white md:h-[65vh] gap-20 py-10">
        {/* LEFT */}
        <div className="flex flex-col justify-center gap-8 pl-8 md:pl-16">
          <h1 className="text-3xl md:text-5xl font-bold">Your Name Here</h1>
          <p className="text-[#9C9C9C]">
            Intro text: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua.{" "}
          </p>
          <button className="bg-[#3F8E00] py-4 px-10 md:py-6 md:px-16 rounded-sm w-fit">
            Let’s get started
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center justify-center">
          <img
            src="/profile.png"
            alt="Profile Picture"
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;
