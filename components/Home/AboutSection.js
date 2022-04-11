import React from "react";
import styles from "../../styles/aboutSection.module.css";
import Image from "next/dist/client/image";
import AppPreview from "../../public/preview.png";
import { Fade } from "react-awesome-reveal";

export const AboutSection = () => {
  return (
    <div className={styles.aboutSection}>
      <Fade duration={3000}>
        <div className={styles.aboutSection__text}>
          <h1 className="heading">About</h1>
          <p className="paragraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </Fade>
      <Fade duration={3000}>
        <div>
          <h1 className="heading2">App Preview</h1>
          <Image src={AppPreview} alt="App Screenshot" />
        </div>
      </Fade>
    </div>
  );
};

export default AboutSection;
