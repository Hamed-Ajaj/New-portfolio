import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NewsLetter from "@/components/newsletter";

// Dummy blog data
const blogs = [
  {
    id: 2,
    title:
      "How to setup Next.js, Expo, and Tailwind CSS Monorepo using Turborepo",
    excerpt:
      "Learn how to set up a powerful monorepo architecture using Next.js for web, Expo for mobile, and Tailwind CSS for shared styling—all managed efficiently with Turborepo.",
    date: "February 28, 2023",
    author: "Hamed Ajaj",
    readTime: "6 min read",
  },
];

const BlogCard = ({ blog }: { blog: (typeof blogs)[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs text-zinc-500">{blog.date}</span>
        </div>
        <h3 className="font-bold text-lg mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
          {blog.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
          {blog.excerpt}
        </p>
        <div className="flex justify-between items-center">
          <span className="text-xs text-zinc-500">{blog.readTime}</span>
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
            Read More <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div className="container mx-auto px-4 py-10 max-w-7xl">
      <div className="mb-12 space-y-4">
        <div>
          <Link href={"/"} className="flex items-center gap-2">
            <ArrowLeft size={18} />
            <span>Home</span>
          </Link>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Thoughts, ideas, and insights on web development, design, and
          programming.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1  gap-6">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/setup-monorepo-nextjs-expo`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>

      {/* Newsletter Subscription */}
      {/* <NewsLetter /> */}
    </div>
  );
};

export default BlogsPage;
