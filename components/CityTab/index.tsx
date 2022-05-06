import { Box, Typography, Card, CardContent, SvgIcon } from "@mui/material";
import React, { FC } from "react";
import { Props } from "./city.d";
import { CityTabStyle } from "./styled";
export const CityTab: React.FC<Props> = ({
  name,
  address,
  temperature,
  rainProb,
  wind,
  icon,
}) => {
  return (
    <Card>
      <CityTabStyle>
        <CardContent>
          <Typography>{name}</Typography>
          <Typography>{address}</Typography>
          <Typography>{icon}</Typography>
          <Typography>{temperature}</Typography>
          <Typography>{rainProb}</Typography>
          <Typography>{wind}</Typography>
          <Typography>{icon}</Typography>
        </CardContent>
      </CityTabStyle>
    </Card>
  );
};
// export default cityTab;
