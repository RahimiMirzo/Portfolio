import React, { useState, useEffect } from "react";
import styles from "./MainSection6.module.css";

const SKILLS = [
  { name: "React", level: 95, color: "#4CAF50" },
  { name: "JavaScript", level: 90, color: "#8BC34A" },
  { name: "TypeScript", level: 85, color: "#689F38" },
  { name: "HTML/CSS", level: 95, color: "#4CAF50" },
  { name: "Redux", level: 85, color: "#8BC34A" },
  { name: "Next.js", level: 80, color: "#689F38" },
  { name: "Git", level: 90, color: "#4CAF50" },
  { name: "Webpack", level: 75, color: "#8BC34A" },
  { name: "Tailwind CSS", level: 85, color: "#689F38" },
  { name: "REST API", level: 90, color: "#4CAF50" },
];

function SkillItem({ skill }) {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedLevel((prevLevel) => {
        if (prevLevel < skill.level) {
          return prevLevel + 1;
        } else {
          clearInterval(interval);
          return prevLevel;
        }
      });
    }, 20); // Скорость анимации

    return () => clearInterval(interval);
  }, [skill.level]);

  return (
    <div className={styles.skillItem}>
      <div
        className={styles.progressCircle}
        style={{
          background: `conic-gradient(${skill.color} ${animatedLevel}%, #1A1A1A ${animatedLevel}%)`,
        }}
      >
        <span>{animatedLevel}%</span>
      </div>
      <div className={styles.skillName}>{skill.name}</div>
    </div>
  );
}

function MainSection6() {
  return (
    <section className={styles.skillsSection}>
      <h2>Core Skills</h2>
      <div className={styles.skillsContainer}>
        {SKILLS.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </div>
    </section>
  );
}

export default MainSection6;