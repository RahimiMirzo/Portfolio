import React, { useState } from 'react';
import styles from './Header.module.css';
import { FaInstagram, FaTelegram, FaGithub,  } from 'react-icons/fa'; // Импортируем иконки

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
        <a href="#services" className={styles.navLink}>Services</a>
        <a href="#about" className={styles.navLink}>About</a>
        <a href="#contact" className={styles.navLink}>Contact</a>
        {/* Иконки социальных сетей в мобильном меню */}
        <div className={styles.socialIconsMobile}>
          <a href="https://www.instagram.com/mlrzofirdavs?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaInstagram />
          </a>
          <a href="https://t.me/mirzofirdavs" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaTelegram />
          </a>
          <a href="https://github.com/RahimiMirzo" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
            <FaGithub />
            </a>
        </div>
      </div>
      {/* Иконки социальных сетей для десктопа */}
      <div className={styles.socialIcons}>
        <a href="https://www.instagram.com/mlrzofirdavs?igsh=YzljYTk1ODg3Zg==" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaInstagram />
        </a>
        <a href="https://t.me/mirzofirdavs" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaTelegram />
        </a>
        <a href="https://github.com/RahimiMirzo" target="_blank" rel="noopener noreferrer" className={styles.socialIcon}>
          <FaGithub />
        </a>
       
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