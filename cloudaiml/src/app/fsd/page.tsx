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
            How I Developed My Website: chsfullstack.vercel.com
          </h1>
          <p className={styles.subtitle}>
            A journey into building a modern website Next.js and vercel to
            display full stack development club&apos;s work
          </p>
        </motion.div>

        <section className={styles.articleText}>
          <h2 className={styles.sectionHeader}>
            Web Development Club: Building and Teaching Modern Web Technologies
          </h2>
          <p className={styles.paragraph}>
            The Web Development Club website was crafted using Next.js and
            TypeScript, designed to provide a platform for both club activities
            and educational resources. Next.js offers robust server-side
            rendering and routing, allowing for an efficient and scalable
            structure. TypeScript further improves the development process by
            adding type safety, which makes the codebase maintainable as new
            features and resources are added. We use CSS, along with some
            TailwindCSS, to create a clean, modern look, ensuring an intuitive
            layout that highlights each section dedicated to different web
            technologies.
          </p>
          <p className={styles.paragraph}>
            The website is hosted on Vercel, providing a seamless deployment
            pipeline and continuous integration for updates. With Vercel&apos;s
            reliable infrastructure, we can quickly deploy new lessons,
            projects, and resources as they’re created. In addition to
            showcasing our club&apos;s projects, the site also serves as a learning
            platform for club members to understand the deployment process and
            how to maintain live applications.
          </p>
          <p className={styles.paragraph}>
            Our club’s purpose is to teach modern web development practices and
            build websites for other school clubs. We cover a range of
            technologies, including frontend frameworks like React and Next.js,
            backend tools like Node.js and Express, and database management
            using MongoDB, DynamoDB, and MySQL. We also introduce students to
            essential DevOps tools like Docker, Jenkins, and AWS services, such
            as S3 and EC2, as well as GitHub for version control. Through these
            technologies, students gain hands-on experience and learn the full
            stack of web development, preparing them to build and maintain
            robust web applications.
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
