import {
  Typography,
  Card,
  CardContent,
  CardHeader,
  Avatar,
  Paper,
} from "@mui/material";
import Image from "next/image";
import React, { FC } from "react";
import { Props } from "./city.d";
import { PaperWrapper, IconWrapper, RainProbability, Wind } from "./styled";

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
            avatar={<Avatar src={icon} variant="circular" />}
          />
          <CardContent>
            <Typography> {temperature} &#8451;</Typography>
            <RainProbability>
              <IconWrapper>
                <Image
                  src="/SVG/umbrella.svg"
                  alt="umbrella"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </IconWrapper>
              <Typography>{rainProb}%</Typography>
            </RainProbability>
            <Wind>
              <IconWrapper>
                <Image
                  src="/SVG/wind.svg"
                  alt="umbrella"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </IconWrapper>
              <Typography>{wind}</Typography>
            </Wind>
          </CardContent>
        </Paper>
      </PaperWrapper>
    </Card>
  );
};
// export default cityTab;
