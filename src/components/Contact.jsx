import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const Contact = ({ mode }) => {
  const inputStyle = {
    marginBottom: 20,
    height: 30,
    backgroundColor: mode === "dark" && "#333",
    color: mode === "dark" && "white",
    borderColor: mode === "dark" ? "#63110b" : "#CB6E6E",
    outline: "none",
    border: "1px solid #CB6E6E",
    paddingLeft: 5,
    paddingBottom: 0,
    borderRadius: 5,
  };

  const formStyle = {
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
  };

  const buttonStyle = {
    backgroundColor: "#CB6E6E",
    color: "white",
    height: 40,
    width: 150,
    fontSize: "1em",
    border: "none",
    borderRadius: 20,
    margin: "auto",
    cursor: "pointer",
  };

  return (
    <Box id="contact" bgcolor={"background.paper"} pt={3} pb={10}>
      <Typography
        variant="h3"
        color={"text.red"}
        fontSize={{ xs: 30, sm: 50 }}
        align="center"
        mb={{ xs: 5, md: 8 }}
      >
        Want to leave a message?
      </Typography>

      <Paper
        elevation={10}
        sx={{
          margin: "auto",
          width: { xs: "95%", sm: "60%", md: "40%" },
          pt: 2,
          pb: 2,
          backgroundColor: mode === "light" ? "#f2f2f2" : "black",
        }}
      >
        <form action="" style={formStyle}>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="Enter your Full name"
            style={inputStyle}
          />

          <label htmlFor="email">E-mail Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label htmlFor="message">Your message to me goes here</label>
          <textarea 
            style={{
              backgroundColor: mode === "dark" && "#333",
              color: mode === "dark" && "white",
              padding: 15,
              marginBottom: 10,
              border: "1px solid #CB6E6E",
              borderColor: mode === "dark" && "#63110b",
              outline:"none",
              resize: "none",
              borderRadius: 10,
            }}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>

          <button
            type="submit"
            style={{
              ...buttonStyle,
              backgroundColor: mode === "light" ? "#CB6E6E" : "#63110b",
            }}
          >
            Send Message
          </button>
        </form>
      </Paper>
    </Box>
  );
};

export default Contact;
