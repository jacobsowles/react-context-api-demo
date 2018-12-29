import React, { PureComponent } from "react";

const ThemeContext = React.createContext({
  name: undefined,
  toggleTheme: undefined
});

class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "light"
    };
  }

  toggleTheme = () => {
    this.setState(({ name }) => ({
      name: name === "light" ? "dark" : "light"
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
