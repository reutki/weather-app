import { ThemeProvider, createTheme } from "@mui/material";
import React from "react";

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
