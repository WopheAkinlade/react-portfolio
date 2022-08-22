import React from "react";
import { Box, Grid, Stack, Typography } from "@mui/material";
import icons from "./imports";
import { Icon } from "@iconify/react";

const tile = {
  border: "2px solid #CB6E6E",
  borderRadius: 10,
  paddingLeft: 1,
  paddingRight: 1,
  paddingTop: 1,
};

const underline = {
  width: "90%",
  backgroundColor: "#CB6E6E",
  border: "0.5px solid #CB6E6E",
};

const iconBox = {
  paddingTop: 3,
  width: "90%",
  margin: "0 auto 0 auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const Skills = () => {
  return (
    <Box height="90vh" pt={5}>
      <Typography
        variant="h3"
        fontSize={{ xs: 30, md: 50 }}
        mb={3}
        fontWeight={400}
        align="center"
        color="#CB6E6E"
      >
        My Tech Stack includes:
      </Typography>
      <Grid
        spacing={3}
        width="97%"
        container
        m="auto"
        direction="row"
        justifyContent="center"
      >
        <Grid item xs={12} sm={4}>
          <Stack sx={tile}>
            <Typography variant="h5" color="#CB6E6E" align="center">
              Basics of Web Development
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox}>
              <Typography
                variant="h4"
                mb={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                HTML
                <Icon icon={icons.fileTypeHtml} width={60} height={60} />
              </Typography>
              <Typography
                variant="h4"
                mb={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                CSS
                <Icon icon={icons.fileTypeCss} width={60} height={60} />
              </Typography>
              <Typography
                variant="h4"
                mb={2}
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
            <Typography variant="h5" color="#CB6E6E" align="center">
              Web Development Frameworks
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox}>
              <Typography
                variant="h4"
                mb={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                ReactJs
                <Icon icon={icons.reactIcon} width={60} height={60} />
              </Typography>
              <Typography
                variant="h4"
                mb={2}
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
            <Typography variant="h5" color="#CB6E6E" align="center">
              Backend Languages
            </Typography>
            <hr style={underline} />

            <Box sx={iconBox}>
              <Typography
                variant="h4"
                mb={2}
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                Java
                <Icon icon={icons.javaIcon} width={60} height={60} />
              </Typography>
              <Typography
                variant="h4"
                mb={2}
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
