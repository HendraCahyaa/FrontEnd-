import { GithubIcon, LinkedInIcon, MailIcon } from "@/data/icon";

export const social = [
  {
    label: "alex@alexdonovan.dev",
    href: "mailto:alex@alexdonovan.dev",
    icon: <MailIcon />,
  },
  { label: "linkedin.com/in/alexdonovan", href: "#", icon: <LinkedInIcon /> },
  { label: "github.com/alexdonovan", href: "#", icon: <GithubIcon /> },
];

function Contact() {
  return (
    <div className="mx-auto max-w-6xl px-6" id="contact">
      <div className="pt-16 flex flex-col justify-center items-center text-center">
        <h1 className=" text-4xl font-bold font-mono-label">Contact</h1>
        <p className=" leading-relaxed text-xl font-display text-gray-400 ">
          Mari terhubung dan berdiskusi
        </p>
      </div>
      <div className="grid grid-cols-1 py-4 md:grid-cols-2 gap-4">
        <form className="flex flex-col text-sm gap-2 px-5 sm:px-8 md:px-10 w-full  bg-[#111111] border-2 border-[#262626] rounded-2xl">
          <label className="pt-4 text-zinc-400 font-mono-label tracking-widest">
            NAME
          </label>
          <input
            type="text"
            name="name"
            placeholder="ENTER YOUR NAME"
            className="w-full border-2 border-[#262626] bg-[#0a0a0a] rounded-lg px-10 outline-none py-4 pl-3 pr-2 resize-y text-left transition-colors duration-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30"
          />
          <label className="pt-4 text-zinc-400 font-mono-label tracking-widest">
            EMAIL
          </label>
          <input
            type="email"
            name="email"
            placeholder="ENTER YOUR EMAIL"
            className="w-full border-2 border-[#262626] bg-[#0a0a0a] rounded-lg px-10 outline-none py-4 pl-3 pr-2 resize-y text-left transition-colors duration-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30"
          />
          <label className="pt-4 text-zinc-400 font-mono-label tracking-widest">
            MESSAGE
          </label>
          <textarea
            name="message"
            placeholder="ENTER YOUR MESSAGE"
            className="w-full border-2 border-[#262626] bg-[#0a0a0a] rounded-lg px-10 outline-none py-4 pl-3 pr-2 resize-y text-left transition-colors duration-200 focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30"
          />

          <button
            className="rounded-lg py-2 px-16 mb-4 font-bold text-lg bg-[#8c65ff] transition-all duration-200 hover:bg-violet-500 hover:-translate-y-0.5 active:translate-y-0"
            type="submit"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col gap-4">
          <div className="bg-[#111111] border-2 border-[#262626] rounded-2xl px-10 py-4">
            <p className="text-lg py-4 text-[#f5f5f5]">Response</p>
            <p className="pb-4 text-sm text-[#a1a1aa]">
              Jika kamu ingin berdiskusi mengenai project, kesempatan kerja,
              atau sekadar bertukar informasi seputar web development, jangan
              ragu untuk menghubungi saya.
            </p>
          </div>
          <div className="bg-[#111111] border-2 border-[#262626] rounded-2xl px-10 py-4">
            <p className="text-lg text-[#f5f5f5]">Find me elsewhere</p>
            <div className="space-y-3">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-3 text-[#a1a1aa] hover:text-white transition-colors duration-200 group"
                >
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-all duration-200 bg-[rgba(255,255,255,0.05)] border-2 border-[rgba(255,255,255,0.08)] group-hover:bg-violet-500/10 group-hover:border-violet-500/30">
                    {s.icon}
                  </div>
                  <span className="text-sm font-medium truncate">
                    {s.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
