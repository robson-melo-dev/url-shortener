import React, { useState } from "react";
import "./Shortener.scss";

const Shortener = () => {
  let long = "";
  let localStorageUrls = JSON.parse(localStorage.getItem("urls")) || [];
  let [urls, setUrls] = useState(localStorageUrls);
  const [isCopied, setIsCopied] = useState(false);

  function updateLocalStorageUrls(urls) {
    localStorage.setItem("urls", urls);
    console.log("Local Storage Urls: ", localStorageUrls);
  }

  function handleLong(e) {
    long = e.target.value;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchUrl();
  };

  async function fetchUrl() {
    try {
      const response = await fetch("https://gotiny.cc/api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: long }),
      });
      const jsonData = await response.json();
      let urlsArray = urls.slice();
      urlsArray.push(jsonData[0]);
      console.log("JsonData", jsonData);
      setUrls(urlsArray);
      updateLocalStorageUrls(JSON.stringify(urlsArray));
      console.log("StateUrls:", urls);
    } catch (error) {
      console.log("Error fetching: ", error);
    }
  }

  function handleCopy(text, id) {
    navigator.clipboard.writeText(text);
    setIsCopied(id);
  }

  return (
    <div className="Shortener">
      <form className="Shortener__form" onSubmit={handleSubmit}>
        <input
          id="link"
          className="Shortener__input"
          type="text"
          placeholder="Shorten a link here"
          required
          onChange={(e) => handleLong(e)}
        />
        <button className="Shortener__button" type="submit">
          Shorten it!
        </button>
      </form>
      <div className="Shortener__links">
        {urls.map((link) => {
          const shortenedUrl = `https://gotiny.cc/${link?.code}`;
          return (
            <div className="Shortener__linkDisplay">
              <a
                className="Shortener__originalLink"
                href={link?.originUrl}
                target="_blank"
              >
                {link?.long}
              </a>
              <div className="Shortener__shortenedLinkDisplay">
                <a
                  className="Shortener__shortenedLink"
                  href={shortenedUrl}
                  target="_blank"
                >
                  {shortenedUrl}
                </a>
                <button
                  className="Shortener__copyButton"
                  onClick={() => handleCopy(shortenedUrl)}
                >
                  {isCopied?.id === link.code ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shortener;
