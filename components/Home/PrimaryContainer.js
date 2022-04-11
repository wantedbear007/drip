import React from "react";
import styles from "../../styles/primaryContainer.module.css";
import Image from "next/image";
import appLogo from "../../public/logo.png";
// Animations
import { JackInTheBox, Slide } from "react-awesome-reveal";

export const PrimaryContainer = () => {
  // Download Address Handler
  const downloadLink =
    "https://github.com/Spsden/Drip/releases/download/v0.2.5-alpha/Dripsetup.exe";
  const DownloadLinkHandler = () => {
    window.open(downloadLink);
  };
  return (
    <div className={styles.primaryContainer}>
      <JackInTheBox direction="bottom">
        <div className={styles.logoContainer}>
          <Image
            src={appLogo}
            width="250w"
            height="250w"
            alt="App logo"
            className={styles.logo}
          />
          <h1 className={styles.appTitle}>DRIP</h1>
        </div>
      </JackInTheBox>
      <Slide direction="right">
        <div className={styles.sloganContainer}>
          <h1 className={styles.slogan}>Free YouTube Music Client</h1>
          <button
            className={styles.downloadButton}
            onClick={DownloadLinkHandler}
          >
            Download For Windows
          </button>
        </div>
      </Slide>
    </div>
  );
};

export default PrimaryContainer;
