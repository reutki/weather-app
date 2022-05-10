import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { MainScreen, ObjectsData, ObjectsStatus, TopData } from "./styled";
import { CityTab } from "../CityTab";
export default function StartScreen() {
  return (
    <MainScreen>
      <TopData>
        <ObjectsData>
          <Typography variant="h6">My Objects</Typography>
          <ObjectsStatus>
            <Typography variant="body1">Active</Typography>
            <Typography variant="body1">Paused</Typography>
            <Typography variant="body1">Stopped</Typography>
          </ObjectsStatus>
        </ObjectsData>
        <Button className="buttonAddObject" variant="contained" size="small">
          New Object
        </Button>
      </TopData>
      <CityTab
        name="Chisinau"
        address="Moldova"
        icon="/SVG/rainy.svg"
        rainProb={20}
        wind={20}
        temperature={30}
      />
    </MainScreen>
  );
}
