import React from 'react';
import { Link } from 'react-scroll';
import  styles from  './NavBar.module.css'; // Create a CSS file for styling

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="resumeBuilder"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume Builder
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="preview"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            ATS Tips
          </Link>
        </li>
        <li className={styles.navbarItem}>
          <Link
            activeClass="active"
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;