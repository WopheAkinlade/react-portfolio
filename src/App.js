import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import About from "./components/About";
// import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

const palette = {
  light: {
    mode: "light",
    background: {
      default: "white",
      paper: "#eee",
      toolbar: "white",
    },
    text: {
      primary:"black",
      icon: "#CB6E6E"
    },
  },
  dark: {
    mode: "dark",
    background: {
      default: "#222",
      paper: "#111212",
      toolbar: "#121321",
    },
    text: {
      primary:"white",
      icon: "#CB6E6E"
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
        <Home mode={mode}/>
        <About mode={mode}/>
        <Skills />
        {/* <Contact /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
