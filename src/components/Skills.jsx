import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import icons from "./imports";
import { Icon } from "@iconify/react";

const tile = {
  border: "2px solid #CB6E6E",
  borderRadius: 3,
  height: "50vh",
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 2.5,
};

const underline = {
  width: "90%",
  backgroundColor: "#CB6E6E",
  border: "0.5px solid #CB6E6E",
};

const iconBox = {
  width: "90%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Skills = () => {
  return (
    <Box id="skills" pt={5} pb={5}>
      <Typography
        variant="h3"
        fontSize={{ xs: 30, md: 50 }}
        mb={3}
        fontWeight={400}
        align="center"
        color={"text.red"}
      >
        My Tech Stack includes:
      </Typography>
      <Grid
        spacing={{xs: 0, sm: 3, md:3}}
        rowSpacing={{xs:2, sm:0}}
        width="97%"
        container
        m="auto"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} sm={4}>
          <Stack sx={tile}>
            <Typography variant="h5" color={"text.red"} align="center">
              Basics of Web Development
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox} gap={2}>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                HTML
                <Icon icon={icons.fileTypeHtml} width={60} height={60} />
              </Typography>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                CSS
                <Icon icon={icons.fileTypeCss} width={60} height={60} />
              </Typography>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                Javascript
                <Icon icon={icons.fileTypeJsOfficial} width={60} height={60} />
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack sx={tile}>
            <Typography variant="h5" color={"text.red"} align="center">
              Web Development Frameworks
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox} gap={10}>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                ReactJs
                <Icon icon={icons.reactIcon} width={60} height={60} />
              </Typography>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                Material Ui
                <Icon icon={icons.materialUi} width={60} height={60} />
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack sx={tile}>
            <Typography variant="h5" color={"text.red"} align="center">
              Backend Languages
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox} gap={10}>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                Java
                <Icon icon={icons.javaIcon} width={60} height={60} />
              </Typography>
              <Typography
                variant="h5"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                Python
                <Icon icon={icons.pythonIcon} width={60} height={60} />
              </Typography>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Skills;
