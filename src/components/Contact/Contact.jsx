import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrhVNjSBcJljjMChtdwBgKFLQsMMSDzwJqzLbSgWGwdRvxQVwcDGxFkCvqGzDqgjjQHTbq">
            jyotihra28@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/jyoti-mishra-8282601a6/">
            LinkedIn
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/jyotimishra05">Github</a>
        </li>
      </ul>
    </footer>
  );
};
