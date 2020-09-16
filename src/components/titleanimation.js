import React from "react";
import styles from "./components.module.css";
import useWebAnimations from "@wellyshen/use-web-animations";

export default function Title() {
  const { ref, playSet } = useWebAnimations({
    keyframes: [
      { transform: "scale3d(1, 1, 1)", offset: 0 },
      { transform: "scale3d(1.05, 1.05, 1.05)", offset: 0.5 },
      { transform: "scale3d(1, 1, 1)", offset: 1 },
    ],
    timing: {
      duration: 4000,
      fill: "both",
      easing: "ease-in-out",
      iterations: "Infinity",
    },
  });

  return (
    <div ref={ref} className={styles.slogan}>
      <h1> Teachnology</h1>
      <p> Connecting People. </p>
    </div>
  );
}
