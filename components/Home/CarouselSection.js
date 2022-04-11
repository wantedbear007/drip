import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/dist/client/image";
import styles from "../../styles/Carousel.module.css";
import { Fade } from "react-awesome-reveal";
// IMAGES
import C1 from "../../public/carousel1.png";
import C2 from "../../public/carousel2.png";
import C3 from "../../public/carousel3.png";
import C4 from "../../public/carousel4.png";
import C5 from "../../public/carousel5.png";
import C6 from "../../public/carousel6.png";

const CarouselSection = () => {
  {
    return (
      <Fade duration={3000}>
        <div className={styles.parentContainer}>
          <h1 className="heading">ShowCase</h1>
          <Carousel
            autoPlay="True"
            autoFocus="False"
            emulateTouch={false}
            interval={2000}
            infiniteLoop="True"
            swipeable="True"
            showStatus="False"
            showThumbs={false}
            stopOnHover={true}
          >
            <div>
              <Image src={C1} alt="Image" />
              {/* <p className="legend">Moods & Genres</p> */}
            </div>
            <div>
              <Image src={C2} alt="Image" />
              {/* <p className="legend">Image 2</p> */}
            </div>
            <div>
              <Image src={C3} alt="Image" />
              {/* <p className="legend">Image 3</p> */}
            </div>
            <div>
              <Image src={C4} alt="Image" />
              {/* <p className="legend">Image 4</p> */}
            </div>
            <div>
              <Image src={C5} alt="Image" />
              {/* <p className="legend">Image 5</p> */}
            </div>
            <div>
              <Image src={C6} alt="Image" />
              {/* <p className="legend">Image 5</p> */}
            </div>
          </Carousel>
        </div>
      </Fade>
    );
  }
};

export default CarouselSection;
