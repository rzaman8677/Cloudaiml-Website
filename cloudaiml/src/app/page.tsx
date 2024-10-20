"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    name: "RAIYANTECH.COM",
    description:
      "Personal portfolio showcasing my background, AI/ML solutions, and more.",
    tools: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "AWS EC2",
      "Amazon Linux",
      "AWS Route 53",
    ],
    link: "https://raiyantech.com",
  },
  {
    name: "ISLDW.COM",
    description:
      "Islamic website with games, full Quran, prayer times, and an Islamic calendar.",
    tools: [
      "NextJS",
      "TailwindCSS",
      "TypeScript",
      "AWS Lambda",
      "AWS S3",
      "AWS CloudFront",
      "AWS DynamoDB",
      "AWS CloudWatch",
      "AWS Route 53",
    ],
    link: "https://isldw.com",
  },
  {
    name: "CADCLUB.VERCEL.APP",
    description:
      "Fostering creativity in virtual reality, 3D modeling, and robotics.",
    tools: ["NextJS", "TailwindCSS", "TypeScript"],
    link: "https://cadclub.vercel.app",
  },
  {
    name: "COSMICTUTORING.VERCEL.APP",
    description:
      "Free STEM tutoring, with Python and Java classes taught to local students.",
    tools: ["NextJS", "TailwindCSS", "TypeScript"],
    link: "https://cosmictutoring.vercel.app",
  },
];

export default function HomePage() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        isDarkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* Stars Background */}
      <div className="absolute inset-0 bg-stars z-0" />

      {/* Dark Mode Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 bg-indigo-600 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-20"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <header className="py-6">
          <nav className="text-center text-4xl font-extrabold tracking-widest text-blue-900">
            CLOUDAIML by Raiyan Zaman
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center py-12 px-4">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-blue-900 mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to My Projects
          </motion.h1>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-50 bg-opacity-95 p-8 rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300 z-10"
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-2xl font-bold text-blue-800 mb-6">
                  {project.name}
                </h2>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <p className="text-sm text-gray-500 mb-8">
                  <strong className="text-blue-800">Tools Used:</strong>{" "}
                  {project.tools.join(", ")}
                </p>
                <div className="flex justify-between space-x-4">
                  <a
                    href={project.link}
                    className="inline-block bg-gradient-to-r from-indigo-400 to-purple-400 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 z-10 w-full text-center"
                  >
                    Visit Project
                  </a>
                  <a
                    href={`/articles/${project.name.toLowerCase()}`}
                    className="inline-block bg-gradient-to-r from-green-400 to-teal-400 text-white px-6 py-3 rounded-full font-semibold hover:from-teal-500 hover:to-green-500 transition-all duration-300 z-10 w-full text-center"
                  >
                    Read About
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </main>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-500 py-6">
          © 2024 CLOUDAIML by Raiyan Zaman
        </footer>
      </div>
    </div>
  );
}
