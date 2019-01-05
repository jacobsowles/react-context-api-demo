import React from "react";

import "./ThemeToggle.css";

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      Watch me grow{theme === "smol" ? " up" : "...down?"}
    </button>
  );
};

export default ThemeToggle;
