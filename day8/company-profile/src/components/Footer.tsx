import type { Page } from "@/types/navbar";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#06091a] text-white">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-10 pt-12 px-6 md:p-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M2 8L6 4L10 8L14 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L6 8L10 12L14 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity="0.6"
                />
              </svg>
            </div>
            <span className="font-display font-700 text-xl tracking-tight">
              NEXORA
            </span>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Building digital experiences that move businesses forward through
            technology, design, and innovation.
          </p>
          <div className="flex flex-wrap gap-4">
            {["twitter", "linkedin", "github", "instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="w-9 h-9 rounded-lg bg-white/8 hover:bg-blue-600 flex items-center justify-center transition-colors"
              >
                <SocialIcon name={social} />
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h4 className="font-display font-600 text-sm text-white  uppercase tracking-widest">
            COMPANY
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Home", page: "/home" as Page },
              { label: "About Us", page: "/about" as Page },
              { label: "Services", page: "/services" as Page },
              { label: "Our Teams", page: "/teams" as Page },
              { label: "Blog", page: "/blog" as Page },
            ].map(({ label, page }) => (
              <li key={page}>
                <button
                  onClick={() => navigate(page)}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h4 className="font-display font-600 text-sm text-white uppercase tracking-widest">
            SERVICES
          </h4>
          <ul className="space-y-3">
            {[
              "Web Development",
              "Mobile Development",
              "UI/UX Design",
              "Cloud Solutions",
              "Digital Strategy",
            ].map((s) => (
              <li key={s}>
                <button
                  onClick={() => navigate("services")}
                  className="text-slate-400 hover:text-white text-sm transition-colors"
                >
                  {s}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap flex-col text-zinc-300 gap-4">
          <h4 className="font-display font-600 text-sm text-white uppercase tracking-widest">
            Contact
          </h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-cyan-500"
              >
                <path
                  d="M2 4L8 9L14 4M2 4H14V12H2V4Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              hello@nexora.io
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-cyan-500"
              >
                <path
                  d="M8 1.5C5.5 1.5 3.5 3.5 3.5 6C3.5 9 8 14.5 8 14.5C8 14.5 12.5 9 12.5 6C12.5 3.5 10.5 1.5 8 1.5ZM8 7.5C7.2 7.5 6.5 6.8 6.5 6C6.5 5.2 7.2 4.5 8 4.5C8.8 4.5 9.5 5.2 9.5 6C9.5 6.8 8.8 7.5 8 7.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                />
              </svg>
              San Francisco, CA
            </li>
            <li className="flex items-center gap-3 text-slate-400 text-sm">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-cyan-500"
              >
                <path
                  d="M3 3.5C3 3.5 3.5 8 6 10.5C8.5 13 13 13.5 13 13.5L11.5 11L9.5 10.5L8.5 11.5C8.5 11.5 6.5 10.5 5.5 9.5C4.5 8.5 3.5 6.5 3.5 6.5L4.5 5.5L4 3.5L2 2.5L3 3.5Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +1 (415) 555-0192
            </li>
          </ul>
        </div>
      </div>
      <hr className=" border-gray-800 my-4 md:py-4 " />
      <div className="pt-2 pb-10 px-10 flex flex-col gap-4 md:flex-row justify-between text-zinc-500">
        <div>
          <p className="text-slate-500 text-sm text-center">
            © 2026 NEXORA. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="text-slate-500 hover:text-white text-sm transition-colors"
          >
            Cookies
          </a>
        </div>
      </div>
    </footer>
  );
}
export default Footer;

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    twitter: (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M13 2C12.4 2.3 11.8 2.5 11.1 2.6C11.8 2.2 12.3 1.5 12.5 0.8C11.8 1.2 11.1 1.4 10.3 1.6C9.7 0.9 8.8 0.5 7.8 0.5C5.9 0.5 4.4 2 4.4 3.9C4.4 4.2 4.4 4.4 4.5 4.7C1.8 4.5 0.4 3 0.4 3C0 3.7 0.2 4.6 0.8 5.1C0.3 5.1 -0.1 4.9 -0.5 4.7V4.8C-0.5 6.4 0.6 7.8 2.2 8.1C1.9 8.2 1.6 8.2 1.3 8.2C1.1 8.2 0.9 8.2 0.7 8.1C1.1 9.5 2.4 10.5 3.9 10.5C2.7 11.4 1.2 12 -0.4 12C-0.7 12 -1 12 -1.3 11.9C0.3 12.9 2.2 13.5 4.2 13.5C10.8 13.5 14.4 8.3 14.4 3.7V3.3C15.1 2.8 15.7 2.2 16.2 1.5C15.5 1.8 14.8 2 14 2.1C14.7 1.6 15.3 0.8 15.5 0L13 2Z"
          fill="currentColor"
          opacity="0.8"
        />
      </svg>
    ),
    linkedin: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="currentColor"
        opacity="0.8"
      >
        <path d="M3.2 1.5C3.2 2.3 2.6 3 1.6 3 0.7 3 0 2.3 0 1.5 0 0.7 0.7 0 1.6 0 2.6 0 3.2 0.7 3.2 1.5ZM0.1 4.5H3.1V13.5H0.1V4.5ZM5.2 4.5H8V5.8C8.4 5.1 9.3 4.3 10.7 4.3 13 4.3 13.9 5.8 13.9 8.1V13.5H10.9V8.5C10.9 7.4 10.5 6.7 9.5 6.7 8.6 6.7 8 7.3 8 8.5V13.5H5.2V4.5Z" />
      </svg>
    ),
    github: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="currentColor"
        opacity="0.8"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7 0C3.13 0 0 3.13 0 7c0 3.1 2.01 5.72 4.8 6.65.35.06.48-.15.48-.34 0-.17-.01-.61-.01-1.2-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.03-.78-1.03-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.63 1.07 1.65.76 2.05.58.06-.46.25-.76.45-.94-1.55-.18-3.19-.78-3.19-3.47 0-.76.27-1.39.72-1.88-.07-.18-.31-.89.07-1.85 0 0 .59-.19 1.93.72A6.67 6.67 0 017 3.5c.6 0 1.2.08 1.77.24 1.34-.91 1.93-.72 1.93-.72.38.96.14 1.67.07 1.85.45.49.72 1.12.72 1.88 0 2.7-1.64 3.28-3.19 3.46.25.22.48.65.48 1.32 0 .95-.01 1.72-.01 1.95 0 .19.13.41.49.34C11.99 12.72 14 10.1 14 7c0-3.87-3.13-7-7-7z"
        />
      </svg>
    ),
    instagram: (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        opacity="0.8"
      >
        <rect x="1" y="1" width="12" height="12" rx="3" />
        <circle cx="7" cy="7" r="3" />
        <circle cx="10.5" cy="3.5" r="0.8" fill="currentColor" stroke="none" />
      </svg>
    ),
  };
  return <>{icons[name]}</>;
}
