export type Category =
  | "All"
  | "Technology"
  | "Design"
  | "Business"
  | "Innovation";
export const categories: Category[] = [
  "All",
  "Technology",
  "Design",
  "Business",
  "Innovation",
];

export interface Blog {
  objectId: string;
  category: Category;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  author_avatar: string;
  date: string | Date;
  image_url: string;
}

export const featuredArticle = {
  category: "Technology",
  title: "The Future of Digital Product Development",
  excerpt:
    "How AI-assisted tooling, platform engineering, and user-centered practices are reshaping the way we build software in 2026 and beyond.",
  author: "Marcus Reid",
  authorAvatar: "https://randomuser.me/api/portraits/men/1.jpg",
  date: "September 2, 2026",
  readTime: "8 min read",
  image:
    "https://images.unsplash.com/photo-1782338936796-0ebf0a6a1068?w=1200&h=600&fit=crop&auto=format",
};

export const articles = [
  {
    id: 1,
    category: "Design" as Category,
    title: "Designing Better Experiences Through Data",
    excerpt:
      "How analytics, user interviews, and behavioral data can inform design decisions that actually move the needle.",
    author: "Nora Schmidt",
    authorAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
    date: "Aug 28, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1770233621425-5d9ee7a0a700?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 2,
    category: "Technology" as Category,
    title: "Why Scalable Technology Matters",
    excerpt:
      "The infrastructure decisions you make today will determine whether your product thrives or crumbles under success. Here's how to plan ahead.",
    author: "James Okafor",
    authorAvatar: "https://randomuser.me/api/portraits/men/4.jpg",
    date: "Aug 22, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1782330389364-889dca412416?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 3,
    category: "Innovation" as Category,
    title: "AI and the Next Generation of Software",
    excerpt:
      "Generative AI is no longer a curiosity — it is reshaping how products are built, tested, and maintained at scale.",
    author: "Aisha Okonkwo",
    authorAvatar: "https://randomuser.me/api/portraits/women/1.jpg",
    date: "Aug 15, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1750365919878-2735d30fa3d8?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 4,
    category: "Business" as Category,
    title: "Building Products People Actually Love",
    excerpt:
      "The most successful products share a common trait: they solve a real pain point, simply. A look at what separates good from great.",
    author: "Priya Nair",
    authorAvatar: "https://randomuser.me/api/portraits/women/4.jpg",
    date: "Aug 8, 2026",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1761311984472-fb2e35f645d0?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 5,
    category: "Technology" as Category,
    title: "From Idea to Launch: Our Product Process",
    excerpt:
      "A behind-the-scenes look at how NEXORA takes projects from vague brief to shipped product — in weeks, not months.",
    author: "Daniel Voss",
    authorAvatar: "https://randomuser.me/api/portraits/men/2.jpg",
    date: "Aug 1, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1628258334105-2a0b3d6efee1?w=600&h=380&fit=crop&auto=format",
  },
  {
    id: 6,
    category: "Design" as Category,
    title: "The Design System Playbook",
    excerpt:
      "How investing in a design system early saves thousands of hours and creates visual consistency across every product surface.",
    author: "Nora Schmidt",
    authorAvatar: "https://randomuser.me/api/portraits/women/3.jpg",
    date: "Jul 24, 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1782338938305-9c52ddef6bdc?w=600&h=380&fit=crop&auto=format",
  },
];

export const categoryColors: Record<Category, string> = {
  All: "bg-slate-100 text-slate-600",
  Technology: "bg-blue-600/8 text-blue-600",
  Design: "bg-purple-50 text-purple-700",
  Business: "bg-emerald-50 text-emerald-700",
  Innovation: "bg-cyan-50 text-cyan-700",
};
