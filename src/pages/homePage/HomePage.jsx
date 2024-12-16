import React, { useEffect, useRef, useState } from "react";
import styles from "./homePage.module.css";

import { db } from "../../firebase";
import { collection, onSnapshot } from "firebase/firestore";

import Slider from "../../components/home/slider/Slider";
import TypingAnimation from "../../components/home/typingAnimation/TypingAnimation";
import Header from "../../components/header/Header";

export default function HomePage({ setUrl }) {
  // reset
  useEffect(() => {
    setUrl("");
  }, []);

  // checking firebase data
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "iit_mumbai_qr_urls"),
      (snapshot) => {
        const alldata = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(alldata, "add data");
      }
    );
    return () => unsubscribe();
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
