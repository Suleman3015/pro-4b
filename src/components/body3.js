import React from "react";
import styles from "./components.module.css";
import Tech from "./images/tech.png";

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
        <h1> SOCIAL MEDIA</h1>
        <p>
          Social media is computer-based technology that facilitates the sharing
          of ideas, thoughts, and information through the building of virtual
          networks and communities. By design, social media is internet-based
          and gives users quick electronic communication of content. Content
          includes personal information, documents, videos, and photos. Users
          engage with social media via computer, tablet or smartphone via
          web-based software or web application, often utilizing it for
          messaging.
        </p>
        <button className={styles.butn}> Explore More </button>
      </div>
      <img
        className={styles.pictures}
        ref={ref}
        src={Tech}
        alt="tech"
        height={300}
      />
    </div>
  );
}

export default Body;
