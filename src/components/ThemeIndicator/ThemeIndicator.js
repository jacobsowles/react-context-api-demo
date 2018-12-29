import classNames from "classnames";
import React from "react";

import { ThemeConsumer } from "../ThemeContext";
import "./ThemeIndicator.css";

const ThemeIndicator = () => {
  return (
    <ThemeConsumer>
      {context => (
        <h1
          className={classNames(
            "theme-indicator",
            `theme-indicator__${context.theme}`
          )}
        >
          {context.theme.charAt(0).toUpperCase() + context.theme.slice(1)} Theme
        </h1>
      )}
    </ThemeConsumer>
  );
};

export default ThemeIndicator;
