import classNames from "classnames";
import React, { PureComponent } from "react";

import ThemeIndicator from "../ThemeIndicator";
import ThemeToggle from "../ThemeToggle";
import withTheme from "../../withTheme";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <div
        className={classNames("app", `app__${this.props.themeContext.name}`)}
      >
        <ThemeIndicator />
        <ThemeToggle />
      </div>
    );
  }
}

export default withTheme(App);
