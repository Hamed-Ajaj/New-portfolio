"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const shimmer = {
  hidden: { backgroundPosition: "200% 0" },
  visible: { 
    backgroundPosition: "-200% 0",
    transition: {
      repeat: Infinity,
      duration: 1.5,
      ease: "linear" 
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  }
};

const Loading = () => {
  return (
    <motion.div 
      className="container mx-auto px-4 py-10 max-w-7xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header skeleton */}
      <motion.div className="mb-12 space-y-4" variants={itemVariants}>
        <div>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <ArrowLeft size={18} className="text-gray-400" />
            </motion.div>
            <motion.div 
              className="h-5 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
              variants={shimmer}
            />
          </div>
        </div>
        <motion.div 
          className="h-12 w-40 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
          variants={shimmer}
        />
        <motion.div 
          className="h-6 w-96 max-w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
          variants={shimmer}
        />
      </motion.div>

      {/* Blog card skeletons */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(5)].map((_, index) => (
          <SkeletonBlogCard key={index} delay={index * 0.1} />
        ))}
      </div>

      {/* Newsletter skeleton */}
      <motion.div 
        variants={itemVariants}
        className="mt-20 p-8 md:p-12 rounded-2xl overflow-hidden relative bg-gray-200 dark:bg-gray-800"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-white/10 to-transparent"
          animate={{ x: [-200, 500] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
        <div className="max-w-3xl mx-auto text-center space-y-6 relative">
          <motion.div 
            className="h-8 w-64 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded mx-auto bg-[length:400%_100%]"
            variants={shimmer}
          />
          <motion.div 
            className="h-4 w-96 max-w-full bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded mx-auto bg-[length:400%_100%]"
            variants={shimmer}
          />
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <motion.div 
              className="h-12 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded flex-1 bg-[length:400%_100%]"
              variants={shimmer}
            />
            <motion.div 
              className="h-12 w-32 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
              variants={shimmer}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const SkeletonBlogCard = ({ delay }: { delay: number }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 h-[380px]"
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: [-200, 300] }}
        transition={{ repeat: Infinity, duration: 2.5, delay, ease: "easeInOut" }}
      />
      <div className="relative h-52 overflow-hidden bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:400%_100%]">
        <motion.div
          className="absolute inset-0"
          variants={shimmer}
        />
      </div>
      <div className="p-5 space-y-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="h-6 w-20 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full bg-[length:400%_100%]"
            variants={shimmer}
          />
          <motion.div 
            className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
            variants={shimmer}
          />
        </div>
        <motion.div 
          className="h-6 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
          variants={shimmer}
        />
        <motion.div 
          className="h-6 w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
          variants={shimmer}
        />
        <motion.div 
          className="h-16 w-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
          variants={shimmer}
        />
        <div className="flex justify-between items-center">
          <motion.div 
            className="h-4 w-16 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
            variants={shimmer}
          />
          <motion.div 
            className="h-4 w-24 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded bg-[length:400%_100%]"
            variants={shimmer}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Loading;