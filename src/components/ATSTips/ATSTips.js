import React from 'react';
import styles from './ATSTips.module.css'; // We'll define the CSS file later

const ATSTips = () => {
  const tips = [
    "</>Use standard section headings.",
    "</>Include relevant keywords.",
    "</>Use a clean and simple format.",
    "</>Avoid graphics and images.",
    "</>Submit your resume in the correct format.",
    "</>Use standard fonts.",
    "</>Include contact information.",
    "</>List details in reverse chronological order.",
    "</>Tailor your resume for each job application.",
    "</>Check for spelling and grammatical errors.",
    "</>Avoid Special Characters and Symbols.",
    "</>Incorporate Keywords from Job Descriptions.",
    "</>List Skills and Qualifications Clearly.",
    "</>Use Bullet Points for Lists.",
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Useful Tips for Creating an ATS-Friendly Resume</h2>
      <div className={styles.columns}>
        <ul className={styles.column}>
          {tips.slice(0, 7).map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
        <ul className={styles.column}>
          {tips.slice(7).map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ATSTips;
