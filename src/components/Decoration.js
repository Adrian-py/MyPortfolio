import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  initial: {},
  after: {},
};

const firstGlowVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "-80vw", "0vw", "0vw"],
    y: ["0vh", "20vh", "10vh", "0vh"],
    transition: {
      duration: 75,
      repeat: Infinity,
    },
  },
};

const secondGlowVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "80vw", "20vw", "0vw"],
    y: ["0vh", "10vh", "20vh", "0vh"],
    transition: {
      duration: 75,
      repeat: Infinity,
    },
  },
};

const thirdGlowVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "-80vw", "-20vw", "0vw"],
    y: ["0vh", "30vh", "50vh", "0vh"],
    transition: {
      duration: 75,
      repeat: Infinity,
    },
  },
};

const fourthGlowVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "80vw", "20vw", "0vw"],
    y: ["0vh", "10vh", "40vh", "0vh"],
    transition: {
      duration: 75,
      repeat: Infinity,
    },
  },
};

const fifthGlowVariants = {
  initial: {
    x: 0,
    y: 0,
  },
  after: {
    x: ["0vw", "-100vw", "-50vw", "0vw"],
    y: ["0vh", "-20vh", "10vh", "0vh"],
    transition: {
      duration: 75,
      repeat: Infinity,
    },
  },
};

export default function decoration() {
  return (
    <motion.div
      className="decoration"
      variants={containerVariants}
      animate={"after"}
    >
      <motion.div
        className="decoration__glow decoration__glow--one"
        variants={firstGlowVariants}
      ></motion.div>
      <motion.div
        className="decoration__glow decoration__glow--two"
        variants={secondGlowVariants}
      ></motion.div>
      <motion.div
        className="decoration__glow decoration__glow--three"
        variants={thirdGlowVariants}
      ></motion.div>
      <motion.div
        className="decoration__glow decoration__glow--four"
        variants={fourthGlowVariants}
      ></motion.div>
      <motion.div
        className="decoration__glow decoration__glow--five"
        variants={fifthGlowVariants}
      ></motion.div>
    </motion.div>
  );
}
