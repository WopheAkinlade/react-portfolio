import React from "react";
import { Box, Link, styled, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-codicon/github";
import twitterCircle from "@iconify/icons-jam/twitter-circle";
import linkedinSquare from "@iconify/icons-jam/linkedin-square";
import img1 from "../Images/undraw_programming_re_kg9v.svg";
import darkImg1 from "../Images/darkImg.svg";

const HomeBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "80%",
  margin: "auto",
}));

const IconTheme = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  transition: "300ms",

  ":hover": {
    color: theme.palette.text.red,
  },
}));

const buttonStyle = {
  color: "white",
  padding: 10,
  fontSize: "1.1em",
  border: "none",
  borderRadius: 20,
  marginLeft: 10,
  cursor: "pointer",
};

const Home = ({ mode }) => {
  const year = new Date().toLocaleString(undefined, { year: "numeric" });
  const exp = year - 2021;

  return (
    <HomeBox
      id="home"
      height={{ md: "100vh" }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box height="90%" mt={{ sm: 10, md: 25 }}>
        <Box>
          <Typography
            variant="h2"
            fontWeight={400}
            fontSize={{ xs: "10vw", md: 60 }}
            color={"text.red"}
          >
            Hi, I'm Wofe
            <Icon icon="noto:ninja-medium-dark-skin-tone" />
          </Typography>
          <Typography
            variant="h5"
            pl={2}
            mb={0.5}
            sx={{ width: { xs: "100%", sm: 430 } }}
          >
            Frontend developer with {exp} year{exp > 1 ? "s" : ""} of
            experience.
          </Typography>

          <a target=".blank" href="https://drive.google.com/file/d/1ChouXBW8AA3XZj3B6jc2SWJcZ1S0vI-2/view?usp=sharing">
            <button
              style={{
                ...buttonStyle,
                backgroundColor: mode === "light" ? "#CB6E6E" : "#63110b",
              }}
            >
              Download CV
            </button>
          </a>
        </Box>
        <Box display={{ xs: "block", md: "none" }} width="90%">
          <img
            src={mode === "light" ? img1 : darkImg1}
            alt=""
            style={{ width: "100%", marginTop: 30 }}
          />
        </Box>

        <Box mt={{ xs: 10, md: 35 }} mb={{ xs: 10, md: 0 }}>
          <Typography variant="h4" gutterBottom>
            Check me out
          </Typography>
          <Box display="flex" justifyContent="space-between" width={200} pl={3}>
            <IconTheme href="https://github.com/WopheAkinlade" target="_blank">
              <Icon icon={githubIcon} width="33" height="33" />
            </IconTheme>
            <IconTheme href="https://twitter.com/NinjaAkuma_" target="_blank">
              <Icon icon={twitterCircle} width="38" height="38" />
            </IconTheme>
            <IconTheme
              href="https://www.linkedin.com/in/akinmolawofe-akinlade-021989224/"
              target="_blank"
            >
              <Icon icon={linkedinSquare} width="36" height="36" />
            </IconTheme>
          </Box>
        </Box>
      </Box>
      <Box display={{ xs: "none", md: "block" }}>
        <img
          src={mode === "light" ? img1 : darkImg1}
          style={{ width: "100%" }}
          alt=""
        />
      </Box>
    </HomeBox>
  );
};

export default Home;
