import React from "react";

import "./ThemeIndicator.css";

const ThemeIndicator = ({ theme }) => (
  <div className="theme-indicator">
    <h1>
      {theme} Moose, age {theme === "smol" ? "3" : "6"} months
    </h1>
    <img src={`./${theme}-puppy.png`} alt={`${theme} puppy`} />
  </div>
);

export default ThemeIndicator;
