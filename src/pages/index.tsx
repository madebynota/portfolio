import React, { useEffect } from "react";
import type { HeadFC, PageProps } from "gatsby";
import logo from "../images/dialup-retro-logo.png";
import "../styles.scss";

const setRandomBackgroundColor = () => {
  const num = Math.random() * 100;
  const bgColor =
    num < 25
      ? "#f6c875"
      : num < 50
      ? "#59d8cd"
      : num < 75
      ? "#ff5d5d"
      : "#5fd5ff";

  document.body.style.background = bgColor;
};

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    setRandomBackgroundColor();
  }, []);

  return (
    <div id="root" className="App">
      <div className="contentContainer">
        <div className="header">
          <img className="logo" src={logo} alt="Dial Up Logo" />
        </div>
        <div className="body">
          <h1>
            {" "}
            Dial Up Digital is the technology arm of the multi-hyphenate
            creative collective and “family-owned business”{" "}
            <a
              href="http://dialupstuff.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dial Up
            </a>
            . As artists and technologists, we work on creating unique digital
            experiences at the intersection of music, technology and culture.{" "}
          </h1>
          <span>
            <a href="mailto:hello@dialup.digital">Contact us</a>
            to speak more about how we can work together.
          </span>
        </div>
        <div className="footer">
          <h2> stuff we've made </h2>
          <a href="https://faith.rhizome.org/">BABY FAITH</a>
          <a href="https://apps.apple.com/gb/app/the-summer-smash/id1467678976?ign-mpt=uo%3D2">
            {" "}
            SUMMER SMASH APP{" "}
          </a>
          <a href="https://tstng.co/"> TESTING - A$AP ROCKY </a>
          <a href="http://dialupstuff.com/"> DIALUPSTUFF </a>
          <a href="https://lyricallemonade.com"> LYRICAL LEMONADE WEBSITE </a>
          <a href="https://psych.world/"> PSYCH WORLD </a>
        </div>
      </div>
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>DIAL UP DIGITAL</title>
