import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLinkIcon, GithubIcon } from "@/data/icon";
import { project } from "@/data/template";
function Portfolio() {
  return (
    <div
      className=" text-[#f5f5f5] mx-auto max-w-6xl px-6 mt-10 font-display"
      id="portfolio"
    >
      <div className="">
        <h1 className=" text-4xl font-bold font-mono-label text-center">
          Portfolio
        </h1>
        <p className=" leading-relaxed text-xl font-display text-center text-gray-400 ">
          Beberapa project yang telah saya kerjakan
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.map((project) => (
          <div
            className="group overflow-hidden bg-[#111111] border-2 border-[#262626] rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-900/40 hover:shadow-lg hover:shadow-violet-500/5"
            key={project.id}
          >
            <img
              src={project.image}
              alt="not found"
              loading="lazy"
              decoding="async"
              className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="px-8 py-2">
              <div className="flex flex-row flex-wrap gap-4 py-4">
                {project.tags.map((tag) => (
                  <span
                    className="bg-[#111111] border-2 border-[#262626] px-4 py-1 rounded-lg text-[#a78bfa] text-sm font-mono-label transition-colors duration-200 hover:border-violet-500/50 hover:text-violet-300"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="py-2 text-sm text-zinc-400 font-mono-label tracking-widest">
                {project.role}
              </p>
              <p className="py-2 text-2xl font-display font-semibold text-[#f5f5f5]">
                {project.title}
              </p>
              <p className="text-zinc-400 text-[14px] py-2">{project.desc}</p>

              <Dialog>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 ">
                  <DialogTrigger
                    className={
                      "bg-[#6746c8] text-sm  px-6 py-4 rounded-lg my-4 "
                    }
                  >
                    View Case Study
                  </DialogTrigger>
                  <a
                    href="#"
                    className=" inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold font-display text-white rounded-lg transition-opacity hover:opacity-80"
                  >
                    <ExternalLinkIcon />
                    Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className="inline-flex items-center gap-2 py-2 text-sm font-semibold font-display text-white rounded-lg transition-opacity hover:opacity-80"
                  >
                    <GithubIcon /> Github
                  </a>
                </div>

                <DialogContent
                  className={
                    "sm:max-w-3xl w-[90vw] h-[80vh] p-0 overflow-auto flex flex-col bg-[#09090B] border-zinc-800"
                  }
                >
                  <div className="w-full h-1/3 relative bg-zinc-900 shrink-0">
                    <img
                      src={project.image}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 overflow-y-auto px-8 py-6 space-y-6">
                    <div className="flex flex-row flex-wrap gap-4">
                      {project.tags.map((tag) => (
                        <span
                          className="bg-[#111111] border-2 border-[#262626] px-4 rounded-lg text-[#a78bfa]"
                          key={tag}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <DialogHeader className="space-y-3">
                      <DialogTitle className={"text-2xl font-bold text-white"}>
                        {project.title}
                      </DialogTitle>
                      <DialogDescription className={"text-white text-sm "}>
                        {project.role}
                      </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-6 font-display text-sm leading-relaxed text-zinc-300">
                      {[
                        {
                          label: "Situation",
                          text: project.star.situation,
                          color: "text-[#61dafb]",
                        },
                        {
                          label: "Task",
                          text: project.star.task,
                          color: "text-[#a78bfa]",
                        },
                        {
                          label: "Action",
                          text: project.star.action,
                          color: "text-[#34d399]",
                        },
                        {
                          label: "Result",
                          text: project.star.result,
                          color: "text-[#f59e0b]",
                        },
                      ].map((s, i) => (
                        <div key={i}>
                          <h3
                            className={`font-mono-label tracking-widest ${s.color}`}
                          >
                            {s.label}
                          </h3>
                          <p>{s.text}</p>
                        </div>
                      ))}
                      <hr className="py-4 border-zinc-700" />
                      <div className="flex gap-4">
                        <a
                          href="#home"
                          className="flex gap-2 px-4 py-2 justify-center items-center bg-[#6746c8]  font-normal rounded-lg"
                        >
                          <ExternalLinkIcon />
                          Live demo
                        </a>
                        <a
                          href=""
                          target="_blank"
                          className="flex gap-2 justify-center items-center px-4 py-2 font-normal rounded-lg"
                        >
                          <GithubIcon />
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Portfolio;
