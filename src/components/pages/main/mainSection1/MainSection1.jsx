import React from "react";
import styles from "./MainSection1.module.css";

function MainSection1() {
  return (
    <div>
      <section id="hero" className={styles.heroSection}>
        <div className={styles.content}>
          <h1 data-aos="fade-up" className={styles.mainTitle}>
            GET EVERY SINGLE SOLUTION
          </h1>
          <p className={styles.subtitle}>We are preparing something <span className={styles.highlight}>amazing</span> and exciting for you.</p>
          
          <div className={styles.buttons}>
            <button className={styles.glowButton}>
              View My Work
              <div className={styles.glow}></div>
            </button>
            <button className={styles.borderButton}>
              About Me
            </button>
          </div>
          
          <div className={styles.scrollIndicator}>
            <div className={styles.mouse}></div>
          </div>
        </div>
        
        <div className={styles.overlay}></div>
      </section>
    </div>
  );
}

export default MainSection1;