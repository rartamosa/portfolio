import WebIcon from "@mui/icons-material/Web";
import GitHubIcon from "@mui/icons-material/GitHub";
import { styled } from "@mui/material/styles";

import { PRIMARY_ACCENT_COLOR } from "../components/utils/commons";

export const WebsiteIcon = styled(WebIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
}));

export const GitIcon = styled(GitHubIcon)(() => ({
  color: PRIMARY_ACCENT_COLOR,
  width: "35px",
  height: "35px",
}));
