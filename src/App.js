import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import GlobalStyles from "./global";
import Toggle from "./components/Toggle";

const App = () => {
  const [theme, setTheme] = useState("dark");

  const handleThemeToggle = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <>
      <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <h2>Test</h2>
        <div>Hello World</div>
        <Toggle onThemeToggle={handleThemeToggle} />
      </ThemeProvider>
    </>
  );
};

export default App;
