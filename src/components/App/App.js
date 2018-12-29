import classNames from "classnames";
import React, { PureComponent } from "react";

import { ThemeConsumer } from "../ThemeContext";
import ThemeIndicator from "../ThemeIndicator";
import ThemeToggle from "../ThemeToggle";
import "./App.css";

class App extends PureComponent {
  render() {
    return (
      <ThemeConsumer>
        {context => (
          <div className={classNames("app", `app__${context.theme}`)}>
            <ThemeIndicator />
            <ThemeToggle />
          </div>
        )}
      </ThemeConsumer>
    );
  }
}

export default App;
