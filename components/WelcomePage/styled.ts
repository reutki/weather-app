import React from "react";
import styled from "@emotion/styled";

export const ButtonStyled = styled.div`
  display: grid;
  Button:last-of-type {
    margin-top: 12px;
  }
`;
export const LogoScreen = styled.div`
  display: grid;
  height: 80vh;
`;
export const WelcomePageStyle = styled.div`
  display: grid;
  max-width: 450px;
  width: 100%;
`;

export const WelcomePageBackground = styled.div`
  height: 100vh;
  display: grid;
  width: 100vw;
  align-items: center;
  justify-items: center;
  background-color: #4158d0;
  background-image: linear-gradient(
    43deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
`;
