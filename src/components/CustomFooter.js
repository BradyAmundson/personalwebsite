import React from "react";
import { useState } from "react";
import { Typography, Container, IconButton } from "@mui/material";
import { Email, LinkedIn, GitHub } from "@mui/icons-material";
import PopUp from "./PopUp";

const CustomFooter = () => {
  const [showPopUp, setShowPopUp] = useState(true);
  const [popUpPosition, setPopUpPosition] = useState({ x: 10, y: -35 });

  const handleShowPopUp = (e) => {
    setPopUpPosition({ x: e.clientX, y: e.clientY });
    setShowPopUp(true);
  };

  const handleClosePopUp = () => {
    setShowPopUp(false);
  };
  return (
    <footer
      style={{
        padding: "20px 0",
        position: "fixed",
        bottom: 0,
        left: 0,
      }}
    >
      {showPopUp && (
        <PopUp
          targetX={popUpPosition.x}
          targetY={popUpPosition.y}
          onClose={handleClosePopUp}
        />
      )}
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            href="mailto:bamunds2@lion.lmu.edu"
            target="_blank"
            rel="noopener"
            aria-label="Email"
            sx={{ color: "white", "&:hover": { color: "grey" } }}
          >
            <Email
              sx={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7))" }}
            />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/brady-amundson/"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
            sx={{ color: "white", "&:hover": { color: "grey" } }}
          >
            <LinkedIn
              sx={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7))" }}
            />
          </IconButton>
          <IconButton
            href="https://github.com/BradyAmundson"
            target="_blank"
            rel="noopener"
            aria-label="GitHub"
            sx={{
              color: "white",
              "&:hover": { color: "grey" },
            }}
          >
            <GitHub
              sx={{ filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.7))" }}
            />
          </IconButton>
        </div>
      </Container>
    </footer>
  );
};

export default CustomFooter;
