import styles from "../styles/Index.module.css";
// Components
import PrimaryContainer from "../components/Home/PrimaryContainer";
import AboutSection from "../components/Home/AboutSection";
import FeaturesSection from "../components/Home/FeaturesSection";
import Carousel from "../components/Home/CarouselSection";
import FooterSection from "../components/Home/FooterSection";

export default function Home() {
  // Credits click handler
  const developerLink = "https://wantedbear007.github.io/home/";
  const DeveloperPortFolio = () => {
    window.open(developerLink);
  };
  return (
    <>
      <head>
        <title>Drip - YT Music Client</title>
        <meta name="keywords" content="Youtube Music Player Desktop" />
      </head>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={styles.svgBackground}
      >
        <path
          fill="#E63946"
          fill-opacity="1"
          d="M0,224L60,202.7C120,181,240,139,360,112C480,85,600,75,720,106.7C840,139,960,213,1080,240C1200,267,1320,245,1380,234.7L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <PrimaryContainer />
      <AboutSection />
      <FeaturesSection />
      <Carousel />
      <FooterSection />
      <div className={styles.footerContainer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className={styles.footerImage}
        >
          <path
            fill="#e63946"
            fill-opacity="1"
            d="M0,128L60,133.3C120,139,240,149,360,149.3C480,149,600,139,720,149.3C840,160,960,192,1080,176C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
        <p className={styles.credits}>
          Made with ❤️ by{" "}
          <span className={styles.developer} onClick={DeveloperPortFolio}>
            Bhanupratap
          </span>
        </p>
      </div>
    </>
  );
}

// Wantedbear007
// Bhanupratap Singh
