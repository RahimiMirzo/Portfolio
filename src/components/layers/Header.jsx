import React, { useState } from 'react';
import styles from './Header.module.css'; // Импортируем CSS Module

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>R.Mirzofirdavs</div>
      <div className={`${styles.navbarLinks} ${isOpen ? styles.active : ''}`}>
        <a href="#home" className={styles.navLink}>Home</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
      </div>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`}></span>
        <span className={`${styles.bar} ${isOpen ? styles.change : ''}`}></span>
      </div>
    </nav>
  );
}

export default Header;