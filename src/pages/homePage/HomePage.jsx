import React, { useEffect, useRef, useState } from "react";

import styles from "./homePage.module.css";

import Slider from "../../components/home/slider/Slider";
import TypingAnimation from "../../components/home/typingAnimation/TypingAnimation";
import Header from "../../components/header/Header";

export default function HomePage({ setUrl }) {
  // reset
  useEffect(() => {
    setUrl("");
  }, []);

  return (
    <div className={styles.HomePage}>
      <Header title={"Turn Your Ideas Into Images"} />
      <main>
        {/* typing text */}
        <TypingAnimation />

        {/* slider */}
        <Slider />
      </main>
    </div>
  );
}
