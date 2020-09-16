import React from "react";
import styles from "./components.module.css";
import Headpic from "./images/ai.png";
import useWebAnimations from "@wellyshen/use-web-animations";
import Title from "./titleanimation";

function Head() {
  const { ref, playSet } = useWebAnimations({
    keyframes: [
      { transform: "rotate3d(0, 0, 1, -180deg)" },
      { transform: "rotate3d(0,0,1,180deg)" },
    ],
    timing: {
      duration: 10000,

      iterations: Infinity,
    },
  });

  return (
    <div className={styles.div}>
      <Title />

      <img
        ref={ref}
        className={styles.ai}
        height={400}
        src={Headpic}
        alt="image"
      />
    </div>
  );
}
export default Head;
