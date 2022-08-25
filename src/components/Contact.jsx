import React from "react";
import { Box, Typography } from "@mui/material";

const formStyle = {
  margin: "auto",
  // backgroundColor:"red",
  width:"100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
};

const Contact = ({ mode }) => {
  const inputStyle = {
    width: "280px",
    marginBottom: 10,
    height: 30,
    backgroundColor: mode === "dark" && "#333",
    color: mode === "dark" && "white",
  };

  return (
    <Box height={{ md: "60vh" }} bgcolor={"background.paper"} pt={3}>
      <Typography variant="h3" color={"text.red"} align="center" mb={3}>
        Need to drop a message?
      </Typography>
      <Box m="auto" width={{xs:"95%", md:"45%"}}>
        <form action="" style={formStyle}>
          <label htmlFor="fullName">Enter Your Full name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            style={inputStyle}
          />

          <label htmlFor="email">Enter your email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="johndoe@email.com"
            style={inputStyle}
          />

          <label htmlFor="message">Write your message</label>
          <textarea
            style={{
              alignSelf: "stretch",
              backgroundColor: mode === "dark" && "#333",
              color: mode === "dark" && "white",
              padding: 15,
            }}
            name="message"
            id="message"
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
