import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Slide from "@mui/material/Slide";
import { Link } from "react-router-dom";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import "./styles/Navbar.css";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16, zIndex: 1000 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

export default function HideAppBar(props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar
          className="custom-app-bar"
          sx={{ backgroundColor: "rgba(14, 27, 86, 0.319)" }}
        >
          <Toolbar className="custom-tool-bar">
            <Typography variant="h6" component="div">
              <Link to="/" className="custom-link">
                Home
              </Link>
            </Typography>
            {/* <Typography variant="h6" component="div">
              <Link to="/about" className="custom-link">
                About
              </Link>
            </Typography> */}
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}
