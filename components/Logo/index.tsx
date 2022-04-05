import React from "react";
import Image from "next/image";
import { LogoStyle } from "./styled";

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="logoWrapper">
        <Image
          className="logo"
          src={"/SVG/Logo.svg"}
          layout="responsive"
          width={238}
          height={65}
          alt={"logo"}
        />
      </div>
    </LogoStyle>
  );
};
