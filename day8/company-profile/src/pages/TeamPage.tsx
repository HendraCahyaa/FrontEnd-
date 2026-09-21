import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { teamRoles, type RandomUserResponse, type Team } from "@/types/team";
import { useEffect, useState } from "react";

function TeamPage() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=9");

        const data: RandomUserResponse = await response.json();

        setTeams(data.results);
      } catch (error) {
        console.error("Failed to fetch users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center border h-full">
        <p>Loading team members...</p>
        <Loading />
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <div>
        <section className="bg-[#06091a] text-white py-30 px-4 md:px-10 flex flex-col justify-center items-center gap-4">
          <h1 className="text-5xl md:text-6xl leading-tight tracking-tight text-center">
            Meet the People <br />
            Behind NEXORA.
          </h1>
          <p className="text-gray-400 text-center text-xl">
            A multidisciplinary team of designers, engineers, strategists, and{" "}
            <br />
            problem solvers building the future of digital products.
          </p>
        </section>
        <section className="px-10 py-20 grid md:grid-cols-3 gap-8">
          {teams.map((t, i) => {
            const teamInfo = teamRoles[i % teamRoles.length];
            return (
              <div
                key={i}
                className="overflow-hidden ring-1 ring-gray-300 rounded-2xl hover:ring-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="aspect-square overflow-hidden rounded-t-2xl ">
                  <img
                    src={t.picture.large}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 "
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <h4>
                    {t.name.first}
                    {t.name.last}
                  </h4>
                  <span className="text-blue-700 font-medium text-sm pb-4">
                    {teamInfo.role.toUpperCase()}
                  </span>
                  <p className="text-gray-500 pb-4">{teamInfo.bio}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-600 text-xs transition-colors"
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="currentColor"
                    >
                      <path d="M4 1.5C4 2.3 3.3 3 2.5 3S1 2.3 1 1.5 1.7 0 2.5 0 4 0.7 4 1.5ZM1 4.5H4V13.5H1V4.5ZM5.5 4.5H8.3V5.8C8.7 5.1 9.6 4.3 11 4.3 13.3 4.3 14 5.8 14 8.1V13.5H11.1V8.5C11.1 7.4 10.7 6.7 9.7 6.7 8.8 6.7 8.3 7.3 8.3 8.5V13.5H5.5V4.5Z" />
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            );
          })}
        </section>
        <section className="px-10 py-20 bg-gray-50 text-black">
          <div className="flex flex-col justify-center items-center gap-4 pb-10">
            <h2 className="text-4xl font-normal md:font-medium text-center ">
              Want to build the future with us?
            </h2>
            <p className="text-xl text-center text-gray-500 pb-6">
              We're always looking for talented people who care deeply about
              craft and impact.
            </p>
            <a
              href="#"
              className="flex gap-2 items-center bg-blue-600 py-4 px-8 rounded-xl text-white text-lg font-medium hover:bg-blue-500 hover:scale-[1.02] transition-all"
            >
              Join Our Team
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M3 9h12M11 5l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
export default TeamPage;
