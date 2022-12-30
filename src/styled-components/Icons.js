import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { styled } from "@mui/material/styles";

import {
  PRIMARY_ACCENT_COLOR,
  DARK_FONT_COLOR,
  LIGHT_FONT_COLOR,
} from "../components/utils/commons";

export const WebsiteIcon = styled(WebIcon, {
  shouldForwardProp: (prop) => prop !== "darktheme",
})(({ darktheme }) => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
  cursor: "pointer",
  "& :hover": {
    color: darktheme ? DARK_FONT_COLOR : LIGHT_FONT_COLOR,
  },
}));

export const GitIcon = styled(GitHubIcon, {
  shouldForwardProp: (prop) => prop !== "darktheme",
})(({ darktheme }) => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
  cursor: "pointer",
  "& :hover": {
    color: darktheme ? DARK_FONT_COLOR : LIGHT_FONT_COLOR,
  },
}));

export const LinkedinIcon = styled(LinkedInIcon, {
  shouldForwardProp: (prop) => prop !== "darktheme",
})(({ darktheme }) => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "30px",
  height: "30px",
  cursor: "pointer",
  "& :hover": {
    color: darktheme ? DARK_FONT_COLOR : LIGHT_FONT_COLOR,
  },
}));

export const EmailIcon = styled(AlternateEmailIcon, {
  shouldForwardProp: (prop) => prop !== "darktheme",
})(({ darktheme }) => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "30px",
  height: "30px",
  cursor: "pointer",
  "& :hover": {
    color: darktheme ? DARK_FONT_COLOR : LIGHT_FONT_COLOR,
  },
}));
