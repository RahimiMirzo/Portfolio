import React, { useState } from 'react';
import styles from "./MainSection5.module.css";
import image1 from "../../../../assets/images/freepik__comic-art-graphic-novel-art-comic-illustration-hig__20692.jpg";
import { motion } from "framer-motion";

const images = {
  image1,
};

function MainSection5() {
  const selectedPhoto1 = "image1";
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    e.target.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.formContainer}>
          <motion.h2 
            className={styles.heading}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Contact Me
          </motion.h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input 
                type="text" 
                placeholder="Your Name" 
                className={styles.input} 
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <input 
                type="email" 
                placeholder="Your Email" 
                className={styles.input} 
                required
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <textarea 
                placeholder="Your Message" 
                className={styles.textarea} 
                rows="4"
                required
              ></textarea>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <button type="submit" className={styles.button}>Send Message</button>
            </motion.div>
          </form>

          {/* Notification */}
          <motion.div
            className={styles.notification}
            initial={{ opacity: 0, y: 20 }}
            animate={isSubmitted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            Message sent successfully! 🚀
          </motion.div>
        </div>
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <img 
            src={images[selectedPhoto1]} 
            alt="Contact Illustration" 
            className={styles.image} 
          />
        </motion.div>
      </div>
    </section>
  );
}

export default MainSection5;