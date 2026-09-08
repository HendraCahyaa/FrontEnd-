import { Categories } from "../data/template";
function Skill() {
  return (
    <section className="mx-auto max-w-6xl px-6 mt-10 font-display" id="skills">
      <h1 className="text-4xl font-bold text-center text-[#f5f5f5]">Skills</h1>
      <p className="text-xl text-center text-[#a1a1aa]  pt-4">
        Teknologi yang sedang saya pelajari
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 my-8  gap-4 leading-normal text-[16px]">
        {Categories.map((cat) => (
          <div
            key={cat.id}
            className="px-10 py-6 rounded-2xl border-2 border-zinc-800 bg-zinc-900/50 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-zinc-900"
          >
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: `${cat.accent}14`,
                  border: `1px solid ${cat.accent}30`,
                  color: cat.accent,
                }}
              >
                {cat.icon}
              </div>
              <h3 className="font-display font-semibold text-[#f5f5f5] text-base">
                {cat.label}
              </h3>
            </div>
            <div className="flex flex-row flex-wrap gap-2 mt-8 text-[14px] font-semibold">
              {cat.skill.map((skills) => (
                <span
                  key={skills}
                  className="border-2 border-zinc-800 bg-zinc-900/50 px-4 py-2 rounded-xl text-[#a1a1aa] transition-colors duration-200 hover:border-violet-500/40 hover:text-white"
                >
                  {skills}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Skill;
