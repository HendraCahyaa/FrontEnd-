import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/data/icon";

function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        backgroundColor: "#0a0a0a",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <a
              href="#"
              className="font-display font-bold text-lg text-white tracking-tight"
            >
              <span>HC</span>
            </a>
            <p className="font-mono-label text-[11px] text-slate-600 tracking-widest uppercase">
              Full-Stack Web Developer
            </p>
          </div>
          <div className="flex items-center gap-3">
            {[
              { icon: <GithubIcon />, href: "#", label: "GitHub" },
              { icon: <LinkedInIcon />, href: "#", label: "LinkedIn" },
              { icon: <TwitterIcon />, href: "#", label: "X / Twitter" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <span className="font-mono-label text-[11px] text-slate-600">
              &copy; {new Date().getFullYear()} HendraCahya
            </span>
            <a
              href="#home"
              aria-label="Back to top"
              className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:-translate-y-0.5 transition-all duration-200"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 15l-6-6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
