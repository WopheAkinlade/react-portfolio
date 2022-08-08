import React from "react";
import { Box, Link, styled, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify/icons-codicon/github";
import twitterCircle from "@iconify/icons-jam/twitter-circle";
import linkedinSquare from "@iconify/icons-jam/linkedin-square";
import laptopBg from "../Images/laptopBg.jpg";

const HomeBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const IconTheme = styled(Link)(({theme}) => ({
  color: theme.palette.text.primary,
  transition: "300ms",
  
  ":hover":{
    color: theme.palette.text.icon
  }
}));

const Home = () => {
  return (
    <HomeBox id="home" height="100vh">
      <Box
        height="90%"
        width="80%"
        mt={{sm:25}}
        sx={{
          // backgroundImage: `url(${laptopBg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography variant="h2">Hi, I'm Wofe🥷🏾</Typography>
        <Typography paragraph sx={{ width:{xs:"100%", sm:430} }}>
          I'm a young full-stack developer and project manager based in Lagos,
          Nigeria. With a desire to solve problems and an inquisitive mind, I
          believe I will be an asset to your business' endeavours.
        </Typography>
        <Box mt={40}>
          <Typography variant="h4" gutterBottom>
            Check me out🤗
          </Typography>
          <Box display="flex" justifyContent="space-between" width={200} pl={3}>
            <IconTheme href="https://github.com/WopheAkinlade" target="_blank">
              <Icon icon={githubIcon} width="33" height="33"/>
            </IconTheme>
            <IconTheme href="https://twitter.com/NinjaAkuma_" target="_blank">
              <Icon icon={twitterCircle} width="38" height="38"/>
            </IconTheme>
            <IconTheme
              href="https://www.linkedin.com/in/akinmolawofe-akinlade-021989224/"
              target="_blank"
            >
              <Icon icon={linkedinSquare} width="36" height="36"/>
            </IconTheme>
          </Box>
        </Box>
      </Box>
    </HomeBox>
  );
};

export default Home;
