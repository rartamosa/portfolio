import React from "react";
import { styled } from "@mui/material/styles";

import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Switch from "@mui/material/Switch";

import { SECONDARY_ACCENT_COLOR, PRIMARY_ACCENT_COLOR } from "./utils/commons";

const Toggle = ({ onThemeToggle }) => {
  return (
    <ToggleButton
      onClick={onThemeToggle}
      checkedIcon={<WbSunnyIcon />}
      icon={<DarkModeIcon />}
    ></ToggleButton>
  );
};

export default Toggle;

export const ToggleButton = styled(Switch)(() => ({
  height: "90px",
  width: "25px",
  "& span": {
    padding: "0",
    color: SECONDARY_ACCENT_COLOR,
  },
  "& .css-1yjjitx-MuiSwitch-track": {
    backgroundColor: PRIMARY_ACCENT_COLOR,
    opacity: "1",
  },
}));
