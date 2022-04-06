import { ThemeProvider, createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#4CD964",
      contrastText: "#fff",
    },
    secondary: {
      main: "#006FFF",
      contrastText: "#fff",
    },
  },
});
