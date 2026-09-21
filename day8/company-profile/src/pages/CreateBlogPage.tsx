import { axiosInstance } from "@/lib/axios";
import { useLoginStore } from "@/stores/useLogin";
import { categories } from "@/types/blog";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router";

function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useLoginStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setLoading(true);

    try {
      const blog = {
        title,
        excerpt,
        content,
        category,
        author: user?.name || "Unknown User",
        author_avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        date: new Date(),
        image_url: coverImage,
      };

      await axiosInstance.post("/data/Blogs", blog);

      alert("Blog berhasil dibuat!");

      setTitle("");
      setExcerpt("");
      setContent("");
      setCategory("");
      setCoverImage("");

      navigate("/blog");
    } catch (error) {
      console.error(error);
      alert("Gagal membuat blog.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      {user ? (
        <div>
          <div className="flex items-center justify-between md:gap-4 my-20 py-10 bg-white ">
            <div className="px-4 md:px-10">
              <h1 className="text-2xl font-medium pb-2">Create New Article</h1>
              <p className="text-zinc-500 text-sm">
                Share your ideas, knowledge, and insights with the NEXORA
                community.
              </p>
            </div>

            <button
              onClick={() => navigate("/blog")}
              className="text-slate-500 hover:text-slate-700 text-sm flex items-center gap-2 px-10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 3L5 8l5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Blog
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="grid md:grid-cols-2 px-4 md:px-10 gap-8"
          >
            <div className="flex flex-col gap-8">
              <div className="border border-gray-300 bg-white px-8 py-4 rounded-2xl flex flex-col gap-2">
                <label className="text-sm font-medium">Article Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  placeholder="Write a compelling headline..."
                  className="border-zinc-300 px-6 py-4 rounded-xl border placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all "
                />
              </div>
              <div className="border border-gray-300 bg-white px-8 py-4 rounded-2xl flex flex-col gap-2">
                <label className="text-sm font-medium">Short Excerpt</label>
                <input
                  type="text"
                  value={excerpt}
                  required
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="Write a short summary that appears on the blog listing page..."
                  className="border border-zinc-300 px-6 py-4 rounded-xl placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />
              </div>
              <div className="border border-gray-300 bg-white px-8 py-4 rounded-2xl flex flex-col gap-2">
                <label>Content</label>
                <hr className="border-zinc-400" />
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog..."
                  required
                  className="border-zinc-300 px-6 py-4 rounded-xl h-100 border placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                ></textarea>
              </div>
            </div>

            <div className=" flex flex-col gap-2   rounded-2xl">
              <div className="bg-white rounded-2xl px-10 py-6 mb-6 border border-gray-300">
                <div>
                  <h4 className="text-lg pb-6">Publishing</h4>

                  <div className="flex flex-col pb-4">
                    <label className="text-sm text-gray-600 font-semibold tracking-wide">
                      CATEGORY
                    </label>
                    <select
                      value={category}
                      required
                      onChange={(e) => setCategory(e.target.value)}
                      className="border border-gray-300 py-4 rounded-xl px-2 mt-2  appearance-none placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    >
                      <option value="">Select category...</option>
                      {categories.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-4 pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className=" py-4 bg-blue-700 text-white font-medium rounded-2xl"
                    >
                      {loading ? "Publishing..." : "Publish Article"}
                    </button>

                    <button
                      type="button"
                      onClick={() => navigate("/blog")}
                      className="hover:text-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-2xl border border-slate-200 p-6">
                  <h4 className="font-display font-700 text-navy-900 mb-5">
                    Cover Image
                  </h4>
                  <div className="h-70 border border-dashed border-slate-200 rounded-xl overflow-hidden flex items-center justify-center bg-slate-50">
                    {coverImage ? (
                      <img
                        src={coverImage}
                        alt="Cover preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-slate-400">
                        <p className="text-sm">Cover image preview</p>
                        <p className="text-xs mt-1">Paste an image URL below</p>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 ">
                    <input
                      type="url"
                      value={coverImage}
                      onChange={(e) => setCoverImage(e.target.value)}
                      placeholder="Or paste an image URL..."
                      className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="w-full max-w-md text-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
              {/* Icon */}
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-blue-50 flex items-center justify-center">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  className="text-blue-600"
                >
                  <rect x="4" y="10" width="16" height="11" rx="2" />
                  <path d="M8 10V7a4 4 0 018 0v3" strokeLinecap="round" />
                </svg>
              </div>

              {/* Text */}
              <h1 className="text-2xl font-semibold text-slate-900 mb-3">
                Login Required
              </h1>

              <p className="text-sm leading-relaxed text-slate-500 mb-8">
                You need to be logged in before you can create and publish an
                article on the NEXORA blog.
              </p>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => navigate("/login")}
                  className="flex-1 inline-flex items-center justify-center gap-2
            bg-blue-600 hover:bg-blue-700
            text-white font-medium
            px-5 py-3 rounded-xl
            transition-colors"
                >
                  Login
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
                  onClick={() => navigate("/blog")}
                  className="flex-1
            bg-slate-100 hover:bg-slate-200
            text-slate-700 font-medium
            px-5 py-3 rounded-xl
            transition-colors"
                >
                  Back to Blog
                </button>
              </div>
            </div>

            {/* Small helper text */}
            <p className="mt-5 text-xs text-slate-400">
              Don't have an account? You can create one from the login page.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
export default CreateBlogPage;
