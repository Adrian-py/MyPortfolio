import React from "react";
import { motion } from "framer-motion";

import projectsLogo from "../assets/projects.svg";

export default function Landing() {
  return (
    <section className="landing" id="landing">
      <div className="greeting">
        <motion.h1
          className="greeting__hero"
          initial={{ x: "-2.55vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Hello There 👋
        </motion.h1>

        <motion.p
          className="greeting__desc"
          initial={{ x: "-2.55vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          My name is Adrian Hartanto and I am currently a Computer Science
          student from Indonesia and a frontend developer. I often use HTML,
          CSS, Javascript, and SASS to create beautiful websites.
        </motion.p>

        <motion.p
          className="greeting__more"
          initial={{ x: "-2.55vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          Want to see more from me? Click the button below!
        </motion.p>

        <motion.a
          href="https://adrian-py.github.io/ProjectsSite/"
          className="projects-link"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 1 }}
        >
          <img src={projectsLogo} alt="" className="projects-link__icon" />
          <p className="projects-link__text">Projects</p>
        </motion.a>
      </div>
      <img
        src="/images/photo.png"
        alt="Self Portrait"
        className="landing__image"
      />
      <div className="background">
        <motion.div
          className="background__right-box"
          animate={{ scaleX: [1, 1.25, 1.15, 1.45, 1] }}
          transition={{ duration: 30, repeat: Infinity }}
        ></motion.div>
      </div>
    </section>
  );
}
