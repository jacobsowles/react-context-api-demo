import React from "react";

import { ThemeConsumer } from "../components/ThemeContext";

const withTheme = Component => {
  return props => (
    <ThemeConsumer>
      {context => <Component themeContext={context} {...props} />}
    </ThemeConsumer>
  );
};

export default withTheme;
