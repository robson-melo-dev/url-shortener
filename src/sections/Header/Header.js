import React from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__links">
        <img className="Header__logo" src={logo} />
        <a className="Header__link" href="#">
          Features
        </a>
        <a className="Header__link" href="#">
          Pricing
        </a>
        <a className="Header__link" href="#">
          Resources
        </a>
      </div>
      <div className="Header__buttons">
        <button className="Header__button">Login</button>
        <button className="Header__button">SignUp</button>
      </div>
    </div>
  );
};

export default Header;
