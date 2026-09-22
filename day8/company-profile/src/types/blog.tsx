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




export const categoryColors: Record<Category, string> = {
  All: "bg-slate-100 text-slate-600",
  Technology: "bg-blue-600/8 text-blue-600",
  Design: "bg-purple-50 text-purple-700",
  Business: "bg-emerald-50 text-emerald-700",
  Innovation: "bg-cyan-50 text-cyan-700",
};
