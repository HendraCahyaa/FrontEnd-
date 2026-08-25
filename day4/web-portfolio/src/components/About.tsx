function About() {
  return (
    <div className="bg-[#d7d7d7] " id="about">
      <div className="pt-16 flex flex-col justify-center items-center gap-16 text-center">
        <p className="border-4 border-black px-4 md:px-16 py-4 text-2xl font-bold tracking-[12px]">
          ABOUT ME
        </p>
        <p className="px-6 leading-relaxed">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
          quis libero viverra facilisis ut ac est.
        </p>
        <p className="border-3 border-[#d7d7d7] border-x-black px-8">Explore</p>
        <img src="/separatorBlack.png" alt="" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-6 md:px-30 py-16">
        <div className="relative px-10">
          <img
            src="logoDesign.png"
            alt=""
            className="absolute z-10 bottom-25 md:bottom-10 left-0 "
          />
          <p className="font-bold tracking-[4px] text-xl pb-4 relative z-20">
            DESIGN
          </p>
          <p>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
        <div className="relative px-10">
          <img
            src="logoDevelopment.png"
            alt=""
            className="absolute z-10 bottom-25 md:bottom-10 left-0 "
          />
          <p className="font-bold tracking-[4px] text-xl pb-4">DEVELOPMENT</p>
          <p>
            I can design the site based on your needs and suggestions. I can
            also design the site from scratch and consult you during the job.
          </p>
        </div>
      </div>
      <div className="w-full max-w-md mx-auto relative px-16 md:px-12 ">
        <img
          src="logoMaintenance.png"
          alt=""
          className="absolute z-10 bottom-25 md:bottom-20 left-5 md:left-0 "
        />
        <p className="font-bold tracking-[4px] text-xl pb-4">MAINTENANCE</p>
        <p>
          I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job.
        </p>
      </div>
      <div className="py-16 flex justify-center items-center">
        <img src="/separatorBlack.png" alt="" />
      </div>

      <div className="px-6 md:px-50 text-center" id="skill">
        <p className="table mx-auto border-4 border-black px-16 py-4 text-center font-bold text-2xl tracking-[12px]">
          SKILLS
        </p>
        <p className="font-bold text-2xl  pt-16">USING NOW : </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center px-10 md:px-0 py-16 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/logoHtml.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain "
            />
            <p className="pt-4">HTML5</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoCss.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">CSS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoSass.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">SASS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoJs.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoReact.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">REACT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/bootstrap.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">BOOTSTRAP</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoGit.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">GIT</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/figma.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">FIGMA</p>
          </div>
        </div>
        <p className="font-bold text-2xl pt-16">LEARNING NOW : </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center px-10 md:px-0 py-16 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/logoNodejs.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">NODEJS</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoMysql.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">MYSQL</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoMongodb.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">MONGODB</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoTs.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">TYPESCRIPT</p>
          </div>
        </div>
        <p className="font-bold text-2xl  pt-16">OTHER SKILLS : </p>
        <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center items-center px-10 md:px-0  py-16 gap-16">
          <div className="flex flex-col items-center">
            <img
              src="/inggris.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">ENGLISH</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/spanyol.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">SPANYOL</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoCplus.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">C++</p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/logoC.png"
              alt=""
              className="mx-auto hover:-translate-y-1 transition-transform duration-200 cursor-pointer object-contain"
            />
            <p className="pt-4">C</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
