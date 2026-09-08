import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { reasons, services, stats, testimonials } from "@/types/home";

function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <div className="grid grid-cols-2 gap-20 bg-black text-white px-10 py-20">
          <div className="flex flex-col flex-wrap gap-8 pr-10">
            <h1 className="text-6xl">
              Building Digital Experiences That Move Businesses Forward.
            </h1>
            <p className="text-zinc-300 text-xl">
              NEXORA helps ambitious businesses transform ideas into powerful
              digital products through technology, design, and relentless
              innovation.
            </p>
            <div className="flex gap-10 items-center font-semibold">
              <a href="" className="px-6 py-4 bg-blue-600 rounded-xl ">
                Explore Our Services
              </a>
              <a
                href=""
                className="border-2 border-gray-800 px-6 py-4 rounded-xl"
              >
                Talk to Us
              </a>
            </div>
          </div>
          <div className="flex justify-center rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1551135049-8a33b5883817?w=700&h=500&fit=crop&auto=format"
              alt="Nexora team work"
              className="w-full h-120 object-cover"
            />
          </div>
        </div>
        <div>
          <div className="p-10 flex flex-col gap-8 justify-center items-center">
            <h4 className="text-sm text-gray-400">
              TRUSTED BY GROWING BUSINESSES
            </h4>
            <div className="flex gap-20 text-lg text-gray-300">
              <span>Vertex</span>
              <span>Lumina</span>
              <span>Orbit</span>
              <span>Altura</span>
              <span>Nova Labs</span>
            </div>
          </div>
          <hr className="border-zinc-300 py-4" />
          <div className="grid grid-cols-2 gap-10 pt-20 pb-20 px-8">
            <div className="flex flex-col gap-8 pr-16">
              <h2 className="text-4xl">Technology With Purpose.</h2>
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
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  className="bg-gray-50 rounded-xl px-12 flex flex-col justify-center "
                  key={i}
                >
                  <span className="text-4xl">{stat.value}</span>
                  <span className="text-gray-600">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-blue-50 pt-10">
          <h2 className="text-center text-4xl py-10">What We Do</h2>
          <div className="grid grid-cols-4 gap-6 px-10 pb-20">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl pb-4 pt-8 px-6 flex flex-col gap-4"
              >
                <p className="bg-blue-50 w-fit p-4 rounded-xl text-blue-500">
                  {service.icon}
                </p>
                <h4 className="text-lg">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
                <a href="" className="text-sm">
                  Lean More
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-16 px-10 py-20">
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
              <h2 className="text-5xl">A partner built for your ambition.</h2>
              <p>
                We go beyond execution — we think deeply about your business,
                your users, and the technology that connects them.
              </p>
              <div className="space-y-6">
                {reasons.map((reason, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-electric-600 text-white flex items-center justify-center shrink-0 mt-0.5 ">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="text-white bg-blue-600 rounded-sm"
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
        </div>
        <div className="p-10 bg-black text-white">
          <div>
            <h2 className="text-4xl text-center py-8">
              Trusted by Growing Businesses
            </h2>
          </div>
          <div className="flex flex-row pb-16 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/8 transition-colors"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <svg
                      key={j}
                      width="16"
                      height="16"
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
        </div>
        <div className="bg-white pt-30 pb-20 px-10">
          <div className="flex flex-col justify-center items-center gap-8">
            <h1 className="text-6xl font-semibold">
              Have an idea worth building?
            </h1>
            <p className="text-xl">
              Let's turn your vision into a digital product that makes an
              impact.
            </p>
            <a
              href=""
              className="bg-black text-white px-10 py-4 font-semibold rounded-xl"
            >
              Start a Conversation
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default HomePage;
