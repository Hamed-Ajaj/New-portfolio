"use client";
import React, { useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Using a mock version of the skills data - replace with your actual import
// import { skills } from "@/data";
const skillsData = [
  {
    category: "Frontend",
    color: "from-blue-400 to-indigo-500",
    items: [
      {
        name: "React",
        img: "/re.svg",
        level: 90,
        description: "Building interactive UIs with React and React hooks",
      },
      {
        name: "Next.js",
        img: "/next.svg",
        level: 85,
        description: "Creating performant server-rendered React applications",
      },
      {
        name: "TypeScript",
        img: "/ts.svg",
        level: 80,
        description: "Writing type-safe JavaScript code",
      },
      {
        name: "Tailwind CSS",
        img: "tail.svg",
        level: 95,
        description: "Crafting responsive designs with utility classes",
      },
      {
        name: "Angular",
        img: "https://www.svgrepo.com/show/452156/angular.svg",
        level: 95,
        description: "Crafting responsive designs with utility classes",
      },
      {
        name: "Expo",
        img: "/frontend/expo.svg",
      },
      {
        name: "Framer",
        img: "fm.svg",
        level: 80,
        description: "Designing and prototyping user interfaces",
      },
      {
        name: "Redux",
        img: "https://img.icons8.com/?size=100&id=3VGtaw5gCc8T&format=png&color=000000",
        level: 90,
        description: "Version control and collaboration",
      },
      {
        name: "Zustand",
        img: "https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg",
        level: 90,
        description: "Version control and collaboration",
      },
    ],
  },
  {
    category: "Backend",
    color: "from-green-400 to-emerald-500",
    items: [
      {
        name: "Firebase",
        img: "https://www.svgrepo.com/show/353735/firebase.svg",
        level: 85,
        description: "Building scalable server-side applications",
      },
      {
        name: "Prisma",
        img: "https://www.svgrepo.com/show/374002/prisma.svg",
        level: 80,
        description: "Creating robust REST APIs",
      },
      {
        name: "Drizzle",
        img: "/backend/drizzle.svg",
        level: 75,
        description: "Working with NoSQL document databases",
      },
      {
        name: "Supabase",
        img: "https://img.icons8.com/?size=100&id=grZaE9tjqDyr&format=png&color=000000",
        level: 70,
        description: "Designing and querying relational databases",
      },
      {
        name: "Express",
        img: "https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=c3c3c3",
        level: 70,
        description: "Designing and querying relational databases",
      },
      {
        name: "Hono",
        img: "https://hono.dev/images/logo.svg",
        level: 70,
        description: "Designing and querying relational databases",
      },
    ],
  },
  {
    category: "Tools",
    color: "from-amber-400 to-orange-500",
    items: [
      {
        name: "Git",
        img: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000",
        level: 90,
        description: "Version control and collaboration",
      },
      {
        name: "Figma",
        img: "https://www.svgrepo.com/show/303210/figma-1-logo.svg",
        level: 90,
        description: "Version control and collaboration",
      },
      // {
      //   name: "Neovim",
      //   img: "https://static-00.iconduck.com/assets.00/neovim-icon-512x506-h0mtioa0.png",
      // },
    ],
  },
];

function Skills() {
  return (
    <div className="py-20 px-6" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            A Small Selection of <span className="text-purple">My Skills</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={category.category}
              category={category}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function SkillCategory({ category, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      className="mb-10"
    >
      <motion.h3
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
        }}
        className="text-xl font-semibold mb-6"
      >
        {category.category}
      </motion.h3>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8">
        {category.items.map((skill, i) => (
          <SkillCard
            // key={skill.name}
            skill={skill}
            category={category}
            index={i}
          />
        ))}
      </div>
    </motion.div>
  );
}

function SkillCard({ skill, category, index }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [showTooltip, setShowTooltip] = useState(false);

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: index * 0.05 },
        },
      }}
      className="relative"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          transition: { type: "spring", stiffness: 300 },
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-28 flex items-center justify-center bg-black-200 rounded-lg border border-white/[0.2] relative overflow-hidden"
      >
        {/* Animated background on hover */}
        <motion.div
          className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-0`}
          animate={{ opacity: showTooltip ? 0.15 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Subtle pulse animation */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg"
        />

        <img
          src={skill.img}
          alt={skill.name}
          className="w-[50%] max-h-[60%] object-contain relative z-10 filter drop-shadow-lg"
        />
      </motion.div>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className={`absolute z-50 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 text-xs rounded-md shadow-lg bg-gradient-to-r ${category.color} text-white max-w-[200px] pointer-events-none`}
          >
            <div className="font-semibold mb-1">{skill.name}</div>

            {/* Arrow pointing down */}
            <div
              className={`absolute w-2 h-2 bg-gradient-to-r ${category.color} transform rotate-45 left-1/2 -ml-1 -bottom-1`}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Skills;
