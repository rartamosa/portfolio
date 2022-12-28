import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import GlobalStyles from "./global";

import ScreenLayout from "./components/ScreenLayout";

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
        <ScreenLayout
          onThemeToggle={handleThemeToggle}
          theme={theme}
        ></ScreenLayout>
      </ThemeProvider>
    </>
  );
};

export default App;
