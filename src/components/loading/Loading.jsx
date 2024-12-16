import React from "react";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.Loading}>
      <div className={styles.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
