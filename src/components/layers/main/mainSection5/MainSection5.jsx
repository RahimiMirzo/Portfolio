import React from 'react'
import styles from "./MainSection5.module.css";
function MainSection5() {
  return (
    <div>
       <section id="contact" className={styles.contact}>
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
    </div>
  )
}

export default MainSection5