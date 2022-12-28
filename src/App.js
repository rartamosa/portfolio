import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import { darkTheme, lightTheme } from "./theme";
import GlobalStyles from "./global";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

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
        <Navigation onThemeToggle={handleThemeToggle} theme={theme} />
        <Header />
        <Projects theme={theme} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
