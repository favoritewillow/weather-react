import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p className="Footer">
      This project was coded by Natalie Dub and
      <a
        href="https://github.com/favoritewillow/weather-react"
        target="_blank"
        rel="noreferrer"
      >
        open-sourced code on GitHub
      </a>
      and
      <a
        href="https://incandescent-gecko-cc3f4d.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        hosted on Netlify
      </a>
    </p>
  );
}
