import React, { PureComponent } from "react";

import ThemeIndicator from "../ThemeIndicator";
import ThemeToggle from "../ThemeToggle";
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

export default App;
