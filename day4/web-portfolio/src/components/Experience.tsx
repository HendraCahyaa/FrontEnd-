import { jobs } from "@/data/template";
function Experience() {
  return (
    <div className="mx-auto max-w-6xl px-6 font-display" id="experience">
      <div className="pt-16 flex flex-col justify-center items-center text-center">
        <h1 className=" text-4xl font-bold font-mono-label text-[#f5f5f5]">
          EXPERIENCE
        </h1>
        <p className=" leading-relaxed text-xl font-display text-gray-400 ">
          Perjalanan belajar dan pengembangan saya
        </p>
      </div>
      <div className="flex flex-col gap-4 my-10">
        {jobs.map((job) => (
          <div
            className="bg-[#111111] border-2 border-[#262626] rounded-2xl px-10 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            key={job.company}
          >
            <div className="flex flex-col gap-3 md:flex-row md:justify-between md:items-center">
              <p className="font-semibold text-xl text-[#f5f5f5]">
                {job.title}
              </p>
              <p className="bg-[#111111] border-2 border-[#262626] px-4 py-1 rounded-[20px] text-[#a78bfa] text-[12px] w-fit">
                {job.period}
              </p>
            </div>

            <div className="flex gap-8 text-sm">
              <span className="text-md text-zinc-300">{job.company}</span>
              <p className=" text-zinc-500 ">{job.type}</p>
            </div>

            <div className="px-4 leading-8 text-zinc-400">
              <ul className="list-disc marker:text-purple-600">
                {job.responsibilities.map((res) => (
                  <li key={res}>{res}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 py-4 text-sm">
              {job.tech.map((t) => (
                <span
                  className="bg-[#111111] border-2 border-[#262626] px-4 py-1 rounded-lg text-[#a78bfa] transition-colors duration-200 hover:border-violet-500/50 hover:text-violet-300"
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Experience;
