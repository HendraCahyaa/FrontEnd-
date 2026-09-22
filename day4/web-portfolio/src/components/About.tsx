import { Values } from "../data/template";
function About() {
  return (
    <section id="about" className="border-t border-zinc-900">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-12 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-bold font-mono-label">About</h1>

          <p className=" leading-relaxed text-xl font-display text-gray-400 ">
            Get to know me better
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <div className="text-zinc-400 max-w-2xl leading-8 text-base sm:text-lg animate-fade-up">
            <p>
              I am a recent vocational high school SMK graduate with a keen
              interest in web development. Currently, I am participating in a
              Full-Stack Web Development bootcamp to deepen my skills in
              building web applications, covering everything from the frontend
              to the backend. I enjoy the process of transforming ideas into
              functional applications. Throughout my learning journey, I have
              worked on various projects to understand the workings of
              technologies such as React, TypeScript, Node.js, databases, and
              REST APIs. Although I am still in the early stages of my career as
              a developer, I am committed to continuously improving my skills
              through practice, exploring new technologies, and hands-on project
              work.
            </p>
          </div>

          <div className="space-y-6 animate-fade-up delay-200">
            {Values.map((value) => (
              <div
                key={value.id}
                className="border-l border-blue-500 pl-5 transition-all duration-300 hover:border-blue-300 hover:pl-7"
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
