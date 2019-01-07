import React from "react";

import withTheme from "../../withTheme";
import "./ThemeToggle.css";

const ThemeToggle = ({ themeContext }) => (
  <button className="theme-toggle" onClick={themeContext.toggleTheme}>
    Watch me grow{themeContext.name === "smol" ? " up" : "...down?"}
  </button>
);

export default withTheme(ThemeToggle);
