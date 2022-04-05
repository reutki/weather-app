import styled from "@emotion/styled";

export const LogoStyle = styled.div`
  .logoWrapper {
    display: grid;
    position: relative;
  }
  .logo {
    align-self: center;
    justify-self: center;
    position: absolute;
    z-index: 2;
    top: 0;
  }
  .circle {
    display: grid;
    position: relative;
    width: 312px;
    height: 312px;
    border: 3px solid gray;
    opacity: 0.2;
    border-radius: 50%;
    align-self: center;
    justify-self: center;
  }
  .circle::before {
    content: "";
    width: 126px;
    height: 126px;
    border: 3px solid gray;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
  .circle::after {
    content: " ";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 214px;
    height: 214px;
    border: 3px solid gray;
    border-radius: 50%;
  }
`;
