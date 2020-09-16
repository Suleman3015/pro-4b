import React from "react";
import styles from "./components.module.css";
import Mob from "./images/mob.png";
import useWebAnimations from "@wellyshen/use-web-animations";

function Body() {
  const { ref, playState } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(0,-10%)" },
    ],
    timing: {
      // Start with a 500ms delay
      duration: 2000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate",
      // Run the animation forwards and then backwards
      // Use a fancy timing function
    },
  });

  return (
    <div className={styles.body2}>
      <div className={styles.type2}>
        <h1> Mobile</h1>
        <p>
          Mobile technology is a form of technology that is mostly used in
          cellular communication and other related aspects. It uses a form of
          platform where by many transmitters have the ability to send data at
          the same time on a single channel. This platform is called
          Code-division multiple access (CDMA)
        </p>
        <button className={styles.butn}> Explore More </button>
      </div>
      <img ref={ref} src={Mob} alt="tech" height={400} />
    </div>
  );
}

export default Body;
