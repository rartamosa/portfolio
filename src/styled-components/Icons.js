import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { styled } from "@mui/material/styles";

import {
  PRIMARY_ACCENT_COLOR,
  DARK_FONT_COLOR,
} from "../components/utils/commons";

export const WebsiteIcon = styled(WebIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
  "& :hover": {
    color: DARK_FONT_COLOR,
  },
}));

export const GitIcon = styled(GitHubIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
  "& :hover": {
    color: DARK_FONT_COLOR,
  },
}));

export const LinkedinIcon = styled(LinkedInIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "30px",
  height: "30px",
  "& :hover": {
    color: DARK_FONT_COLOR,
  },
}));

export const EmailIcon = styled(AlternateEmailIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "30px",
  height: "30px",
  "& :hover": {
    color: DARK_FONT_COLOR,
  },
}));
