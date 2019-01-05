import React, { PureComponent } from "react";

import ThemeIndicator from "../ThemeIndicator";
import ThemeToggle from "../ThemeToggle";
import withTheme from "../../withTheme";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div className="app">
        <ThemeIndicator />
        <ThemeToggle />
      </div>
    );
  }
}

export default withTheme(App);
