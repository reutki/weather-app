import React from "react";
import Image from "next/image";
import { LogoStyle } from "./styled";

export const Logo = () => {
  return (
    <LogoStyle>
      <div className="logoWrapper">
        <Image
          className="logo"
          src={"/SVG/logo.svg"}
          layout="responsive"
          width={50}
          height={30}
          alt={"logo"}
        />
      </div>
    </LogoStyle>
  );
};
