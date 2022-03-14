import React from "react";
import styles from "../../styles/Features.module.css";
import Image from "next/dist/client/image";
import FluentImage from "../../assets/images/fluentUI.png";

export const FeaturesSection = () => {
  return (
    <>
    <h1 className={styles.title}>Features</h1>
      <div className={styles.parentContainer}>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.heading}>Windows Fluent User Interface</h1>
          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={FluentImage} className={styles.appScreenShot} />
        </div>
      </div>
      <div className={styles.parentContainerLeft}>
        <div className={styles.imageContainerLeft}>
          <Image src={FluentImage} className={styles.appScreenShot} />
        </div>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.heading}>Windows Fluent User Interface</h1>
          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className={styles.parentContainer}>
        <div className={styles.descriptionContainer}>
          <h1 className={styles.heading}>Windows Fluent User Interface</h1>
          <p className={styles.paragraph}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={FluentImage} className={styles.appScreenShot} />
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
