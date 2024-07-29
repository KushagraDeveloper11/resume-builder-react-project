import React from "react";

import resumeSvg from "../../assets/thumbnail.svg";

import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.heading}>
          Craft Your Perfect <span>Resume</span>!
        </p>
        <p className={styles.heading}>
          Build ATS-friendly Resume. <span>For Free!</span>
        </p>
      </div>
      <div className={styles.right}>
        <img src={resumeSvg} alt="Resume" />
      </div>
    </div>
  );
}

export default Header;