import React from "react";
import "./Hero.scss";
import Header from "../Header/Header";
import working from "../../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <div className="Hero">
      <Header />
      <div className="Hero__container">
        <div className="Hero__presentation">
          <div className="Hero__title">More than just shorter links</div>
          <div className="Hero__description">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </div>
          <button className="Hero__button">Get Started</button>
        </div>
        <img
          viewBox="0 0 25 25"
          className="Hero__img"
          src={working}
          alt="person working on a desk"
        />
      </div>
    </div>
  );
};

export default Hero;
