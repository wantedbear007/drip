import styles from "../styles/Index.module.css";
// Components
import PrimaryContainer from "../components/Home/PrimaryContainer";
import AboutSection from "../components/Home/AboutSection";
import FeaturesSection from "../components/Home/FeaturesSection";

export default function Home() {
  return (
    <div className={styles.l}>
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
      
    </div>
  );
}
