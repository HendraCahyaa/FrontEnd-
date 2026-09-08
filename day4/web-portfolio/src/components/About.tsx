import { Values } from "../data/template";
function About() {
  return (
    <section id="about" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold font-mono-label">About</h1>

          <p className=" leading-relaxed text-xl font-display text-gray-400 ">
            Mengenal saya lebih dekat
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-zinc-400 max-w-2xl leading-8 text-base sm:text-lg animate-fade-up">
            <p>
              Saya adalah fresh graduate SMK yang memiliki ketertarikan pada
              dunia web development. Saat ini saya sedang mengikuti bootcamp
              Full-Stack Web Development untuk memperdalam kemampuan dalam
              membangun aplikasi web dari sisi frontend hingga backend. Saya
              menikmati proses mengubah sebuah ide menjadi aplikasi yang dapat
              digunakan. Dalam proses belajar, saya terbiasa mengerjakan
              berbagai project untuk memahami cara kerja teknologi seperti
              React, TypeScript, Node.js, database, dan REST API. Saya masih
              berada dalam tahap awal perjalanan sebagai developer, namun saya
              terus berusaha meningkatkan kemampuan melalui praktik, eksplorasi
              teknologi baru, dan penyelesaian project secara langsung.
            </p>
          </div>

          <div className="space-y-6 animate-fade-up delay-200">
            {Values.map((value) => (
              <div
                key={value.id}
                className="border-l border-violet-500 pl-5 transition-all duration-300 hover:border-violet-300 hover:pl-7"
              >
                <h3 className="font-semibold text-white">{value.label}</h3>

                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
