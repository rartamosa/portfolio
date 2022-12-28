import React from "react";
import { styled } from "@mui/material/styles";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";

import { SECONDARY_ACCENT_COLOR, PRIMARY_ACCENT_COLOR } from "./utils/commons";

const Toggle = ({ onThemeToggle, theme }) => {
  return (
    <ToggleButton
      onClick={onThemeToggle}
      checkedIcon={
        <DarkModeIcon
          sx={{ width: "20px", height: "32px", color: "#2a2d43" }}
        />
      }
      icon={<WbSunnyIcon sx={{ width: "20px", height: "34px" }} />}
      sx={{ color: "red" }}
    ></ToggleButton>
  );
};

export default Toggle;

export const ToggleButton = styled(Switch)(() => ({
  height: "35px",
  "& span": {
    padding: "0",
    color: SECONDARY_ACCENT_COLOR,
    // color: {theme === "dark" ? SECONDARY_ACCENT_COLOR : "#414361"},
  },
  "& .css-1yjjitx-MuiSwitch-track": {
    backgroundColor: PRIMARY_ACCENT_COLOR,
    opacity: "1",
  },
  "& .css-1m9pwf3": {
    backgroundColor: "#414361",
  },
}));
