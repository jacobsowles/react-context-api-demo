import React from "react";

import withTheme from "../../withTheme";
import "./ThemeIndicator.css";

const ThemeIndicator = ({ themeContext }) => (
  <img
    alt={`${themeContext.name} puppy`}
    className="theme-indicator"
    src={`./${themeContext.name}-puppy.png`}
  />
);

export default withTheme(ThemeIndicator);
