import React from "react";

import { ThemeConsumer } from "../components/ThemeContext";

const withTheme = Component => props => (
  <ThemeConsumer>
    {context => <Component themeContext={context} {...props} />}
  </ThemeConsumer>
);

export default withTheme;
