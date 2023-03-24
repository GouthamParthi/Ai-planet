import React from "react";
import styles from "./Header.module.css";
function Header() {
  const aiPlanetLogo = require("../../assets/AI Planet Logo.png");
  return (
    <div className={styles.header}>
      <img src={aiPlanetLogo} alt="Ai Planet Logo" />
    </div>
  );
}

export default Header;
