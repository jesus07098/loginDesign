import React from "react";
import { CssBaseline, ThemeProvider } from "@material-ui/core";

import Employees from "./pages/employe/Employee";
import theme from "./theme/appTheme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Employees />
    <CssBaseline />
  </ThemeProvider>
);

export default App;
