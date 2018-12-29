import classNames from "classnames";
import React from "react";

import { ThemeConsumer } from "../ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  return (
    <ThemeConsumer>
      {context => (
        <button
          className={classNames(
            "theme-toggle",
            `theme-toggle__${context.theme}`
          )}
          onClick={context.toggleTheme}
        >
          Toggle Theme
        </button>
      )}
    </ThemeConsumer>
  );
};

export default ThemeToggle;
