import React, { PureComponent } from "react";

const ThemeContext = React.createContext({
  name: undefined,
  toggleTheme: undefined
});

class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "smol"
    };
  }

  toggleTheme = () => {
    this.setState(({ name }) => ({
      name: name === "smol" ? "big" : "smol"
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ name: this.state.name, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
