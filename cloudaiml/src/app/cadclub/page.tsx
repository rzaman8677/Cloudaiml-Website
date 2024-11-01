// pages/raiyantech/article.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Article.module.css";

const Article = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`${isDarkMode ? "dark-mode" : "light-mode"} ${
        styles.container
      }`}
    >
      {/* Dark Mode Toggle Button */}
      <button onClick={toggleDarkMode} className={styles.darkModeToggle}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>

      {/* Navbar */}
      <header className={styles.navbar}>
        <nav className={styles.navText}>CLOUDAIML by Raiyan Zaman</nav>
      </header>

      {/* Article Content */}
      <main className={styles.content}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/isldw.png" // Add an image in public/images
            alt="Tech Article Header"
            width={1200}
            height={600}
            className={styles.headerImage}
          />
          <h1 className={styles.title}>
            How I Developed My Website: cadclub.vercel.com
          </h1>
          <p className={styles.subtitle}>
            A journey into building a modern website Next.js and vercel to display cad club&apos;s work
          </p>
        </motion.div>

        <section className={styles.articleText}>
          <h2 className={styles.sectionHeader}>
            CAD Club: Showcasing Engineering and CAD Modeling
          </h2>
          <p className={styles.paragraph}>
            The CAD Club website was built using Next.js and TypeScript,
            designed to effectively present our club’s wide-ranging projects,
            from engineering designs to 3D CAD modeling. Next.js was an ideal
            choice, offering server-side rendering capabilities that optimize
            load times, ensuring visitors can quickly access our work and
            resources. TypeScript adds a layer of type safety, helping to catch
            potential issues early and making the codebase more maintainable as
            the site grows.
          </p>
          <p className={styles.paragraph}>
            CSS was used extensively to create a clean and intuitive layout that
            highlights each project’s visual and technical details. Tailoring
            the site to support images, animations, and VR integration, I
            ensured it not only reflects our club’s commitment to engineering
            but also provides an interactive, engaging experience. The
            minimalist design keeps the focus on the projects themselves,
            allowing visitors to explore everything from CAD renderings to VR
            models we use to teach these concepts in our club.
          </p>
          <p className={styles.paragraph}>
            The website is deployed on Vercel, allowing seamless deployment and
            continuous integration for any updates or new projects we add.
            Vercel’s robust infrastructure provides speed and reliability,
            making it easy to manage while maintaining high performance. Our
            goal for the CAD Club website is to serve as both a portfolio of our
            members&apos; work and an educational platform. It gives club members a
            space to document their learning journey while providing a resource
            for anyone interested in CAD, engineering principles, or virtual
            reality in design.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className={styles.footer}>
        © 2024 CLOUDAIML by Raiyan Zaman
      </footer>
    </div>
  );
};

export default Article;
