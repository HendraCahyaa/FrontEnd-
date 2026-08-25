function Portfolio() {
  return (
    <div className=" text-white bg-[#1a1a1a]" id="portfolio">
      <div className="bg-[url(/background.png)] p-20">
        <p className="table mx-auto text-center border-4 border-black px-4 md:px-16 py-4 font-extrabold text-black tracking-[12px]">
          PORTFOLIO
        </p>
      </div>
      <div className="flex flex-row justify-center items-center py-8">
        <div className="flex gap-10 md:gap-40 border-2 border-[#1a1a1a] border-b-white px-10 md:px-30 pb-4">
          <p>ALL</p>
          <p>CODED</p>
          <p>DESIGNED</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="overflow-hidden">
          <img
            src="/project1.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/project2.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/project3.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/project4.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/project5.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/project1.png"
            alt=""
            className="hover:scale-110 hover:brightness-110 transition-all duration-300"
          />
        </div>
      </div>
      <div className="flex justify-center items-center py-4 ">
        <p>and many more to come!</p>
      </div>
    </div>
  );
}
export default Portfolio;
