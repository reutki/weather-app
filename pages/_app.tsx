import type { AppProps } from "next/app";
import "normalize.css";
import React from "react";
import { ThemeProvider } from "@mui/material";
import { theme } from "../components/theme";
import { ContainerStyle } from "../components/Container/styled";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <ContainerStyle>
        <Component {...pageProps} />
      </ContainerStyle>
    </ThemeProvider>
  );
}

export default MyApp;
