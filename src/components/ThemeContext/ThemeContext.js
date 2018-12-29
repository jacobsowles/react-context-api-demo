import React, { PureComponent } from "react";

const ThemeContext = React.createContext({
  theme: undefined,
  toggleTheme: undefined
});

class ThemeProvider extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light"
    };
  }

  toggleTheme = () => {
    this.setState(({ theme }) => ({
      theme: theme === "light" ? "dark" : "light"
    }));
  };

  render() {
    return (
      <ThemeContext.Provider
        value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

const ThemeConsumer = ThemeContext.Consumer;

export { ThemeProvider, ThemeConsumer };
