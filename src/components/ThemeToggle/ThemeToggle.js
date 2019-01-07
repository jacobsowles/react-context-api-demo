import React from "react";

import { ThemeConsumer } from "../ThemeContext";
import "./ThemeToggle.css";

const ThemeToggle = () => (
  <ThemeConsumer>
    {context => (
      <button className="theme-toggle" onClick={context.toggleTheme}>
        Watch me grow{context.name === "smol" ? " up" : "...down?"}
      </button>
    )}
  </ThemeConsumer>
);

export default ThemeToggle;
