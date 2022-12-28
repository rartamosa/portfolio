import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import MenuIcon from "@mui/icons-material/Menu";

import {
  DARK_BACKGROUND_COLOR,
  DARK_FONT_COLOR,
  PRIMARY_ACCENT_COLOR,
} from "./utils/commons";

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuButton />
      </IconButton>
      <MenuMobile
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuElement onClick={handleClose}>home</MenuElement>
        <MenuElement onClick={handleClose}>projects</MenuElement>
        <MenuElement onClick={handleClose}>contact</MenuElement>
      </MenuMobile>
    </div>
  );
}

export const MenuButton = styled(MenuIcon)(() => ({
  color: DARK_FONT_COLOR,
  width: "24px",
  "& .MuiButtonBase-root": {
    position: "absolute",
    right: "0",
  },
}));

export const MenuElement = styled(MenuItem)(() => ({
  color: DARK_FONT_COLOR,
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

export const MenuMobile = styled(Menu)(() => ({
  "& .MuiList-root": {
    backgroundColor: DARK_BACKGROUND_COLOR,
    width: "240px",
    padding: "0 21px 7px 0",
    borderBottom: `2px solid ${PRIMARY_ACCENT_COLOR}`,
    borderRight: `2px solid ${PRIMARY_ACCENT_COLOR}`,
    boxShadow: `3px 1px 0px 1px ${PRIMARY_ACCENT_COLOR}`,
    borderRadius: "20px 0px 20px 20px",
  },
  "& .MuiList-root li:last-of-type": {
    margin: "0",
  },
  "& .MuiPaper-root": {
    backgroundColor: "transparent",
  },
}));
