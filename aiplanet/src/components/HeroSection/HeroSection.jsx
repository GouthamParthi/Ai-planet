import React from "react";
import styles from "./HeroSection.module.css";
function HeroSection() {
  const handHoldBulb = require("../../assets/Hand holding bulb 3D.png");
  const wave = require("../../assets/waves.png");
  return (
    <div className={styles.heroSection}>
      <div className={styles.description}>
        <header className={styles.header}>Hackathon Submissions</header>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Tellus
          orci ac auctor augue mauris.
        </p>
        <button className={styles.uploadButtton}>Upload Submission</button>
      </div>
      <img className={styles.waveImage} src={wave} alt="waveimage" />
      <div className={styles.container}>
        <img className={styles.bulbImage} src={handHoldBulb} alt="bulbImage" />
      </div>
    </div>
  );
}

export default HeroSection;
