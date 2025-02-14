import React from "react";
import { motion } from "framer-motion";
import { Row, Col } from "react-bootstrap";
import {
  FaAward,
  FaUsers,
  FaProjectDiagram,
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiVisualstudiocode,
  SiWindows,
  SiSwagger,
  SiPostgresql,
} from "react-icons/si";
import styles from "./MainSection3.module.css";

function MainSection3() {
  return (
    <section id="about" className={styles.about}>
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.heading}
      >
        About Me
      </motion.h2>
      
      <Row className={`g-4 ${styles.container}`}>
        <Col lg={6} className={styles.textBlock}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className={styles.intro}>
              Hi Everyone, I am <span className={styles.green}>MIRZOFIRDAVS RAHIMOV</span> from
              <span className={styles.green}> Khujand, Tajikistan.</span>
              <br />
              I am currently a new frontend developer
            </p>
            
            <p className={styles.activitiesTitle}>Apart from coding, some other activities that I love to do:</p>
            <ul className={styles.activityList}>
              <li>🎮 Playing Games</li>
              <li>🏋️ Doing sports</li>
              <li>✈️ Travelling</li>
            </ul>
            
            <blockquote className={styles.quote}>
              "Strive to build things that make a difference!"
              <footer>— MIRZOFIRDAVS</footer>
            </blockquote>
          </motion.div>
        </Col>

        <Col lg={6}>
          <motion.div
            className={styles.stats}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className={styles.statItem}>
              <FaAward className={styles.icon} />
              <div>
                <h3>5+</h3>
                <p>Awards</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaUsers className={styles.icon} />
              <div>
                <h3>0</h3>
                <p>Clients</p>
              </div>
            </div>
            <div className={styles.statItem}>
              <FaProjectDiagram className={styles.icon} />
              <div>
                <h3>3+</h3>
                <p>Projects</p>
              </div>
            </div>
          </motion.div>
        </Col>
      </Row>

      <motion.h3 
        className={styles.techTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Technologies I Work With
      </motion.h3>
      <Row className={`g-4 ${styles.techStack}`}>
        {[FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs].map((Icon, index) => (
          <Col key={index} xs={4} sm={3} md={2}>
            <motion.div 
              className={styles.techCard}
              whileHover={{ scale: 1.1, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className={styles.techIcon} />
            </motion.div>
          </Col>
        ))}
      </Row>

      <motion.h3 
        className={styles.techTitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Tools I Use
      </motion.h3>
      <Row className={`g-4 ${styles.techStack}`}>
        {[SiVisualstudiocode, SiWindows, SiSwagger, SiPostgresql].map((Icon, index) => (
          <Col key={index} xs={4} sm={3} md={2}>
            <motion.div 
              className={styles.techCard}
              whileHover={{ scale: 1.1, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className={styles.techIcon} />
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default MainSection3;