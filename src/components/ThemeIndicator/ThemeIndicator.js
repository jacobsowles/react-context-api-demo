import React from "react";

import { ThemeConsumer } from "../ThemeContext";
import "./ThemeIndicator.css";

const ThemeIndicator = () => {
  return (
    <ThemeConsumer>
      {context => (
        <div className="theme-indicator">
          <h1>
            {context.name} Moose, age {context.name === "smol" ? "3" : "6"}{" "}
            months
          </h1>
          <img
            src={`./${context.name}-puppy.png`}
            alt={`${context.name} puppy`}
          />
        </div>
      )}
    </ThemeConsumer>
  );
};

export default ThemeIndicator;
