import React from "react";

import { Logo } from "../Logo";
import { Button } from "@mui/material";
import { ButtonStyled, LogoScreen, WelcomePageStyle } from "./styled";

export function WelcomePage() {
  return (
    <WelcomePageStyle>
      <LogoScreen>
        <Logo />
      </LogoScreen>
      <ButtonStyled>
        <Button variant="contained" fullWidth color="primary">
          Sign In
        </Button>
        <Button variant="contained" fullWidth color="secondary">
          Sign Up
        </Button>
      </ButtonStyled>
    </WelcomePageStyle>
  );
}
