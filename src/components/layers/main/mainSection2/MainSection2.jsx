import React from "react";
import styles from "./MainSection2.module.css";

function MainSection2() {
  return (
    <div>
      <section id="services" className={styles.services}>
        <h2>My Services</h2>
        <div className={styles.serviceCards}>
          <div className={styles.card}>Graphic Design</div>
          <div className={styles.card}>Web Design</div>
          <div className={styles.card}>Software</div>
          <div className={styles.card}>Application</div>
        </div>
      </section>
    </div>
  );
}

export default MainSection2;
