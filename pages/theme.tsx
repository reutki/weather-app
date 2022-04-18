import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#63e067",
      contrastText: "#fff",
    },
    secondary: {
      main: "#379FFF",
      contrastText: "#fff",
    },
  },
});
