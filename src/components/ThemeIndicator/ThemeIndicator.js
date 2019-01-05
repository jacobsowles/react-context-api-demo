import classNames from "classnames";
import React from "react";

import withTheme from "../../withTheme";
import "./ThemeIndicator.css";

const ThemeIndicator = ({ themeContext }) => {
  return (
    <>
      <img
        src={`./${themeContext.name}-puppy.png`}
        alt={`${themeContext.name} puppy`}
      />
      <h1
        className={classNames(
          "theme-indicator",
          `theme-indicator__${themeContext.name}`
        )}
      >
        {themeContext.name.charAt(0).toUpperCase() + themeContext.name.slice(1)}{" "}
        Theme
      </h1>
    </>
  );
};

export default withTheme(ThemeIndicator);
