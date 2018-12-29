import classNames from "classnames";
import React from "react";

import withTheme from "../../withTheme";
import "./ThemeToggle.css";

const ThemeToggle = ({ themeContext }) => {
  return (
    <button
      className={classNames(
        "theme-toggle",
        `theme-toggle__${themeContext.name}`
      )}
      onClick={themeContext.toggleTheme}
    >
      Toggle Theme
    </button>
  );
};

export default withTheme(ThemeToggle);
