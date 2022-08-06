import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Stack from "./components/TechStack";

const palette = {
  light: {
    mode: "light",
    background: {
      default: "white",
      paper: "white",
      toolbar: "white",
    },
  },
  dark: {
    mode: "dark",
    background: {
      default: "#222",
      paper: "darkgray",
      toolbar: "#121321",
    },
    text: {
      primary:"white",
    },
  },
};

function App() {
  const [mode, setMode] = useState("light");
  const theme = createTheme({
    palette: mode === "light" ? { ...palette.light } : { ...palette.dark },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar mode={mode} setMode={setMode} />
        <Home />
        {/* <About />
        <Contact /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
