import React from 'react'
import styles from "../../styles/FooterSection.module.css";

export const FooterSection = () => {

  // Link to project repository
  const repoLink = 'https://github.com/Spsden/Drip'
  const GithubLinkHandler = () => {
    window.open(repoLink)
  }
  return (
    <div className={styles.parentContainer}>
      <h1 className='heading'>
        Contribute to the project
      </h1>
      <button className={styles.githubIcon} target="_blank" onClick={GithubLinkHandler}>
        Github
      </button>
    </div>
  )
}

export default FooterSection