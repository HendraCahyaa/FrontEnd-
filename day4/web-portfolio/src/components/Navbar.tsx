import { href } from "@/data/template";
import { useEffect, useState } from "react";
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/6" : ""
      }`}
      style={
        scrolled
          ? { background: "rgba(10,10,10,0.88)", backdropFilter: "blur(20px)" }
          : {}
      }
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-bold text-lg tracking-tight text-white select-none"
        >
          <span>HC</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {href.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-slate-400 hover:text-white transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold font-display text-white rounded-lg transition-all duration-200 hover:opacity-90"
          style={{ background: "#8b5cf6" }}
        >
          Contact
        </a>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2 text-slate-400 hover:text-white"
        >
          <span
            className="block w-5 h-px bg-current transition-all duration-200"
            style={
              open ? { transform: "rotate(45deg) translate(4px, 4px)" } : {}
            }
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-200"
            style={open ? { opacity: 0 } : {}}
          />
          <span
            className="block w-5 h-px bg-current transition-all duration-200"
            style={
              open ? { transform: "rotate(-45deg) translate(4px, -4px)" } : {}
            }
          />
        </button>
      </nav>

      <div
        className="md:hidden border-t border-white/6 px-6 flex flex-col gap-1 overflow-hidden transition-all duration-300"
        style={{
          maxHeight: open ? "400px" : "0",
          paddingTop: open ? "16px" : "0",
          paddingBottom: open ? "16px" : "0",
          background: "rgba(10,10,10,0.96)",
          backdropFilter: "blur(20px)",
        }}
      >
        {href.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="py-2.5 text-sm text-slate-400 hover:text-white transition-colors font-medium"
          >
            {link}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-2 py-2.5 text-sm font-semibold font-display text-white text-center rounded-lg"
          style={{ background: "#8b5cf6" }}
        >
          Let's Talk
        </a>
      </div>
    </header>
  );
}

export default Navbar;
