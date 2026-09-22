import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { clients, reasons, services, stats, testimonials } from "@/types/home";
import { useNavigate } from "react-router";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-20 bg-[#06091a] text-white px-5 md:px-10 py-20">
          <div className="flex flex-col flex-wrap gap-8 pr-10">
            <h1 className="text-5xl md:text-6xl">
              Building Digital Experiences That Move Businesses Forward.
            </h1>
            <p className="text-zinc-300 text-lg md:text-xl">
              NEXORA helps ambitious businesses transform ideas into powerful
              digital products through technology, design, and relentless
              innovation.
            </p>
            <div className="flex flex-col justify-start items-start md:flex-row gap-4 md:gap-10 md:items-center font-semibold">
              <button
                onClick={() => navigate("/services")}
                className="flex items-center gap-4 px-6 py-4 bg-blue-600 rounded-xl hover:bg-blue-700 transition-all text-lg hover:scale-[1.02]"
              >
                Explore Our Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                onClick={() => navigate("/about")}
                className="border border-gray-700 px-6 py-4 rounded-xl  hover:border-gray-500"
              >
                Talk to Us
              </button>
            </div>
          </div>
          <div className="hidden md:flex justify-center rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=700&h=500&fit=crop&auto=format"
              alt="Nexora team work"
              className="w-full h-120 object-cover"
            />
          </div>
        </section>
        <section>
          <div className="p-10 flex flex-col gap-8 justify-center items-center">
            <h4 className="text-sm text-gray-500">
              TRUSTED BY GROWING BUSINESSES
            </h4>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-20 text-lg text-gray-300 font-medium">
              {clients.map((client, i) => (
                <span key={i} className="hover:text-gray-500">
                  {client}
                </span>
              ))}
            </div>
          </div>
          <hr className="border-zinc-300 py-4" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 md:pt-20 pb-20 px-8">
            <div className="flex flex-col gap-8 pr-16">
              <h2 className="text-3xl md:text-4xl font-normal md:font-medium">
                Technology With Purpose.
              </h2>
              <p className="text-lg text-gray-500">
                We are a full-service digital technology company that partners
                with ambitious organizations to build products that make a real
                difference. From startups to enterprises, we bring clarity,
                craft, and momentum to every engagement.
              </p>
              <p className="text-[16px] text-gray-500">
                Founded in San Francisco in 2018, NEXORA has grown into a
                globally distributed team of engineers, designers, and
                strategists united by a single purpose — building digital things
                that matter.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:mx-20">
              {stats.map((stat, i) => (
                <div
                  className="bg-gray-50 hover:bg-white hover:ring hover:ring-zinc-200  border-blue-500 rounded-xl px-10 md:px-12 py-6 gap-2 flex flex-col justify-center "
                  key={i}
                >
                  <span className="text-3xl md:text-4xl">{stat.value}</span>
                  <span className="text-gray-600 text-[14px] md:text-lg">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="flex flex-col bg-zinc-50 pt-10">
          <h2 className="text-center text-3xl md:text-4xl py-10 font-normal md:font-medium">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 pb-20">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl pb-4 pt-8 px-6 flex flex-col gap-4 hover:ring hover:shadow-lg ring-blue-500 hover:-translate-y-1 transition-all group "
              >
                <p className="bg-blue-50 w-fit p-4 rounded-xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                  {service.icon}
                </p>
                <h4 className="text-lg">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
                <button
                  onClick={() => navigate("/services")}
                  className="text-sm flex gap-1 items-center text-blue-600 font-bold hover:text-blue-700"
                >
                  Lean More
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
            ))}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 px-10 py-20">
          <div>
            <div className="rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1758518731468-98e90ffd7430?w=700&h=600&fit=crop&auto=format"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl">
                A partner built for your ambition.
              </h2>
              <p className="text-slate-600">
                We go beyond execution — we think deeply about your business,
                your users, and the technology that connects them.
              </p>
              <div className="space-y-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7l3.5 3.5L12 3"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-display font-700 text-navy-900 mb-1">
                        {reason.title}
                      </h4>
                      <p className="text-slate-500 text-sm leading-relaxed">
                        {reason.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="p-10 bg-[#06091a] text-white">
          <div>
            <h2 className="text-3xl md:text-[46px] text-center py-10 font-normal md:font-medium">
              Trusted by Growing Businesses
            </h2>
          </div>
          <div className="flex flex-col md:flex-row pb-16 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="20"
                      height="20"
                      viewBox="0 0 16 16"
                      fill="#f59e0b"
                    >
                      <path d="M8 1l1.8 3.6L14 5.3l-3 3 .7 4.2L8 10.5 4.3 12.5l.7-4.2-3-3 4.2-.7L8 1z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-slate-700"
                  />
                  <div>
                    <div className="font-display font-600 text-white text-sm">
                      {t.name}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {t.title} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="bg-white pt-30 pb-20 px-4 md:px-10">
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-4xl md:text-6xl font-semibold text-center">
              Have an idea worth building?
            </h1>
            <p className="text-xl text-slate-600 text-center">
              Let's turn your vision into a digital product that makes an
              impact.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="flex gap-4 items-center bg-black text-white  px-10 py-4 font-semibold rounded-xl hover:bg-gray-900 transition-all text-lg hover:scale-[1.02]"
            >
              Start a Conversation
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h12M11 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
