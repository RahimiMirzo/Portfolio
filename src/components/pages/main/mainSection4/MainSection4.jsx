import React from "react";
import styles from "./MainSection4.module.css";
import image1 from "../../../../assets/images/close-up-keyboard-used-by-software-engineer-programming-home.jpg";
import image2 from "../../../../assets/images/close-up-keyboard-used-by-software-engineer-programming-home.jpg";
import image3 from "../../../../assets/images/close-up-keyboard-used-by-software-engineer-programming-home.jpg";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    tech: ["React", "Redux", "Node.js", "MongoDB"],
    image: image1,
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    id: 2,
    title: "Task Management App",
    tech: ["React", "TypeScript", "Firebase", "Material UI"],
    image: image2,
    codeUrl: "#",
    demoUrl: "#"
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    tech: ["Next.js", "GraphQL", "Tailwind CSS", "AWS"],
    image: image3,
    codeUrl: "#",
    demoUrl: "#"
  },
];

function MainSection4() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.sectionHeader}>
        <h2>My Projects</h2>
        <p className={styles.subtitle}>A collection of my recent works</p>
      </div>
      
      <div className={styles.portfolioGrid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.projectCard}>
            <div className={styles.imageContainer}>
              <img 
                src={project.image} 
                alt={project.title} 
                className={styles.projectImage}
              />
              <div className={styles.overlay}>
                <div className={styles.techList}>
                  {project.tech.map((tech, index) => (
                    <span key={index} className={styles.techPill}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className={styles.projectInfo}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <div className={styles.buttonGroup}>
                <a 
                  href={project.codeUrl} 
                  className={styles.codeButton}
                  aria-label={`View code for ${project.title}`}
                >
                  View Code
                </a>
                <a 
                  href={project.demoUrl} 
                  className={styles.demoButton}
                  aria-label={`View demo for ${project.title}`}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MainSection4;