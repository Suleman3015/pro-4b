import React from "react";
import styles from "./components.module.css";
import Picture from "./images/picture.png";
import Mob from "./images/mob.png";
import useWebAnimations from "@wellyshen/use-web-animations";

function Body() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(-100px,0)" },
    ],
    timing: {
      // Start with a 500ms delay
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate",
      // Run the animation forwards and then backwards
      // Use a fancy timing function
    },
  });
  return (
    <div className={styles.body}>
      <div className={styles.type1}>
        <h1> Technology</h1>
        <p>
          Industry 4.0 is the origin of a new revolution — the much-hailed
          Fourth Industrial Revolution — a fusion of leading-edge production
          techniques and smart systems that integrate with organisations and
          people. Come with us on a journey through the technologies driving
          this process and its accelerating advance.
        </p>
        <button className={styles.butn}> Explore More </button>
      </div>
      <img
        className={styles.pictures}
        ref={ref}
        src={Picture}
        alt="tech"
        height={400}
      />
    </div>
  );
}

export default Body;
