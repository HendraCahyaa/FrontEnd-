import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { axiosInstance } from "@/lib/axios";
import {
  categories,
  categoryColors,
  type Blog,
  type Category,
} from "@/types/blog";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const getBlogs = async () => {
    try {
      const { data } = await axiosInstance.get<Blog[]>("/data/Blogs");
      setBlogs(data);
    } catch (error) {
      console.log("error");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  if (loading) {
    return (
      <div className="flex items-center justify-center border h-full">
        <p>Loading blogs...</p>
        <Loading />
      </div>
    );
  }

  const articlesPerPage = 6;
  const filtered = blogs.filter((a) => {
    const matchCategory =
      activeCategory === "All" || a.category === activeCategory;

    const matchSearch =
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });
  const totalPages = Math.ceil(filtered.length / articlesPerPage);

  const paginatedBlogs = filtered.slice(
    (page - 1) * articlesPerPage,
    page * articlesPerPage,
  );
  return (
    <div className="font-sans">
      <Navbar />
      <section className="relative pt-32 pb-24 bg-navy-950 overflow-hidden">
        <div className="absolute inset-0 bg-gray-950" />
        <div className="absolute inset-0 bg-linear-to-br  bg-[#06091a]" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-800 text-white leading-tight tracking-tight mb-6">
            Insights, Ideas
            <br />& Perspectives.
          </h1>
          <p className="text-slate-400 text-xl leading-relaxed max-w-2xl mx-auto">
            Thinking from the NEXORA team on technology, design, product
            strategy, and the future of digital.
          </p>
        </div>
      </section>

      <section className="py-8 border-b border-slate-100 sticky top-16 bg-white/95 backdrop-blur-sm z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-72">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle
                cx="7"
                cy="7"
                r="5"
                stroke="currentColor"
                strokeWidth="1.3"
              />
              <path
                d="M11 11l3 3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
              />
            </svg>
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
            />
          </div>
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setActiveCategory(c);
                  setPage(1);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === c
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <h2 className="font-display font-700 text-navy-900 text-sm uppercase tracking-widest mb-8">
          {filtered.length} Article{filtered.length !== 1 ? "s" : ""}
        </h2>

        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94a3b8"
                strokeWidth="1.5"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="font-display font-700 text-navy-900 mb-2">
              No articles found
            </h3>
            <p className="text-slate-500 text-sm">
              Try adjusting your search or filter.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {paginatedBlogs.map((a) => (
              <div
                key={a.objectId}
                className="group rounded-2xl overflow-hidden border border-slate-100 hover:border-blue-300 hover:shadow-xl transition-all bg-white flex flex-col"
              >
                <div className="h-48 overflow-hidden bg-slate-100">
                  <img
                    src={a.image_url}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span
                    className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColors[a.category as Category]}`}
                  >
                    {a.category}
                  </span>
                  <h3 className="font-display font-700 text-navy-900 mb-2 leading-tight flex-1">
                    {a.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5 line-clamp-2">
                    {a.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img
                        src={a.author_avatar}
                        alt={a.author}
                        className="w-7 h-7 rounded-full object-cover bg-slate-100"
                      />
                      <div>
                        <div className="text-navy-900 text-xs font-medium">
                          {a.author}
                        </div>
                        <div className="text-slate-400 text-xs">
                          Published on{" "}
                          {new Date(a.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => navigate(`/blogs/${a.objectId}`)}
                      className="text-blue-600 text-xs font-semibold hover:text-blue-700 inline-flex items-center gap-1"
                    >
                      Read
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M2 6h8M7 3l3 3-3 3"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-center gap-2">
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M9 11L5 7l4-4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`w-9 h-9 rounded-lg border text-sm font-medium transition-colors ${
                      page === pageNumber
                        ? "bg-blue-600 text-white border-blue-600"
                        : "border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                    }`}
                  >
                    {pageNumber}
                  </button>
                ),
              )}

              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="w-9 h-9 rounded-lg border border-slate-200 flex items-center justify-center text-slate-500 hover:border-blue-400 hover:text-blue-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M5 3l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display font-700 text-navy-900 text-xl mb-1 font-medium">
              Have something to share?
            </h3>
            <p className="text-slate-500 text-sm">
              Write for the NEXORA blog and share your expertise with our
              community.
            </p>
          </div>
          <button
            onClick={() => navigate("/create-blogs")}
            className="shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-xl transition-all"
          >
            Write an Article
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
      </section>
      <Footer />
    </div>
  );
}
export default BlogPage;
