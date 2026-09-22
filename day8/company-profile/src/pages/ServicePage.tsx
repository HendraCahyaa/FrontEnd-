import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { plans, services, steps, testimonials } from "@/types/service";
import { useNavigate } from "react-router";

function ServicePage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        <section className="bg-[#06091a] text-white my-10 py-30 px-4 flex flex-col gap-4 justify-center items-center">
          <h1 className="text-5xl leading-16 text-center font-medium">
            Digital Solutions Built <br /> Around Your Business.
          </h1>
          <p className="text-zinc-300 text-lg text-center">
            From concept to launch and beyond — we bring strategy, design, and
            <br />
            engineering together to deliver products that perform.
          </p>
        </section>
        <section className="px-6 md:px-10 py-20 ">
          {services.map((s, i) => (
            <div
              key={s.name}
              className={`grid md:grid-cols-2 gap-12 mb-10 items-center ${i % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}
            >
              <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="w-14 h-14 rounded-2xl bg-blue-600/8 text-blue-600 flex items-center justify-center mb-6">
                  {s.icon}
                </div>
                <h2 className="font-display text-3xl font-800 text-gray-900 tracking-tight mb-3">
                  {s.name}
                </h2>
                <p className="text-blue-600 font-medium mb-4">{s.tagline}</p>
                <p className="text-slate-500 leading-relaxed mb-8">{s.desc}</p>
                <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
                  Start a Conversation
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
              </div>
              <div className="grid grid-cols-2 gap-4 md:gap-2 px-4 md:px-12 py-4 rounded-2xl bg-gray-50">
                <div className="flex flex-col flex-wrap gap-4 ">
                  <span className="text-sm tracking-wide">KEY FEATURE</span>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {s.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col flex-wrap gap-4">
                  <span className="text-sm tracking-wide">DELIVERABLES</span>
                  <ul className="space-y-2.5 text-sm text-gray-700">
                    {s.deliverables.map((del) => (
                      <li key={del} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                        {del}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="py-20 px-10 bg-gray-50">
          <div className="py-4">
            <h2 className="text-center text-4xl font-medium">Our Process</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mt-20">
            {steps.map((step, i) => (
              <div
                key={i}
                className="flex flex-col flex-wrap gap-4 bg-white p-8 rounded-2xl hover:ring hover:ring-blue-400 hover:shadow-lg"
              >
                <h4 className="text-5xl text-gray-200">{step.num}</h4>
                <span className="font-medium">{step.name}</span>
                <p className="text-zinc-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="py-20 px-10">
          <div className="flex flex-col justify-center items-center gap-4 py-6">
            <h2 className="text-4xl font-medium text-center">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-500 text-center">
              Every project is different. These ranges give you a starting point
              for planning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((p, i) => (
              <div
                key={i}
                className="ring ring-gray-200 rounded-2xl p-8 flex flex-col gap-4 hover:ring-blue-400 hover:shadow-lg"
              >
                <span className="text-lg font-semibold">{p.name}</span>
                <p className="text-gray-500">{p.desc}</p>
                <span className="text-4xl py-4 font-medium">
                  {p.price}
                  <span className="text-lg font-normal pl-4">{p.period}</span>
                </span>
                <ul>
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-4 text-gray-500 py-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="text-blue-600"
                      >
                        <path
                          d="M2 8l4 4 8-8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto">
                  <button className="ring ring-blue-500 text-blue-700 font-semibold hover:bg-blue-700 hover:text-white rounded-xl py-4  w-full">
                    {p.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-10 md:px-20 py-20 bg-gray-50">
          <div className="flex flex-col justify-center items-center mb-16">
            <h2 className="text-4xl font-medium">What Our Clients Say</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-slate-100"
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
                <p className="text-slate-600 leading-relaxed mb-8 text-sm">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex  items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover bg-slate-100"
                  />
                  <div>
                    <div className="font-display font-600 text-navy-900 text-sm">
                      {t.name}
                    </div>
                    <div className="text-slate-500 text-xs">
                      {t.title} · {t.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="px-10 py-20 bg-gray-950 text-white">
          <div className="flex flex-col justify-center items-center gap-4 pb-10">
            <h2 className="text-5xl font-medium text-center leading-14">
              Let's build something remarkable.
            </h2>
            <p className="text-xl text-gray-400 pb-6 text-center">
              Every great digital product starts with a conversation.
            </p>
            <button
              onClick={() => navigate("/about")}
              className="flex gap-2 items-center bg-blue-600 hover:bg-blue-500 hover:scale-[1.02] transition-all py-4 px-8 rounded-xl text-lg font-medium"
            >
              Get Started
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
export default ServicePage;
