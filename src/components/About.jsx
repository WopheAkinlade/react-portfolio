import React from "react";
import { Box, Stack, styled, Typography } from "@mui/material";
import img2 from "../Images/undraw_code_review_re_woeb.svg";
import darkImg2 from "../Images/darkImg2.svg";

const AboutBox = styled(Stack)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  justifyContent: "space-between",
  paddingBottom: 15,
}));

const About = ({ mode }) => {
  return (
    <AboutBox
      direction={{ xs: "column", md: "row" }}
      // alignItems="center"
      id="about"
      paddingTop={10}
    >
      <Box
        width={{ xs: "90%", md: "60%" }}
        display="flex"
        // justifyContent="center"
        flexDirection="column"
        pl={{ xs: 2, md: 5 }}
      >
        <Typography
          variant="h2"
          fontWeight={400}
          color="#CB6E6E"
          textAlign={{ xs: "center" }}
          fontSize={{ xs: "17vw", md: 60 }}
          gutterBottom
        >
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
      <Box
        height="50%"
        margin="auto"
        width={{ xs: "95%", md: "70%" }}
        pr={{ xs: 0, md: 10 }}
      >
        <img
          src={mode === "light" ? img2 : darkImg2}
          style={{ alignSelf: "center", width: "100%", height: "100%" }}
          alt=""
        />
      </Box>
    </AboutBox>
  );
};

export default About;
