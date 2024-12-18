import React from "react";

import styles from "./MainSection1.module.css";


function MainSection1() {
  return (
    <div >
       <section id="hero" className={styles.heroSection}>
      <div className={styles.content}>
        <h1>GET EVERY SINGLE SOLUTION</h1>
        <p>
          We are preparing something amazing and exciting for you.
        </p>
        <div className={styles.buttons}>
          <button>View My Work</button>
          <button>About Me</button>
        </div>
      </div>
    </section>
    
    </div>
  );
}

export default MainSection1;
