import React from "react";
import "./Statistics.scss";
import graph from "../../assets/images/icon-brand-recognition.svg";
import detailed from "../../assets/images/icon-detailed-records.svg";
import customizable from "../../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <div className="Statistics">
      <div className="Statistics__top">
        <h1 className="Statistics__title">Advanced Statistics</h1>
        <p className="Statistics__sub">
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="Features">
        <div className="Features__bar" />
        <div className="Feature">
          <div className="Feature__icon">
            <img className="Feature__icon-img" alt="feature icon" src={graph} />
          </div>
          <h2 className="Feature__title">Brand Recognition</h2>
          <p className="Feature__description">
            Boost your brand recognition with each click. Generic links help
            instil confidence in your content.
          </p>
        </div>
        <div className="Feature">
          <img
            className="Feature__icon"
            alt="detailed records icon"
            src={detailed}
          />
          <h2 className="Feature__title">Detailed Records</h2>
          <p className="Feature__description">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="Feature">
          <img
            className="Feature__icon"
            alt="Fully Customizable icon"
            src={customizable}
          />
          <h2 className="Feature__title">Fully Customizable</h2>
          <p className="Feature__description">
            improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
