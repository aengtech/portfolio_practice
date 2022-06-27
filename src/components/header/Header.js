import React from "react";

import CTA from "./CTA";
import Socials from "./Socials";

import "./Header.css";
import Me from "../../assets/me.png";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Aeng</h1>
        <h5 className="text-light"> Web Dev </h5>
        <CTA />
        <Socials />

        <div className="me">
          <img src={Me} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          {" "}
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
