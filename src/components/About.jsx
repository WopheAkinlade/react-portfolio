import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import TechStack from "./TechStack";
import img2 from "../Images/undraw_code_review_re_woeb.svg"

const AboutStack = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  height: "100vh",
  justifyContent: "space-between",
  paddingLeft: 10,
}));

const About = () => {
  return (
    <AboutStack direction="row" id="about">
      <Box
        width="40%"
        display="flex"
        justifyContent="center"
        flexDirection="column"
        pl={5}
      >
        <Typography variant="h2" fontWeight={400} color="#CB6E6E">
          About Me
        </Typography>
        <Typography paragraph variant="body1" fontSize={20} pl color="gray">
          I'm a young full-stack developer and project manager based in Lagos,
          Nigeria. I graduated from Aptech Computer Education with an Advanced
          Diploma in Software Engineering and I'm also an intern at Touch and
          Pay Technologies. With a desire to solve problems and a level of
          experience gained from my past projects inquisitive mind, I believe I
          will be an asset to your business' endeavours.
        </Typography>
      </Box>
      <img src={img2} height="50%" style={{alignSelf:"center", paddingRight:70}} alt="" />
    </AboutStack>
  );
};

export default About;
