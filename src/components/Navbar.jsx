import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Link,
  Box,
  Switch,
  MenuItem,
  Menu,
} from "@mui/material";
import { MenuOutlined } from "@mui/icons-material";

const gradientText = {
  backgroundImage:
    "linear-gradient(90deg, rgba(38,37,37,1) 38%, rgba(203,110,110,1) 69%)",
  backgroundSize: "100%",
  backgroundClip: "text",
  textFillColor: "transparent",
};
const MyToolbar = styled(Toolbar)(({ theme }) => ({
  backgroundColor: theme.palette.background.toolbar,
  color: theme.palette.text.primary,
  display: "flex",
  justifyContent: "space-between",
}));

const BoxOfLinks = styled(Box)({
  width: "25vw",
  justifyContent: "space-between",
});

const box2 = {
  justifyContent: "space-between",
  width: "35%",
  alignItems: "baseline",
};

//copied from MUI
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  marginRight:20,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#e0b519",
    width: 32,
    height: 32,
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        "#fff"
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
    borderRadius: 20 / 2,
  },
}));

const Navbar = ({ mode, setMode }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <AppBar position="sticky">
      <MyToolbar>
        <Link href="#home" underline="none" color="inherit">
          <Typography
            variant="h2"
            sx={{ ...gradientText, fontSize: { xs: 35, md: 60 } }}
          >
            Wophe The Dev
          </Typography>
        </Link>

        <Box sx={{ ...box2, display: { xs: "none", md: "flex" } }}>
          <BoxOfLinks display={{ xs: "none", md: "flex" }}>
            <Link href="#about" underline="hover" color="inherit">
              About Me
            </Link>
            <Link href="#techStack" underline="hover" color="inherit">
              My Stack
            </Link>
            <Link href="#contact" underline="hover" color="inherit">
              Contact Me
            </Link>
          </BoxOfLinks>
        </Box>

        <MaterialUISwitch
          onClick={() =>
            mode === "light" ? setMode("dark") : setMode("light")
          }
        />

        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            justifyContent: "space-between",
          }}
        >
          <MaterialUISwitch
            onClick={() =>
              mode === "light" ? setMode("dark") : setMode("light")
            }
          />
          <MenuOutlined
            sx={{
              display: { xs: "block", md: "none" },
              alignSelf: "flex-start",
            }}
            fontSize="large"
            onClick={(e) => setOpen(true)}
          />
          <Menu
            id="basic-menu"
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{ marginTop: 3 }}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link
              href="#about"
              underline="hover"
              color="inherit"
              onClick={handleClose}
            >
              <MenuItem>About Me</MenuItem>
            </Link>
            <Link
              href="#techStack"
              underline="hover"
              color="inherit"
              onClick={handleClose}
            >
              <MenuItem>My Stack</MenuItem>
            </Link>
            <Link
              href="#contact"
              underline="hover"
              color="inherit"
              onClick={handleClose}
            >
              <MenuItem>Contact Me</MenuItem>
            </Link>
          </Menu>
        </Box>
      </MyToolbar>
    </AppBar>
  );
};

export default Navbar;
