import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
// import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>

        <ul className={styles.history}>
          <li className={styles.historyItem}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4iMpADdmyVMWMHUsejpCj5O5sgN7kHslI4ryIRpMFHA&s"
              alt="c_logo"
            />
            <div className={styles.historyItemDetails}>
              <h2>Company : AVRL</h2>
              <h3>SDE-1 (Frontend Developer)</h3>
              <p>Feb 2023 - Nov 2023</p>
              <ul>
                <li>
                  Leveraged React’s powerful capabilities to build interactive
                  and responsive user interfaces for diverse clients.
                </li>
                <li>
                  Developed front-end projects using React, collaborating
                  closely with clients to understand and fulfill
                  theirrequirements and translate them into effective UI/UX
                  solutions.
                </li>
                <li>
                  Conducted code reviews and provided valuable suggestions for
                  improvements to Engineer using core JavaScript and performed
                  API testing.
                </li>
                <li>
                  Implemented bot automation on virtual machines, completing
                  over 50 deployments and providing comprehensive documentation
                  for setup and scheduling.Conducted code reviews, offered
                  improvements, and conducted API testing to ensure robust
                  functionality.
                </li>
                <li>
                  Actively engaged in troubleshooting and resolving technical
                  issues related to bot automation. Efficiently managed a team
                  of 9+ clients, coordinating with a group of engineers to
                  ensure smooth project execution.
                </li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src="https://entrackr.com/storage/2022/04/Newton-image.jpg"
              alt="n_logo"
            />
            <div className={styles.historyItemDetails}>
              <h2>Company : Newton School Coding Bootcamp</h2>
              <h3>Full Stack Development</h3>
              <p>March 2022 - October 2022</p>
              <ul>
                <li>Full Stack Web Development and Problem Solving.</li>
                <li>
                  Technical Stack Learnt: HTML, CSS, JavaScript, React, Java
                  ,Data structure.
                </li>
                <li>
                  Participated in various coding competitions held by Newton
                  School.
                </li>
                <li>Worked on diverse projects.</li>
              </ul>
            </div>
          </li>

          <li className={styles.historyItem}>
            <img
              src="https://www.iitp.ac.in/~nexus-IITP/images/iitp_logo.png"
              alt="i_logo"
            />
            <div className={styles.historyItemDetails}>
              <h2>Indian Institute of Technology, Patna</h2>
              <h3>Internship Trainee</h3>
              <p>Dec 2020 - Feb 2021</p>
              <ul>
                <li>
                  Crawled dialogue data for various diseases from online
                  websites.
                </li>
                <li>
                  Implemented basic sequence-to-sequence models using RNN with
                  pre-trained word embeddings.
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
