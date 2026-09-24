import { axiosInstance } from "@/lib/axios";
import { useLoginStore } from "@/stores/useLogin";
import { categories } from "@/types/blog";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router";

function CreateBlogPage() {
  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const [coverImage, setCoverImage] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [imageMode, setImageMode] = useState<"file" | "url">("file");

  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const { user } = useLoginStore();

  const navigate = useNavigate();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      alert("Only JPG, PNG, and WEBP images are allowed.");
      return;
    }

    const maxSize = 5 * 1024 * 1024;

    if (file.size > maxSize) {
      alert("Image size must be less than 5MB.");
      return;
    }

    setImageFile(file);

    const previewUrl = URL.createObjectURL(file);

    setCoverImage(previewUrl);

    setImageMode("file");
  };

  const removeImage = () => {
    setCoverImage("");
    setImageFile(null);
  };

  const uploadImage = async (): Promise<string> => {
    if (!imageFile) {
      return "";
    }

    try {
      setUploadingImage(true);

      const formData = new FormData();

      formData.append("file", imageFile);

      const { data } = await axiosInstance.post(
        "/files/blog-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );

      return data.fileURL;
    } catch (error) {
      console.error("Image upload failed:", error);

      throw new Error("Failed to upload image.");
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!user) {
      navigate("/login");
      return;
    }

    if (!coverImage) {
      alert("Please select a cover image.");
      return;
    }

    setLoading(true);

    try {
      let imageUrl = coverImage;

      if (imageFile) {
        imageUrl = await uploadImage();
      }

      if (!imageUrl) {
        throw new Error("Image URL is empty.");
      }

      const blog = {
        title: title.trim(),
        excerpt: excerpt.trim(),
        content,
        category,

        author: user.name || "Unknown User",

        author_avatar: "https://randomuser.me/api/portraits/men/1.jpg",

        date: new Date(),

        image_url: imageUrl,
      };

      await axiosInstance.post("/data/Blogs", blog);

      alert("Blog berhasil dibuat!");

      setTitle("");
      setExcerpt("");
      setContent("");
      setCategory("");
      setCoverImage("");
      setImageFile(null);

      navigate("/blog");
    } catch (error) {
      console.error("Create blog error:", error);

      alert("Gagal membuat blog.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-50 pt-10 pb-20">
        <div className="min-h-[70vh] flex items-center justify-center px-6">
          <div className="w-full max-w-md text-center">
            <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
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

              <h1 className="text-2xl font-semibold text-slate-900 mb-3">
                Login Required
              </h1>

              <p className="text-sm leading-relaxed text-slate-500 mb-8">
                You need to be logged in before you can create and publish an
                article on the NEXORA blog.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
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
                  type="button"
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

            <p className="mt-5 text-xs text-slate-400">
              Don't have an account? You can create one from the login page.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="flex items-center justify-between md:gap-4 my-20 py-10 bg-white">
        <div className="px-4 md:px-10">
          <h1 className="text-2xl font-medium pb-2">Create New Article</h1>

          <p className="text-zinc-500 text-sm">
            Share your ideas, knowledge, and insights with the NEXORA community.
          </p>
        </div>

        <button
          type="button"
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
          {/* TITLE */}
          <div className="border border-gray-300 bg-white px-8 py-4 rounded-2xl flex flex-col gap-2">
            <label className="text-sm font-medium">Article Title</label>

            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              placeholder="Write a compelling headline..."
              className="border-zinc-300 px-6 py-4 rounded-xl border placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
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
            />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl px-10 py-6 border border-gray-300">
            <h4 className="text-lg pb-6">Publishing</h4>

            <div className="flex flex-col pb-4">
              <label className="text-sm text-gray-600 font-semibold tracking-wide">
                CATEGORY
              </label>

              <select
                value={category}
                required
                onChange={(e) => setCategory(e.target.value)}
                className="border border-gray-300 py-4 rounded-xl px-2 mt-2 appearance-none placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
              >
                <option value="">Select category...</option>

                {categories
                  .filter((c) => c !== "All")
                  .map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
              </select>
            </div>

            <div className="flex flex-col gap-4 pt-4">
              <button
                type="submit"
                disabled={loading || uploadingImage}
                className="py-4 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {uploadingImage
                  ? "Uploading image..."
                  : loading
                    ? "Publishing..."
                    : "Publish Article"}
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

          <div className="bg-white rounded-2xl border border-slate-200 p-6 h-110">
            <h4 className="font-display font-700 text-navy-900 mb-5">
              Cover Image
            </h4>

            <div className="flex bg-slate-100 rounded-xl p-1 mb-5">
              <button
                type="button"
                onClick={() => {
                  setImageMode("file");
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  imageMode === "file"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Upload File
              </button>

              <button
                type="button"
                onClick={() => {
                  setImageMode("url");
                  setImageFile(null);
                  setCoverImage("");
                }}
                className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  imageMode === "url"
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                Image URL
              </button>
            </div>

            {imageMode === "file" && (
              <div className="h-70">
                {coverImage ? (
                  <div className="relative">
                    <img
                      src={coverImage}
                      alt="Cover preview"
                      className="w-full h-70  object-cover rounded-xl"
                    />

                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                    >
                      x
                    </button>
                  </div>
                ) : (
                  <label className="border-2 border-dashed border-slate-200 rounded-xl p-8 text-center hover:border-blue-400 transition-colors cursor-pointer flex flex-col  items-center justify-center h-70">
                    <input
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      onChange={handleImageChange}
                    />

                    <svg
                      className="mx-auto mb-3 text-slate-300"
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                    >
                      <path
                        d="M4 24V8a2 2 0 012-2h20a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <circle
                        cx="11"
                        cy="13"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />

                      <path
                        d="M4 22l7-7 5 5 3-3 5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    <p className="text-slate-500 text-sm font-medium">
                      Click to upload cover image
                    </p>

                    <p className="text-slate-400 text-xs mt-1">
                      PNG, JPG, WEBP up to 5MB
                    </p>
                  </label>
                )}
              </div>
            )}

            {imageMode === "url" && (
              <div className="space-y-4">
                <input
                  type="url"
                  value={coverImage}
                  onChange={(e) => {
                    setCoverImage(e.target.value);
                    setImageFile(null);
                  }}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all"
                />

                {/* URL PREVIEW */}
                {coverImage && (
                  <img
                    src={coverImage}
                    alt="Cover preview"
                    className="w-full h-48 object-cover rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogPage;
