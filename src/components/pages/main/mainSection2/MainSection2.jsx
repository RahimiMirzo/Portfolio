import React from "react";
import styles from "./MainSection2.module.css";
import { FaReact, FaCode, FaPalette, FaTools } from "react-icons/fa";

function MainSection2() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.sectionHeader}>
        <h2>What I Do</h2>
        <p className={styles.subtitle}>
          Transforming ideas into modern, responsive, and high-performance web experiences
        </p>
      </div>
      
      <div className={styles.serviceCards}>
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaReact />
          </div>
          <h3>Frontend Development</h3>
          <p>
            Building modern, responsive user interfaces using React.js, Next.js, and modern web technologies.
            Focus on performance, accessibility, and maintainability.
          </p>
          <div className={styles.techList}>
            <span>React</span>
            <span>Next.js</span>
            <span>TypeScript</span>
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaCode />
          </div>
          <h3>Web Applications</h3>
          <p>
            Development of complex web applications with state management, API integration,
            and modern development practices.
          </p>
          <div className={styles.techList}>
            <span>Redux</span>
            <span>GraphQL</span>
            <span>REST API</span>
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaPalette />
          </div>
          <h3>UI/UX Implementation</h3>
          <p>
            Converting design systems into pixel-perfect, responsive components
            with attention to detail and user experience.
          </p>
          <div className={styles.techList}>
            <span>Figma</span>
            <span>Tailwind</span>
            <span>CSS Modules</span>
          </div>
        </div>
        
        <div className={styles.card}>
          <div className={styles.icon}>
            <FaTools />
          </div>
          <h3>Code Optimization</h3>
          <p>
            Improving existing codebases, implementing best practices,
            and optimizing performance for better user experience.
          </p>
          <div className={styles.techList}>
            <span>Webpack</span>
            <span>ESLint</span>
            <span>Testing</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainSection2;