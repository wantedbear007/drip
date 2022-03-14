import React from 'react'
import styles from "../../styles/FooterSection.module.css";

export const FooterSection = () => {
  return (
    <div className={styles.parentContainer}>
      <h1 className={styles.heading}>
        Contribute to the project
      </h1>
      <button className={styles.githubIcon}>
        <a href='https://github.com/Spsden/Drip' target="_blank" className={styles.buttonText}>Github</a>
      </button>
    </div>
  )
}

export default FooterSection