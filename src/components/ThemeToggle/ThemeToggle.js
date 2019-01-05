import React from "react";

import withTheme from "../../withTheme";
import "./ThemeToggle.css";

const ThemeToggle = ({ themeContext }) => {
  return (
    <button className="theme-toggle" onClick={themeContext.toggleTheme}>
      Switch to {themeContext.name === "smol" ? "Big" : "Smol"} Theme
    </button>
  );
};

export default withTheme(ThemeToggle);
