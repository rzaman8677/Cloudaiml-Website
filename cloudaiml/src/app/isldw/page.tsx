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
            How I Developed My Website: ISLDW.com
          </h1>
          <p className={styles.subtitle}>
            A journey into building a modern website with AWS, Next.js, Neural
            Networks, and Machine Learning
          </p>
        </motion.div>

        <section className={styles.articleText}>
          <h2 className={styles.sectionHeader}>
            Infrastructure and Content Delivery
          </h2>
          <p className={styles.paragraph}>
            The backbone of ISLDW.com is designed for reliable static content
            delivery and fast load times, making AWS S3 and CloudFront integral
            components. I chose Amazon S3 as it efficiently handles static
            website content, hosting all HTML, CSS, and JavaScript files, as
            well as JSON data files used for displaying Quranic text and other
            content. S3’s durability and scalability ensure that no matter the
            demand, the website remains responsive.
          </p>
          <p className={styles.paragraph}>
            To improve global accessibility and performance, I integrated Amazon
            CloudFront as the content delivery network (CDN). By caching data
            across multiple geographic locations, CloudFront provides users with
            faster access to site resources, regardless of location. This
            combination of S3 and CloudFront enables high availability and low
            latency, critical for users seeking quick access to resources like
            the Quran and daily educational games.
          </p>

          <h2 className={styles.sectionHeader}>
            Serverless Functionality with AWS Lambda
          </h2>
          <p className={styles.paragraph}>
            Given that ISLDW.com offers dynamic, frequently updated content, AWS
            Lambda proved essential. This serverless compute service powers a
            variety of backend operations without the need to maintain servers.
            For example, Lambda handles data updates for the educational games,
            as I aim to keep the content fresh by modifying and rotating it
            daily. Using Lambda’s trigger capabilities, I can automate these
            updates to execute in real time, ensuring that users always
            experience new and engaging content.
          </p>
          <p className={styles.paragraph}>
            Lambda also works seamlessly with DynamoDB, my chosen database, to
            pull, modify, and manage data, especially for features that require
            interactive content retrieval. Whether it’s loading user-specific
            game statistics or updating prayer time calculations, this
            combination allows for real-time data retrieval and processing,
            adding a level of interactivity to the site. This setup reduces
            costs, as the serverless approach only incurs charges when functions
            are executed, aligning with the project’s need for efficiency.
          </p>

          <h2 className={styles.sectionHeader}>Framework and APIs</h2>
          <p className={styles.paragraph}>
            ISLDW.com’s front end is built with Next.js, leveraging its hybrid
            rendering capabilities to balance static content with dynamic
            interactions. Next.js allows server-side rendering for complex
            data-driven pages, while static generation powers consistently
            displayed content. For instance, the website’s daily prayer time
            display uses Next.js’s API routes to retrieve and display real-time
            information from my backend setup.
          </p>
          <p className={styles.paragraph}>
            AWS API Gateway integrates with Lambda functions to provide seamless
            access to the prayer times and the Islamic calendar API. The API
            Gateway acts as a central point for all data requests, enabling
            Next.js to fetch data and render it within the frontend. This
            structure simplifies managing endpoints and provides flexibility,
            allowing the application to grow with new features without
            significant restructuring.
          </p>

          <h2 className={styles.sectionHeader}>
            Domain Management and Monitoring
          </h2>
          <p className={styles.paragraph}>
            Domain management is powered by Route 53, which simplifies routing
            traffic to the correct AWS resources. Route 53’s reliability and
            integration with the AWS ecosystem make it the natural choice for
            managing traffic and ensuring users can access ISLDW.com without
            disruption. This layer allows me to direct users to different
            application parts, like games, articles, and the Quran interface.
          </p>
          <p className={styles.paragraph}>
            To maintain optimal performance and monitor site activity, I
            implemented AWS CloudWatch. CloudWatch’s insights help track usage
            patterns, monitor Lambda functions, and observe other AWS services
            in real-time. It provides data on function usage, error rates, and
            latency, allowing me to troubleshoot issues and enhance user
            experience effectively. Monitoring these metrics also helps identify
            opportunities for optimizations, making CloudWatch an essential part
            of ISLDW.com’s continuous improvement.
          </p>

          <h2 className={styles.sectionHeader}>
            Version Control and Development Tools
          </h2>
          <p className={styles.paragraph}>
            For development, I utilize GitHub for version control, tracking
            changes and ensuring smooth team collaboration. Through GitHub, I
            manage commits, feature branches, and testing versions before
            deploying the final code to production. Working with GitHub has
            improved workflow efficiency, allowing me to keep track of updates
            to the codebase and manage any issues or rollbacks if necessary.
          </p>
          <p className={styles.paragraph}>
            I use npm as my package manager, especially for installing
            dependencies like Next.js, TailwindCSS, and other packages essential
            to the project. TypeScript plays a major role in maintaining code
            stability, enforcing type safety, and reducing bugs in the
            development process. Additionally, CSS and TailwindCSS are integral
            to the styling of ISLDW.com. Tailwind’s utility-first approach
            speeds up styling workflows, while custom CSS ensures a unique,
            consistent look and feel across the website.
          </p>

          <h2 className={styles.sectionHeader}>Design and Visual Elements</h2>
          <p className={styles.paragraph}>
            Visual design is essential to ISLDW.com’s user experience. I applied
            TailwindCSS alongside custom CSS classes to create a clean, engaging
            design that enhances the educational focus of the platform. The site
            is minimalist yet functional, balancing readability with interactive
            features. A user-friendly layout ensures easy navigation between
            sections, and responsive design principles make the site accessible
            across devices, including tablets and mobile.
          </p>
          <p className={styles.paragraph}>
            JSON files store and display extensive data, such as the full Quran
            text. This structured data format makes it easy to parse and render
            content dynamically while maintaining fast load times. JSON’s
            flexibility also allows for future expansions to include more
            detailed educational resources and interactive features as needed.
          </p>

          <h2 className={styles.sectionHeader}>
            Advanced Technologies and Machine Learning
          </h2>
          <p className={styles.paragraph}>
            ISLDW.com also integrates machine learning models to enhance the
            user experience in educational games and content recommendations.
            Using TensorFlow, I’ve implemented neural networks for natural
            language processing (NLP) tasks and classifiers that play a central
            role in delivering personalized content. For example, some games on
            the platform rely on classification models to adjust difficulty
            levels or recognize user inputs. This level of adaptability ensures
            that the learning experience is tailored to each individual,
            fostering a more engaging interaction.
          </p>
          <p className={styles.paragraph}>
            The NLP models enable a better understanding of user preferences and
            responses, allowing me to generate insights that improve the content
            displayed. Through TensorFlow’s efficient and scalable framework, I
            can deploy these models within the serverless AWS architecture,
            ensuring the platform remains responsive. The model outputs, such as
            difficulty recommendations or content tags, are cached and served
            using CloudFront to maintain optimal performance.
          </p>
          <p className={styles.paragraph}>
            In addition, JSON files store extensive pre-processed data for
            various games and features, which helps to balance the load between
            dynamic and static content. Leveraging JSON as a data source for
            TensorFlow-based models facilitates faster retrieval times, allowing
            for real-time adjustments in games. The integration of these models
            not only adds depth to the educational aspect of ISLDW.com but also
            demonstrates the power of AI in creating an interactive,
            personalized learning environment.
          </p>

          <h2 className={styles.sectionHeader}>Purpose and Vision</h2>
          <p className={styles.paragraph}>
            The primary goal of ISLDW.com is to provide accessible, reliable
            Islamic information in a user-friendly format. The website presents
            valuable religious content, such as the Quran and daily prayer
            times, while encouraging user engagement through educational games.
            My focus is on making ISLDW.com an enriching platform where users
            can both learn and enjoy Islamic teachings interactively.
          </p>
          <p className={styles.paragraph}>
            By consistently updating ISLDW.com with dynamic content and engaging
            resources, I aim to make it a valuable tool for learning. As I
            continue refining and expanding the platform, I plan to introduce
            more educational games and interactive features that emphasize the
            importance of knowledge and understanding in the Islamic faith.
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
