import React from "react";
import styles from "../../styles/Features.module.css";
import Image from "next/dist/client/image";
import FluentImage from "../../public/fluentUI.png";
import { Fade } from "react-awesome-reveal";

export const FeaturesSection = () => {
  return (
    <>
      <Fade duration={3000}>
        <h1 className="heading2">Features</h1>
      </Fade>
      <Fade duration={3000}>
        <div className={styles.parentContainer}>
          <div>
            <h1 className="subHeading">Windows Fluent User Interface</h1>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={FluentImage}
              alt="Image"
              className={styles.appScreenShot}
            />
          </div>
        </div>
      </Fade>
      <Fade duration={3000}>
        <div className={styles.parentContainerLeft}>
          <div className={styles.imageContainerLeft}>
            <Image
              src={FluentImage}
              alt="Image"
              className={styles.appScreenShot}
            />
          </div>
          <div className={styles.descriptionContainer}>
            <h1 className="subHeading">Windows Fluent User Interface</h1>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </Fade>
      <Fade duration={3000}>
        <div className={styles.parentContainer}>
          <div className={styles.descriptionContainer}>
            <h1 className="subHeading">Windows Fluent User Interface</h1>
            <p className="paragraph">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={FluentImage}
              alt="Image"
              className={styles.appScreenShot}
            />
          </div>
        </div>
      </Fade>
    </>
  );
};

export default FeaturesSection;
