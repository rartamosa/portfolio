import React from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

const Footer = () => {
  return (
    <div className="footer-container">
      <div
        className="footer-container__top"
        onClick={() =>
          setTimeout(() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }, 0)
        }
      >
        <p className="footer-container__top-text">back to top</p>
        <KeyboardDoubleArrowUpIcon sx={{ width: "10px" }} />
      </div>
      <p className="footer-container__author">designed by Marta Rosa 2022</p>
      <div className="footer-container__blue-circle"></div>
    </div>
  );
};

export default Footer;
