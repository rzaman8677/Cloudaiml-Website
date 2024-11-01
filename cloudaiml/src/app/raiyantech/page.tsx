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
            src="/logo5.webp" // Add an image in public/images
            alt="Tech Article Header"
            width={1200}
            height={600}
            className={styles.headerImage}
          />
          <h1 className={styles.title}>
            How I Developed My Website: RaiyanTech.com
          </h1>
          <p className={styles.subtitle}>
            A journey into building a modern website with AWS, Next.js, and
            Blender
          </p>
        </motion.div>

        <section className={styles.articleText}>
          <h2 className={styles.sectionHeader}>Infrastructure and Hosting</h2>
          <p className={styles.paragraph}>
            Hosting RaiyanTech.com was a pivotal decision that required
            balancing performance, reliability, and cost-effectiveness. For this
            reason, I chose AWS EC2 with a t2.micro instance, a widely used
            option that provides a good baseline performance at a manageable
            cost. This instance type is particularly suited to personal projects
            or low-traffic applications like a portfolio site. Despite its
            minimal footprint, the t2.micro instance offers enough power to
            handle several visitors simultaneously, ensuring my site is
            responsive and reliable.
          </p>
          <p className={styles.paragraph}>
            Another core consideration for hosting was domain management. To
            keep everything within AWS and leverage its seamless integration
            capabilities, I used Route 53, AWS’s scalable Domain Name System
            (DNS) service. Route 53 provides highly reliable DNS routing,
            allowing me to route users from the domain name to the application
            hosted on EC2 without downtime or lag. This choice offers stability
            and manages DNS efficiently, ensuring visitors can reach the site
            without issues.
          </p>
          <p className={styles.paragraph}>
            Ensuring site security was a priority from the start, which is where
            Certbot and Nginx came in. I set up SSL with Certbot, a free,
            open-source tool that provides SSL certificates and handles HTTPS
            configuration. The SSL certificate not only encrypts data exchanged
            between the user and the server but also boosts the site’s SEO by
            meeting security standards that search engines value. Meanwhile,
            Nginx functions as my web server, handling both static content and
            reverse proxy duties. Configuring Nginx allowed me to manage server
            load effectively and enhance response times by caching content where
            possible.
          </p>

          <h2 className={styles.sectionHeader}>Framework and Languages</h2>
          <p className={styles.paragraph}>
            The foundation of RaiyanTech.com’s front end is built using Next.js,
            a popular framework for building React applications, combined with
            TypeScript for type safety and improved code structure. Next.js was
            an ideal choice for a few reasons. First, it offers server-side
            rendering (SSR) and static site generation (SSG), both of which
            optimize loading times and make the site faster. Server-rendered
            pages are processed before reaching the user’s browser, so pages
            load faster, improving user experience and SEO by reducing loading
            times.
          </p>
          <p className={styles.paragraph}>
            Next.js also brings robust routing out of the box, which allowed me
            to organize my project efficiently. Each page on RaiyanTech.com is
            statically generated or server-rendered as needed, which provides
            flexibility in serving content. For example, the portfolio or “About
            Me” pages, which are rarely updated, are generated statically, while
            other pages that may require dynamic content can be server-rendered.
            This approach combines the best of both worlds: static pages for
            fast-loading elements and server-rendered pages for parts that
            benefit from dynamic interaction.
          </p>
          <p className={styles.paragraph}>
            TypeScript is another essential part of the stack. It introduces
            type safety to JavaScript, ensuring that the code is robust and less
            prone to errors. By using TypeScript, I’ve been able to prevent a
            variety of bugs early on, making the development process smoother.
            TypeScript also improves code readability and collaboration, which
            is valuable if the project expands or involves contributors. This
            combination of Next.js and TypeScript creates a modern, efficient
            setup that maintains performance while delivering a polished user
            experience.
          </p>

          <h2 className={styles.sectionHeader}>Design and Visuals</h2>
          <p className={styles.paragraph}>
            In addition to functionality, I wanted RaiyanTech.com to reflect a
            clean and visually engaging design. To achieve this, I created a
            custom background using Blender, an open-source 3D computer graphics
            software. Blender’s flexibility allowed me to design and render a
            unique background that adds visual depth to the site without
            distracting from the core content. The minimalist background aligns
            with the overall aesthetic I was aiming for—clean, modern, and
            professional—drawing users&apos; attention to the articles,
            projects, and experience listed on the site.
          </p>
          <p className={styles.paragraph}>
            I chose a color palette that complements the site’s focus on
            technology and professionalism, with neutral tones for backgrounds
            and accent colors that guide users to essential features like links
            or buttons. Typography was another critical consideration. I
            selected a modern sans-serif font, which enhances readability and
            fits the tech-oriented theme of the site.
          </p>
          <p className={styles.paragraph}>
            Responsiveness was a core part of the design process. I used CSS
            flexbox and grid layouts to ensure that the site remains visually
            consistent and user-friendly across devices. By testing the site on
            various screen sizes, I optimized the layout so that it adjusts
            gracefully to mobile, tablet, and desktop views. This adaptability
            is particularly important for a portfolio site since potential
            collaborators, employers, or clients may view it on any device.
            Next.js’s built-in CSS support and modular approach made it
            straightforward to manage styles and achieve a cohesive design.
          </p>

          <h2 className={styles.sectionHeader}>Purpose and Vision</h2>
          <p className={styles.paragraph}>
            RaiyanTech.com is more than just a personal portfolio; it’s a visual
            and technical representation of my journey in computer science,
            engineering, and education. I built this site not only to document
            my projects but also to communicate my approach to solving
            real-world problems. Through each element—be it a technical
            decision, a design choice, or a project highlight—the website
            showcases my dedication to continuous learning and my passion for
            technology.
          </p>
          <p className={styles.paragraph}>
            This portfolio serves as a place where I can document my growth and
            share what I learn with others. It’s a platform that reflects my
            belief in the power of technology to innovate and educate. By
            maintaining and updating this site over time, I aim to keep pushing
            my technical boundaries while creating something impactful and
            accessible. RaiyanTech.com is both a snapshot of my current skills
            and a stepping stone to future opportunities.
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
