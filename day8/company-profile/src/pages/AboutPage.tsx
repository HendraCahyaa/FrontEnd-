import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { team, timeline, values } from "@/types/about";
import { useNavigate } from "react-router";

function AboutPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <section className="grid md:grid-cols-2 md:gap-20 bg-[#06091a] text-white py-20 px-10">
          <div className="flex flex-col gap-8 justify-center">
            <h1 className="text-5xl md:text-6xl ">
              We Build <br /> What's Next.
            </h1>
            <p className="text-xl text-gray-400">
              NEXORA exists to help ambitious organizations move faster, build
              smarter, and create digital experiences their customers genuinely
              love.
            </p>
          </div>
          <div className="hidden md:block rounded-2xl overflow-hidden h-105">
            <img
              src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=700&h=500&fit=crop&auto=format"
              alt="NEXORA team"
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <section className="flex flex-col items-center py-20 px-10">
          <div className="py-10">
            <h2 className="text-4xl">A Timeline of Growth</h2>
          </div>
          <div className="relative">
            <div className="hidden  absolute left-30 top-0 bottom-0 w-px bg-slate-200 md:block" />
            <div className="space-y-10">
              {timeline.map((t, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="hidden shrink-0 w-24 text-right md:block">
                    <span className="font-display font-700 text-blue-600 text-lg">
                      {t.year}
                    </span>
                  </div>
                  <div className="hidden md:flex shrink-0 w-4 h-4 rounded-full border-2 border-blue-600 bg-white mt-1.5 relative z-10" />
                  <div className="bg-slate-50 rounded-xl p-6 flex-1 border border-slate-100 hover:border-blue-200 transition-colors">
                    <div className="font-display font-700 text-blue-600 text-sm mb-1">
                      {t.year}
                    </div>
                    <h3 className="font-display font-700 text-navy-900 mb-2">
                      {t.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {t.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="bg-gray-950 py-20 px-10 text-white">
          <div className="flex justify-center items-center py-6">
            <h2 className="text-4xl">Mission & Vision</h2>
          </div>
          <div className="flex flex-col md:flex-row fex-wrap gap-8 ">
            <div className="flex flex-col gap-4 border-2 border-zinc-800 rounded-2xl px-10 py-6 hover:bg-white/2 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center ">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="9" />
                  <circle cx="11" cy="11" r="4" />
                  <path
                    d="M11 2v2M11 18v2M2 11h2M18 11h2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h4>Our Mission</h4>
              <p className="text-lg">
                "To empower businesses through meaningful technology and
                exceptional digital experiences."
              </p>
            </div>
            <div className="flex flex-col gap-4 border-2 border-zinc-800 rounded-2xl px-10 py-6 hover:bg-white/2 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M11 3L13.5 8H19L14.7 11.5L16.5 17L11 13.5L5.5 17L7.3 11.5L2.5 8H8.5L11 3Z" />
                </svg>
              </div>
              <h4>Our Vission</h4>
              <p>
                "To empower businesses through meaningful technology and
                exceptional digital experiences."
              </p>
            </div>
          </div>
        </section>
        <section className="flex flex-col py-20 px-10 bg-gray-50">
          <div className="flex justify-center items-center py-4 ">
            <h2 className="text-4xl">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-4 py-8 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="p-8 flex flex-col gap-4 bg-white rounded-2xl hover:ring hover:shadow-lg ring-blue-500 hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 text-blue-400 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h4 className="font-medium">{value.name}</h4>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="flex flex-col py-20 px-10">
          <div className="flex justify-center items-center">
            <h2 className="text-4xl text-center py-8 font-medium">
              The People Behind NEXORA
            </h2>
          </div>
          <div className="grid md:grid-cols-4 py-8 gap-8">
            {team.map((t, i) => (
              <div
                key={i}
                className="overflow-hidden ring-1 ring-gray-300 rounded-2xl hover:ring-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="aspect-square overflow-hidden rounded-t-2xl ">
                  <img
                    src={t.avatar}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                  />
                </div>
                <div className="flex flex-col p-4">
                  <h4 className="font-medium">{t.name}</h4>
                  <span className="text-blue-800 py-2 font-medium">
                    {t.role}
                  </span>
                  <p className="text-gray-600">{t.bio}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full">
            <button
              onClick={() => navigate("/teams")}
              className="w-fit border border-blue-500 text-blue-700 text-lg px-8 py-3 rounded-xl flex gap-2 items-center font-medium hover:text-white hover:bg-blue-600"
            >
              Meet Our Full Team
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
        <section className="bg-blue-600 py-20 px-8 md:px-20">
          <div className="flex flex-col gap-8 justify-center items-center text-white">
            <h2 className="text-4xl text-center font-semibold">
              Ready to build something remarkable?
            </h2>
            <p className="text-xl text-gray-300 text-center">
              Let's talk about your next project.
            </p>
            <button
              onClick={() => navigate("/services")}
              className="text-blue-700 bg-white px-8 py-4  tracking-wide rounded-xl text-lg font-semibold hover:scale-[1.02]"
            >
              Explore Our Services
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default AboutPage;
