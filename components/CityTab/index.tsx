import {
  Box,
  Typography,
  Card,
  CardContent,
  SvgIcon,
  CardHeader,
  Avatar,
  Paper,
  containerClasses,
} from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { Props } from "./city.d";
import {
  CityTabStyle,
  CardContentTop,
  CityData,
  PaperWrapper,
  IconWrapper,
} from "./styled";
export const CityTab: React.FC<Props> = ({
  name,
  address,
  temperature,
  rainProb,
  wind,
  icon,
}) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <PaperWrapper>
        <Paper elevation={5} variant="elevation">
          <CardHeader
            title={name}
            subheader={address}
            avatar={
              <IconWrapper>
                <Image
                  src={icon}
                  alt="icon"
                  width={10}
                  height={10}
                  layout="responsive"
                />
              </IconWrapper>
            }
          />
          <CardContent>
            <Typography>{temperature}</Typography>
            <Typography>{rainProb}</Typography>
            <Typography>{wind}</Typography>
          </CardContent>
        </Paper>
      </PaperWrapper>
    </Card>
  );
};
// export default cityTab;
