import React from "react";
import styles from "../../styles/primaryContainer.module.css";
import Image from "next/image";
import appLogo from "../../assets/images/logo.png";

export const PrimaryContainer = () => {
  return (
    <div className={styles.primaryContainer}>
      {/* <div className={styles.nameContainer}> */}
        <div className={styles.logoContainer}>
          <Image
            src={appLogo}
            width="250w"
            height="250w"
            alt="App logo"
            className={styles.logo}
            // layout="responsive"
          />
          <h1 className={styles.appTitle}>DRIP</h1>
        </div>
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>Free YouTube Music Client</h1>
          <button className={styles.downloadButton}>
            Download For Windows
          </button> 
        </div>
      {/* </div> */}
    </div>
  );
};

export default PrimaryContainer;
