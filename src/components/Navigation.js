import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";

import Toggle from "./Toggle";

import {
  DARK_BACKGROUND_COLOR,
  DARK_FONT_COLOR,
  PRIMARY_ACCENT_COLOR,
} from "./utils/commons";

const Navigation = ({ onThemeToggle, theme }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigationClick = (id) => {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    }, 0);
    // document.getElementById(id).scrollIntoView();
    handleClose();
  };

  return (
    <>
      <div className="layout-container__blue-circle"></div>
      <div className="layout-container__mobile-menu">
        <Toggle onThemeToggle={onThemeToggle} theme={theme} />

        <IconButton
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          {theme === "light" ? <MenuButton lighttheme /> : <MenuButton />}
        </IconButton>

        <MenuMobile
          lighttheme={Boolean(theme === "light")}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuElement
            lighttheme={Boolean(theme === "light")}
            onClick={() => handleNavigationClick("home")}
          >
            home
          </MenuElement>

          <MenuElement
            lighttheme={Boolean(theme === "light")}
            onClick={() => handleNavigationClick("projects")}
          >
            projects
          </MenuElement>

          <MenuElement
            lighttheme={Boolean(theme === "light")}
            onClick={() => handleNavigationClick("contact")}
          >
            contact
          </MenuElement>
        </MenuMobile>
      </div>
    </>
  );
};

export default Navigation;

export const MenuButton = styled(MenuIcon, {
  shouldForwardProp: (prop) => prop !== "lighttheme",
})(({ lighttheme }) => ({
  width: "24px",
  color: lighttheme ? DARK_BACKGROUND_COLOR : DARK_FONT_COLOR,
  "& .MuiButtonBase-root": {
    position: "absolute",
    right: "0",
  },
}));

export const MenuElement = styled(MenuItem, {
  shouldForwardProp: (prop) => prop !== "lighttheme",
})(({ lighttheme }) => ({
  color: lighttheme ? DARK_BACKGROUND_COLOR : DARK_FONT_COLOR,
  fontFamily: "Red Hat Display, sans-serif",
  textTransform: "uppercase",
  fontWeight: "700",
  fontSize: "15px",
  lineHeight: "20px",
  letterSpacing: "0.15em",
  justifyContent: "end",
  padding: "0",
  minHeight: "20px",
  marginBottom: "20px",
}));

export const MenuMobile = styled(Menu, {
  shouldForwardProp: (prop) => prop !== "lighttheme",
})(({ lighttheme }) => ({
  "& .MuiList-root": {
    backgroundColor: lighttheme ? DARK_FONT_COLOR : DARK_BACKGROUND_COLOR,
    width: "240px",
    padding: "0 21px 7px 0",
    borderBottom: `2px solid ${PRIMARY_ACCENT_COLOR}`,
    borderRight: `2px solid ${PRIMARY_ACCENT_COLOR}`,
    boxShadow: "none",
    borderRadius: "20px 0px 20px 20px",
  },
  "& .MuiList-root li:last-of-type": {
    margin: "0",
  },
  "& .MuiPaper-root": {
    backgroundColor: "transparent",
  },
}));
