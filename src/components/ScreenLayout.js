import React from "react";
import { Outlet } from "@mui/icons-material";

import MobileMenu from "./MobileMenu";
import Toggle from "./Toggle";
import Footer from "./Footer";

const ScreenLayout = ({ onThemeToggle, theme }) => {
  return (
    <div className="layout-container">
      <div className="layout-container__blue-circle"></div>
      <div className="layout-container__mobile-menu">
        <Toggle onThemeToggle={onThemeToggle} theme={theme} />
        <MobileMenu />
      </div>

      <Outlet />

      <Footer />
    </div>
  );
};

export default ScreenLayout;
