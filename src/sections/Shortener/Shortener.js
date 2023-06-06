import React from "react";
import "./Shortener.scss";
import Links from "./Links";

const Shortener = () => {
  return (
    <div className="Shortener">
      <form className="Shortener__form">
        <input
          className="Shortener__input"
          type="text"
          placeholder="Shorten a link here"
          required
        />
        <button className="Shortener__button">Shorten it!</button>
      </form>
      <div className="Shortener__links">
        {Links.map((link) => {
          return (
            <div className="Shortener__linkDisplay">
              <a className="Shortener__originalLink" href={link.originUrl}>
                {link.originUrl}
              </a>
              <div className="Shortener__shortenedLinkDisplay">
                <a
                  className="Shortener__shortenedLink"
                  href={link.shortenedUrl}
                >
                  {link.shortenedUrl}
                </a>
                <button className="Shortener__copyButton">Copy</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shortener;
