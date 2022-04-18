import type { AppProps } from "next/app";
import "normalize.css";

import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
