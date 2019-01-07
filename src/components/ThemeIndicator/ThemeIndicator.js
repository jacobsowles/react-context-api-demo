import React from "react";

import withTheme from "../../withTheme";
import "./ThemeIndicator.css";

const ThemeIndicator = ({ themeContext }) => (
  <div className="theme-indicator">
    <h1>
      {themeContext.name} Moose, age {themeContext.name === "smol" ? "3" : "6"}{" "}
      months
    </h1>
    <img
      src={`./${themeContext.name}-puppy.png`}
      alt={`${themeContext.name} puppy`}
    />
  </div>
);

export default withTheme(ThemeIndicator);
