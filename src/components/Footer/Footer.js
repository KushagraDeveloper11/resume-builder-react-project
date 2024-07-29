import React from 'react';
import { Linkedin, Mail, GitHub } from 'react-feather';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Contact Me</h2>
      <p className={styles.name}>Kushagra Saxena</p>
      <div className={styles.icons}>
        <a href="https://www.linkedin.com/in/kushagra-saxena-k023" target="_blank" rel="noopener noreferrer">
          <Linkedin className={styles.icon} />
        </a>
        <a href="mailto:kushagraS23@outlook.com">
          <Mail className={styles.icon} />
        </a>
        <a href="https://github.com/KushagraDeveloper11" target="_blank" rel="noopener noreferrer">
          <GitHub className={styles.icon} />
        </a>
      </div>
      <p className={styles.copyright}>© 2024 Kushagra Saxena. All rights reserved.</p>
    </div>
  );
};

export default Footer;
