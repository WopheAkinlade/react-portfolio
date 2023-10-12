import { Box, createTheme, ThemeProvider } from "@mui/material";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
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
      red: "#CB6E6E"
    },
    button: {
      primary: "#CB6E6E",
    }
  },
  dark: {
    mode: "dark",
    background: {
      default: "#222",
      paper: "#1c1c1c",
      toolbar: "#121321",
    },
    text: {
      primary:"#ddd",
      red: "#63110b"
    },
    button: {
      primary: "#63110b",
    }
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
        <Skills mode={mode} />
        <Contact mode={mode}/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
