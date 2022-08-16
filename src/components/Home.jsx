import React from "react";
import { Box, Link, styled, Typography, useMediaQuery } from "@mui/material";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-codicon/github";
import twitterCircle from "@iconify/icons-jam/twitter-circle";
import linkedinSquare from "@iconify/icons-jam/linkedin-square";
import img1 from "../Images/undraw_programming_re_kg9v.svg";

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
    color: theme.palette.text.icon,
  },
}));

const Home = () => {
  return (
    <HomeBox
      id="home"
      height={{ md: "100vh" }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box
        height="90%"
        // width="40%"
        mt={{ sm: 10, md: 25 }}
      >
        <Typography variant="h2" fontWeight={400} color="#CB6E6E">
          Hi, I'm Wofe🥷🏾
        </Typography>
        <Typography variant="h5" pl={2} sx={{ width: { xs: "100%", sm: 430 } }}>
          Full-Stack developer and Project Manager
        </Typography>
        <Box display={{ xs: "block", md: "none" }} width="90%">
          <img src={img1} alt="" style={{ width: "100%", marginTop: 30 }} />
        </Box>

        <Box mt={{ xs: 10, md: 35 }} mb={{ xs: 10, md: 0 }}>
          <Typography variant="h4" gutterBottom>
            Check me out🤗
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
        <img src={img1} style={{ width: "100%" }} alt="" />
      </Box>
    </HomeBox>
  );
};

export default Home;
