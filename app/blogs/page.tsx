import React from "react";
import { BentoGrid } from "@/components/ui/BentoGrid";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import NewsLetter from "@/components/newsletter";

// Dummy blog data
const blogs = [
  {
    id: 1,
    title: "Building Modern Web Applications with Next.js and React",
    excerpt:
      "Learn how to create high-performance web applications using Next.js and React with server-side rendering and static site generation.",
    date: "March 15, 2023",
    author: "Hamed Ajaj",
    category: "Web Development",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true,
  },
  {
    id: 2,
    title: "The Power of TailwindCSS: A Game-Changer for Frontend Development",
    excerpt:
      "Discover why TailwindCSS has become a popular choice for developers looking to streamline their CSS workflow and build responsive designs faster.",
    date: "February 28, 2023",
    author: "Hamed Ajaj",
    category: "CSS",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
  },
  {
    id: 3,
    title: "Mastering TypeScript: Tips and Tricks for Better Code",
    excerpt:
      "Improve your TypeScript skills with advanced techniques, best practices, and patterns that will help you write more maintainable code.",
    date: "January 10, 2023",
    author: "Hamed Ajaj",
    category: "TypeScript",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1581276879432-15e50529f34b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
  },
  {
    id: 4,
    title: "Building Responsive UIs with React and Framer Motion",
    excerpt:
      "Learn how to create engaging, interactive user interfaces with React and Framer Motion for smooth animations and transitions.",
    date: "December 5, 2022",
    author: "Hamed Ajaj",
    category: "UI/UX",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
  },
  {
    id: 5,
    title: "The Future of Web Development: What's Next in 2023",
    excerpt:
      "Explore the emerging trends and technologies that will shape the future of web development in the coming year.",
    date: "November 22, 2022",
    author: "Hamed Ajaj",
    category: "Trends",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: false,
  },
];

const BlogCard = ({ blog }: { blog: (typeof blogs)[0] }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all duration-300">
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 z-10 transition-all duration-300" />
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-medium px-2 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 rounded-full">
            {blog.category}
          </span>
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
  const regularBlogs = blogs.filter((blog) => !blog.featured);

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.id}`}>
            <BlogCard blog={blog} />
          </Link>
        ))}
      </div>

      {/* Newsletter Subscription */}
      <NewsLetter />
    </div>
  );
};

export default BlogsPage;
