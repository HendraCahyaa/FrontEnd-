import Footer from "@/components/Footer";
import Loading from "@/components/Loading";
import Navbar from "@/components/Navbar";
import { axiosInstance } from "@/lib/axios";
import { categoryColors, type Blog, type Category } from "@/types/blog";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function BlogContent() {
  const { id } = useParams<{ id: string }>();

  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getBlog = async () => {
      if (!id) return;

      try {
        setLoading(true);

        const { data } = await axiosInstance.get<Blog>(`/data/Blogs/${id}`);

        setBlog(data);
      } catch (error) {
        console.error("Failed to fetch blog:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loading />
        <p className="ml-3 text-slate-500">Loading article...</p>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy-900 mb-3">
              Article Not Found
            </h1>

            <p className="text-slate-500 mb-6">
              The article you're looking for doesn't exist.
            </p>

            <Link
              to="/blogs"
              className="inline-flex items-center px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
            >
              Back to Blog
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="font-sans bg-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-[#06091a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm mb-8 transition-colors"
          >
            ← Back to Articles
          </Link>

          <span
            className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${
              categoryColors[blog.category as Category]
            }`}
          >
            {blog.category}
          </span>

          <h1 className="font-display text-4xl lg:text-6xl font-800 text-white leading-tight tracking-tight mb-6">
            {blog.title}
          </h1>

          <p className="text-slate-400 text-lg lg:text-xl leading-relaxed mb-8">
            {blog.excerpt}
          </p>

          <div className="flex items-center gap-3">
            <img
              src={blog.author_avatar}
              alt={blog.author}
              className="w-11 h-11 rounded-full object-cover"
            />

            <div>
              <p className="text-white text-sm font-medium">{blog.author}</p>

              <p className="text-slate-500 text-xs">
                Published on{" "}
                {new Date(blog.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8 -mt-4">
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full aspect-video object-cover rounded-2xl shadow-2xl"
        />
      </section>

      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        <article
          className="prose prose-lg max-w-none
          prose-headings:font-display
          prose-headings:text-navy-900
          prose-p:text-slate-600
          prose-p:leading-8
          prose-a:text-blue-600
          prose-strong:text-navy-900
          prose-img:rounded-2xl"
        >
          <div
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
        </article>
      </main>

      <section className="py-12 border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            ← Back to all articles
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogContent;
