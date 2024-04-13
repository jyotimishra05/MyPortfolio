import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const resumeUrl =
    "https://drive.google.com/file/d/1uKlWC5vqN1wwEqWeBG3rJlRsyBGMsrMD/view?usp=drive_link";

  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Jyoti Mishra</h1>
        <p className={styles.description}>
          I'm on a mission to elevate and expand my expertise in Full Stack
          technologies, with a strong emphasis on the frontend side. I'm a quick
          and adaptive learner who's always up for a challenge, especially when
          it comes to diving into the latest tech trends. I thrive in a
          fast-paced environment and love taking on projects that push me out of
          my comfort zone. Right now, I'm on the lookout for exciting
          opportunities where I can expand my knowledge, skills, and techniques
          while making a meaningful contribution.
          <p className={styles.heading}>
            Let's tackle some cool projects together and see where it takes us!
          </p>
          <br /> <h3 style={{ color: "yellow" }}>Cheers!</h3>
        </p>
        <a
          onClick={handleDownload}
          style={{ cursor: "pointer" }}
          className={styles.contactBtn}
        >
          My Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
