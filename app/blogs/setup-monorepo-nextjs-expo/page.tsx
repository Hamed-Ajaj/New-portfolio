"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  MessageCircle,
} from "lucide-react";

const NextjsExpoMonorepo = () => {
  // Dummy blog data
  const [copied, setCopied] = useState(false);
  const handleShare = () => {
    const text = "http://localhost:5000/blogs/setup-monorepo-nextjs-expo";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const blogPost = {
    title:
      "How to setup Next.js, Expo, and Tailwind CSS Monorepo using Turborepo",
    publishDate: "February 28, 2023",
    readTime: "6 min read",
    author: {
      name: "Hamed Ajaj",
      avatar: "/images/avatar.jpg",
      role: "Full Stack Developer",
    },
    coverImage: "/images/blog-cover.jpg",
    excerpt:
      "Learn how to set up a powerful monorepo architecture using Next.js for web, Expo for mobile, and Tailwind CSS for shared styling—all managed efficiently with Turborepo.",
    tableOfContents: [
      { id: "introduction", title: "Introduction" },
      { id: "problem", title: "Problem" },
      { id: "prerequisites", title: "Prerequisites" },
      { id: "setting-up-turborepo", title: "Setting Up Turborepo" },
      { id: "creating-next-app", title: "Creating the Next.js App" },
      { id: "creating-expo-app", title: "Creating the Expo App" },
      { id: "shared-packages", title: "Setting Up Shared Packages" },
      { id: "tailwind-config", title: "Configuring Tailwind CSS" },
      { id: "conclusion", title: "Conclusion" },
    ],
  };

  // Dummy content sections
  const content = [
    {
      id: "introduction",
      title: "Introduction",
      content: `
        Building applications that target both web and mobile platforms often leads developers to maintain separate codebases, resulting in duplicated efforts and inconsistent user experiences. A monorepo architecture solves this problem by allowing you to share code between platforms while maintaining the specialized aspects of each.

        In this guide, we'll walk through setting up a monorepo using Turborepo that includes:

        • A Next.js application for web
        • An Expo application for iOS and Android
        • Shared UI components with Tailwind CSS
        • Shared business logic and utilities

        By the end of this tutorial, you'll have a powerful development environment that maximizes code reuse while preserving the best developer experience for each platform.
      `,
    },
    {
      id: "prerequisites",
      title: "Prerequisites",
      content: `
        Before we begin, make sure you have the following installed:

        • Node.js (version 18 or later)
        • pnpm (we'll be using pnpm as our package manager)
        • Git
        • Basic knowledge of React, Next.js, and React Native

        We'll be using pnpm workspaces along with Turborepo, as this combination provides excellent performance and reliability for monorepo management.
      `,
    },
    {
      id: "setting-up-turborepo",
      title: "Setting Up Turborepo",
      content: `
        First, let's create a new Turborepo project:

        \`\`\`
        npx create-turbo@latest my-monorepo
        cd my-monorepo
        \`\`\`

        This command creates a new Turborepo with a basic structure. By default, it includes two apps (web and docs) and one package (ui). We'll modify this structure to fit our needs.

        Next, let's update the \`package.json\` file at the root of the project:

        \`\`\`json
        {
          "name": "my-monorepo",
          "private": true,
          "scripts": {
            "build": "turbo run build",
            "dev": "turbo run dev",
            "lint": "turbo run lint",
            "clean": "turbo run clean && rm -rf node_modules"
          },
          "devDependencies": {
            "turbo": "^2.0.0"
          },
          "packageManager": "pnpm@8.15.0"
        }
        \`\`\`

        Now let's set up our workspace structure by updating the \`pnpm-workspace.yaml\` file:

        \`\`\`yaml
        packages:
          - "apps/*"
          - "packages/*"
        \`\`\`

        This configuration tells pnpm that our packages are located in the \`apps\` and \`packages\` directories.
      `,
    },
    {
      id: "creating-next-app",
      title: "Creating the Next.js App",
      content: `
        Now, let's set up our Next.js application:

        \`\`\`
        mkdir -p apps/web
        cd apps/web
        npx create-next-app@latest . --typescript --tailwind --eslint
        \`\`\`

        This creates a new Next.js app with TypeScript, Tailwind CSS, and ESLint configurations.

        Next, update the \`package.json\` file in the Next.js app to include the shared packages we'll create later:

        \`\`\`json
        {
          "name": "web",
          "dependencies": {
            "ui": "workspace:*",
            "shared": "workspace:*"
            // ... other dependencies
          }
        }
        \`\`\`
      `,
    },
    {
      id: "creating-expo-app",
      title: "Creating the Expo App",
      content: `
        Now let's set up our Expo application:

        \`\`\`
        mkdir -p apps/mobile
        cd apps/mobile
        npx create-expo-app -t expo-template-blank-typescript
        \`\`\`

        This creates a new Expo app with TypeScript configuration.

        Update the \`package.json\` file in the Expo app to include the shared packages:

        \`\`\`json
        {
          "name": "mobile",
          "dependencies": {
            "ui": "workspace:*",
            "shared": "workspace:*"
            // ... other dependencies
          }
        }
        \`\`\`

        To support Tailwind CSS in React Native, we need to install the necessary packages:

        \`\`\`
        cd apps/mobile
        pnpm add nativewind
        pnpm add -D tailwindcss@3.3.2
        \`\`\`

        Then create a \`tailwind.config.js\` file in the mobile app directory:

        \`\`\`javascript
        module.exports = {
          content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
          theme: {
            extend: {},
          },
          plugins: [],
        };
        \`\`\`
      `,
    },
    {
      id: "shared-packages",
      title: "Setting Up Shared Packages",
      content: `
        Now, let's create our shared packages. First, let's create a UI package for shared components:

        \`\`\`
        mkdir -p packages/ui
        cd packages/ui
        \`\`\`

        Create a \`package.json\` file for the UI package:

        \`\`\`json
        {
          "name": "ui",
          "version": "0.0.0",
          "main": "./index.tsx",
          "types": "./index.tsx",
          "license": "MIT",
          "scripts": {
            "lint": "eslint ."
          },
          "devDependencies": {
            "@types/react": "^18.2.0",
            "@types/react-dom": "^18.2.0",
            "eslint": "^8.42.0",
            "typescript": "^5.1.3"
          },
          "dependencies": {
            "react": "^18.2.0"
          }
        }
        \`\`\`

        Let's also create a shared business logic package:

        \`\`\`
        mkdir -p packages/shared
        cd packages/shared
        \`\`\`

        Create a \`package.json\` file for the shared package:

        \`\`\`json
        {
          "name": "shared",
          "version": "0.0.0",
          "main": "./index.ts",
          "types": "./index.ts",
          "license": "MIT",
          "scripts": {
            "lint": "eslint ."
          },
          "devDependencies": {
            "eslint": "^8.42.0",
            "typescript": "^5.1.3"
          }
        }
        \`\`\`
      `,
    },
    {
      id: "tailwind-config",
      title: "Configuring Tailwind CSS",
      content: `
        To share Tailwind CSS configurations across our applications, we can create a \`tailwind-config\` package:

        \`\`\`
        mkdir -p packages/tailwind-config
        cd packages/tailwind-config
        \`\`\`

        Create a \`package.json\` file:

        \`\`\`json
        {
          "name": "tailwind-config",
          "version": "0.0.0",
          "main": "index.js",
          "license": "MIT",
          "files": [
            "index.js",
            "postcss.js"
          ],
          "devDependencies": {
            "tailwindcss": "^3.3.2"
          }
        }
        \`\`\`

        Create an \`index.js\` file with your shared Tailwind configuration:

        \`\`\`javascript
        /** @type {import('tailwindcss').Config} */
        module.exports = {
          content: [
            "./src/**/*.{js,jsx,ts,tsx}",
            "../../packages/ui/**/*.{js,jsx,ts,tsx}"
          ],
          theme: {
            extend: {
              colors: {
                // Your shared color palette
                primary: "#0070f3",
              },
            },
          },
          plugins: [],
        };
        \`\`\`

        Update the Tailwind configurations in both the Next.js and Expo applications to extend this shared configuration.
      `,
    },
    {
      id: "conclusion",
      title: "Conclusion",
      content: `
        Congratulations! You've successfully set up a monorepo with Next.js, Expo, and Tailwind CSS using Turborepo. This architecture allows you to:

        • Share UI components between web and mobile
        • Maintain a consistent design system with shared Tailwind configurations
        • Reuse business logic and utilities
        • Optimize your development workflow with Turborepo's caching and parallel task execution

        To further enhance your monorepo:

        1. Set up a CI/CD pipeline that leverages Turborepo's caching capabilities
        2. Add automated testing across packages and applications
        3. Implement a version control strategy for your shared packages
        4. Consider adding Storybook for component documentation and testing

        With this setup, you can now build consistent experiences across platforms while maintaining the specialized tooling needed for each platform's best performance.
      `,
    },
  ];

  // Related posts
  const relatedPosts = [
    {
      id: 1,
      title: "Building a Design System with React and Tailwind CSS",
      excerpt:
        "Learn how to create a consistent design system for your applications using React and Tailwind CSS.",
      date: "January 15, 2023",
    },
    {
      id: 2,
      title: "Optimizing React Native Performance",
      excerpt:
        "Practical tips to improve the performance of your React Native applications.",
      date: "March 10, 2023",
    },
    {
      id: 3,
      title: "CI/CD Pipeline for Monorepos",
      excerpt:
        "How to set up an efficient CI/CD pipeline for monorepo projects using GitHub Actions.",
      date: "April 5, 2023",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Back navigation */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <Link
          href="/blogs"
          className="flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to all posts</span>
        </Link>
      </div>

      {/* Header section */}
      <header className="container mx-auto px-4 md:px-6 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 mb-4">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{blogPost.publishDate}</span>
            <span className="mx-2">•</span>
            <Clock className="h-4 w-4" />
            <span className="text-sm">{blogPost.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            {blogPost.title}
          </h1>

          <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6">
            {blogPost.excerpt}
          </p>

          <div className="flex items-center justify-between py-4 border-y border-zinc-200 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-full overflow-hidden bg-zinc-300 dark:bg-zinc-700">
                {/* Placeholder for author image */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-600 dark:text-zinc-400">
                  {blogPost.author.name.charAt(0)}
                </div>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-zinc-50">
                  {blogPost.author.name}
                </p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  {blogPost.author.role}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                onClick={handleShare}
              >
                {copied ? (
                  "Copied!"
                ) : (
                  <Share2 className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
                )}
              </button>
              <button className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                <Bookmark className="h-5 w-5 text-zinc-600 dark:text-zinc-400" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Table of contents - sticky sidebar */}
          <aside className="lg:w-64 lg:flex-shrink-0">
            <div className="lg:sticky lg:top-24">
              <h3 className="font-semibold text-lg mb-4 text-zinc-900 dark:text-zinc-50">
                Contents
              </h3>
              <nav className="space-y-1">
                {blogPost.tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block py-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Article content */}
          <article className="lg:flex-1 max-w-3xl">
            {/* Featured image */}
            <div className="rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-10 aspect-video flex items-center justify-center">
              <div className="text-zinc-400 dark:text-zinc-500 text-sm">
                Featured image placeholder
              </div>
            </div>

            {/* Article sections */}
            <div className="prose prose-zinc dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-lead:text-zinc-600 dark:prose-lead:text-zinc-400 prose-a:text-blue-600 dark:prose-a:text-blue-400 max-w-none">
              {content.map((section) => (
                <section key={section.id} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                  {section.content.split("\n\n").map((paragraph, idx) => {
                    // Handle code blocks
                    if (paragraph.includes("```")) {
                      const parts = paragraph.split("```");
                      return (
                        <div key={idx}>
                          {parts[0] && <p className="mb-4">{parts[0]}</p>}
                          {parts[1] && (
                            <div className="bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-4 my-4 overflow-x-auto">
                              <pre className="text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap">
                                {parts[1]}
                              </pre>
                            </div>
                          )}
                          {parts[2] && <p className="mt-4">{parts[2]}</p>}
                        </div>
                      );
                    }

                    // Handle lists
                    if (paragraph.includes("• ")) {
                      const items = paragraph.split("• ").filter(Boolean);
                      return (
                        <ul key={idx} className="list-disc pl-6 mb-4 space-y-2">
                          {items.map((item, i) => (
                            <li
                              key={i}
                              className="text-zinc-700 dark:text-zinc-300"
                            >
                              {item.trim()}
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // Regular paragraphs
                    return (
                      <p
                        key={idx}
                        className="mb-4 text-zinc-700 dark:text-zinc-300"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </section>
              ))}
            </div>

            {/* Author bio */}
            <div className="mt-16 p-6 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden bg-zinc-300 dark:bg-zinc-700">
                  {/* Placeholder for author image */}
                  <div className="absolute inset-0 flex items-center justify-center text-xl text-zinc-600 dark:text-zinc-400">
                    {blogPost.author.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    Full Stack Developer passionate about building performant,
                    cross-platform applications using modern web technologies.
                    Focused on creating developer-friendly architectures that
                    scale.
                  </p>
                </div>
              </div>
            </div>

            {/* Comment section */}
            <div className="mt-12">
              <h3 className="font-semibold text-xl mb-6 flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                <span>Discussion (3)</span>
              </h3>

              {/* Comments would go here */}
              <div className="space-y-6">
                <div className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg">
                  <p className="text-sm text-zinc-400">
                    Sign in to leave a comment
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </main>

      {/* Related posts */}
      {/* <section className="bg-zinc-50 dark:bg-zinc-900 py-12 mt-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
            <div className="grid gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="p-6 bg-white dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-zinc-500">{post.date}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-50">
                    {post.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 flex items-center gap-1"
                  >
                    Read article
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-zinc-900 dark:text-zinc-50">
              Subscribe to our newsletter
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              Get the latest articles and resources straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="container mx-auto px-4 md:px-6 py-6 text-center border-t border-zinc-200 dark:border-zinc-800 text-sm text-zinc-500 dark:text-zinc-400">
        © {new Date().getFullYear()} My Tech Blog. All rights reserved.
      </footer>
    </div>
  );
};

export default NextjsExpoMonorepo;
