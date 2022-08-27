import React, { useEffect, useState } from "react";

import logo from "../assets/logo.svg";
import mail from "../assets/mail.svg";
import menu from "../assets/menu.svg";
import closeIcon from "../assets/close.svg";

export default function Header({ isMobile }) {
  const [navOpen, setNavOpen] = useState(!isMobile);

  const handleToggleNavigation = () => {
    setNavOpen(!navOpen);
  };

  // To toggle navigation links in case screen size changes
  // from mobile to tablet/desktop or the other way around
  useEffect(() => {
    if (!isMobile) setNavOpen(true);
    else setNavOpen(false);
  }, [isMobile]);

  return (
    <nav>
      <img src={logo} alt="" className="nav-logo" />

      <img
        src={menu}
        alt=""
        className="nav-menu"
        onClick={handleToggleNavigation}
      />

      <ul className={`nav-link nav-link--${navOpen ? "show" : "hidden"}`}>
        <li className="nav-link__link" onClick={handleToggleNavigation}>
          <a href="#landing">home</a>
        </li>
        <li className="nav-link__link" onClick={handleToggleNavigation}>
          <a href="#about">about</a>
        </li>
        <li className="nav-link__link">
          <a href="https://adrian-py.github.io/ProjectsSite/">projects</a>
        </li>
        <li
          className="nav-link__link nav-link__link--contact"
          onClick={handleToggleNavigation}
        >
          <img src={mail} alt="" />
          <a href="#contact">contact me</a>
        </li>
        <img
          src={closeIcon}
          alt=""
          className="nav-link__close"
          onClick={handleToggleNavigation}
        />
      </ul>
    </nav>
  );
}
