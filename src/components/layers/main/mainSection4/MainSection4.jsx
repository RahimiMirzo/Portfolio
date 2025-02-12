import React from 'react'
import styles from "./MainSection4.module.css";
function MainSection4() {
  return (
    <div>
       <section id="portfolio" className={styles.portfolio}>
      <h2>Portfolio</h2>
      <div className={styles.portfolioItems}>
        <img src="/images/portfolio1.jpg" alt="Portfolio 1" />
        <img src="/images/portfolio2.jpg" alt="Portfolio 2" />
        <img src="/images/portfolio3.jpg" alt="Portfolio 3" />
      </div>
    </section>
    </div>
  )
}

export default MainSection4