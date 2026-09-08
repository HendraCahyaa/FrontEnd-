import { tech } from "@/data/template";

function Hero() {
  return (
    <div
      className="bg-[#0a0a0a] box-border  my-20 mx-auto max-w-6xl px-6 lg:px-8"
      id="home"
    >
      <div className="grid items-center pt-10 gap-12 md:grid-cols-2">
        <div className="flex flex-col justify-center mx-auto text-left order-2 md:order-1 animate-fade-up">
          <div className="tracking-tight">
            <p className="font-mono-label text-xl  tracking-[0.2em] uppercase">
              Hello I'm
            </p>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
              Hendra Cahya Wiranata
            </h1>
            <p className="font-display text-xl font-semibold  py-4">
              Full-stack Web Developer
            </p>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Fresh graduate yang memiliki ketertarikan pada pengembangan
              aplikasi web modern, khususnya pada frontend dan backend. Saya
              senang membangun aplikasi yang sederhana, fungsional, dan mudah
              digunakan.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="#portfolio"
              className="inline-flex items-center px-6 py-3 font-display font-semibold text-white rounded-xl bg-violet-600 hover:bg-violet-500 hover:-translate-y-0.5 transition-all duration-200"
            >
              Lihat Portfolio
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 font-display font-semibold text-white rounded-xl border-2 border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] hover:bg-white/10 hover:-translate-y-0.5 transition-all duration-200"
            >
              Kontak Saya
            </a>
          </div>

          <div className="my-4">
            <p className="font-mono-label text-[13px] tracking-widest uppercase text-slate-600">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-4 mt-2">
              {tech.map((t) => (
                <span className={`tech-stack ${t}`} key={t}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div
          className="w-full h-full flex justify-center order-1 rounded-2xl animate-fade-in"
          style={{
            background:
              "radial-gradient(circle at center, rgba(139,92,246,0.28) 0%, transparent 70%)",
            borderRadius: "24px",
          }}
        >
          <div className=" overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 md:w-75 md:order-2 order-1">
            <img
              src="/profildummy.png"
              alt="Hendra Cahya"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
