import StarRating from "@/data/icon";
import { testimonials } from "@/data/template";

function Testimonial() {
  return (
    <div className="mx-auto max-w-6xl px-6 font-mono-label" id="testimonial">
      <div className="pt-16 flex flex-col justify-center items-center text-center">
        <h1 className=" text-4xl font-bold font-mono-label">Testimonial</h1>
        <p className=" leading-relaxed text-xl font-display text-gray-400 ">
          Apa yang dikatakan orang yang pernah bekerja bersama saya
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10">
        {testimonials.map((test) => (
          <div
            className="flex flex-col pb-4 bg-[#111111] border-2 border-[#262626] rounded-2xl px-8 pt-6 text-zinc-300 font-display transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40"
            key={test.name}
          >
            <StarRating />
            <div className="mt-4 font-display text-5xl leading-none select-none text-[rgba(139,92,246,0.25)]">
              "
            </div>
            <div></div>
            <p className="text-sm flex-1 leading-relaxed">{test.quote}</p>
            <hr className="border-zinc-700 my-6" />
            <div className="flex gap-4">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm text-white shrink-0"
                style={{
                  background: `${test.color}22`,
                  border: `1px solid ${test.color}44`,
                }}
              >
                <span style={{ color: test.color }}>{test.initials}</span>
              </div>
              <div>
                <div className="font-display font-semibold text-white text-sm">
                  {test.name}
                </div>
                <div className="text-slate-500 text-xs mt-0.5">
                  {test.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonial;
