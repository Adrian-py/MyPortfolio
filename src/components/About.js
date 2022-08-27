import React from "react";

import developmentIcon from "../assets/developmentIcon.svg";
import designIcon from "../assets/designIcon.svg";
import otherIcon from "../assets/otherIcon.svg";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="introduction">
        <div className="introduction__content">
          <h2 className="introduction__title">About Me</h2>
          <p className="introduction__text">
            Hello there, my name is Adrian Hartanto and I am a computer science
            student from Indonesia. I am a frontend developer who likes to code
            things from scratch and enjoy translating my ideas to actual code.
          </p>
        </div>
        <svg
          viewBox="0 0 307 307"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="introduction__illustration"
        >
          <path
            d="M201.878 195.45L243.568 153.76L201.878 112.07M104.602 112.07L62.9117 153.76L104.602 195.45M167.137 84.2767L139.343 223.243M292.207 153.76C292.207 230.509 229.989 292.727 153.24 292.727C76.4909 292.727 14.2734 230.509 14.2734 153.76C14.2734 77.0108 76.4909 14.7933 153.24 14.7933C229.989 14.7933 292.207 77.0108 292.207 153.76Z"
            stroke="#F9F9FF"
            strokeWidth="27.7933"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="skills">
        <h3 className="skills__title">My Skills</h3>
        <div className="categories">
          <div className="categories__card">
            <img src={developmentIcon} alt="" className="card__image" />
            <h4 className="card__title">Development</h4>
            <ul className="card__list">
              <li className="list__item">HTML, CSS and Javascript</li>
              <li className="list__item">SASS/SCSS</li>
              <li className="list__item">React</li>
              <li className="list__item">Framer Motion</li>
            </ul>
          </div>
          <div className="categories__card">
            <img src={designIcon} alt="" className="card__image" />
            <h4 className="card__title">Design</h4>
            <ul className="card__list">
              <li className="list__item">Figma</li>
              <li className="list__item">Adobe XD</li>
              <li className="list__item">Adobe Photoshop</li>
            </ul>
          </div>
          <div className="categories__card">
            <img src={otherIcon} alt="" className="card__image" />
            <h4 className="card__title">Other</h4>
            <ul className="card__list">
              <li className="list__item">Good Communication</li>
              <li className="list__item">Public Speaking</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
