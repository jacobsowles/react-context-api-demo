import React, { PureComponent } from "react";

import ThemeIndicator from "../ThemeIndicator";
import ThemeToggle from "../ThemeToggle";
import "./App.css";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: "smol"
    };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "smol" ? "big" : "smol"
    }));
  };

  render() {
    return (
      <div className="app">
        <ThemeIndicator theme={this.state.theme} />
        <ThemeToggle theme={this.state.theme} toggleTheme={this.toggleTheme} />
      </div>
    );
  }
}

export default App;
