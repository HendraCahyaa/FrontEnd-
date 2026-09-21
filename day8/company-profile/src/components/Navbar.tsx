import { useLoginStore } from "@/stores/useLogin";
import type { Page } from "@/types/navbar";
import { useState } from "react";
import { useNavigate } from "react-router";

const navLinks: { label: string; page: Page }[] = [
  { label: "Home", page: "/home" },
  { label: "About Us", page: "/about" },
  { label: "Services", page: "/services" },
  { label: "Teams", page: "/teams" },
  { label: "Blog", page: "/blog" },
];
function Navbar() {
  const { user, logout } = useLoginStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100">
      <div className="px-6 md:py-2 mx-auto">
        <div className="flex items-center justify-between h-16 ">
          <div>
            <button
              className="flex items-center gap-2 group"
              onClick={() => navigate("/home")}
            >
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
              <span className="text-xl font-medium tracking-tight text-zinc-900">
                NEXORA
              </span>
            </button>
          </div>
          <nav className="hidden md:flex gap-4 ">
            {navLinks.map(({ label, page }) => (
              <button
                onClick={() => navigate(page)}
                key={page}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  window.location.pathname === page
                    ? "text-blue-600 bg-blue-600/8"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>
          <div className="hidden md:flex gap-4 items-center">
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-lg bg-red-600 font-medium hover:bg-red-700 text-white"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={() => navigate("/login")}
                className="px-4 py-2 rounded-lg  text-black font-medium hover:text-gray-700"
              >
                Login
              </button>
            )}
            <button
              onClick={() => navigate("/services")}
              className="bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded-lg text-white"
            >
              Get Started
            </button>
          </div>
          <button
            className="md:hidden p-2 text-slate-600 hover:text-slate-900"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M5 5L15 15M15 5L5 15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M3 5H17M3 10H17M3 15H17"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
        {mobileOpen && (
          <div className="md:hidden py-4 border-t border-slate-100">
            {navLinks.map(({ label, page }) => (
              <button
                onClick={() => navigate(page)}
                key={page}
                className={`w-full text-start px-4 py-2 rounded-lg font-medium transition-colors ${
                  window.location.pathname === page
                    ? "text-blue-600 bg-blue-600/8"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {label}
              </button>
            ))}
            <div className="grid grid-cols-2 gap-4 px-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg bg-red-600 font-medium hover:bg-red-700 text-white"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className="px-4 py-2 rounded-lg  text-black font-medium hover:text-gray-700"
                >
                  Login
                </button>
              )}
              <button
                onClick={() => navigate("/services")}
                className="bg-blue-600 hover:bg-blue-700 font-medium py-2 px-4 rounded-lg text-white"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
export default Navbar;
