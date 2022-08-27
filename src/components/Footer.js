import React from "react";

import instagramIcon from "../assets/instagram.svg";
import githubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import frontendmentorIcon from "../assets/frontendmentorIcon.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="links">
        <a href="" className="links__link">
          <img src={instagramIcon} alt="" />
        </a>
        <a href="" className="links__link">
          <img src={githubIcon} alt="" />
        </a>
        <a href="" className="links__link">
          <img src={linkedinIcon} alt="" />
        </a>
        <a href="" className="links__link">
          <img src={frontendmentorIcon} alt="" />
        </a>
      </div>
      <h2 className="footer__title">My Socials</h2>
    </footer>
  );
}
