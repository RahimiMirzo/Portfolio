import React from 'react'
import styles from "./MainSection3.module.css";

function MainSection3() {
  return (
    <div>
        <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <p>
        I am a creative, multitalented graphic designer with over 12 years of
        experience.
      </p>
      <div className={styles.details}>
        <p>Awards: 17</p>
        <p>Clients: 138</p>
        <p>Projects: 350</p>
      </div>
    </section>
    </div>
  )
}

export default MainSection3