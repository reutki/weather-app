import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { MainApp, ObjectsData, ObjectsStatus } from "./styled";
import { CityTab } from "../CityTab";
export default function StartScreen() {
  return (
    <MainApp>
      <ObjectsData>
        <Typography>My Objects</Typography>
        <ObjectsStatus>
          <Typography>Active</Typography>
          <Typography>Paused</Typography>
          <Typography>Stopped</Typography>
        </ObjectsStatus>
        <Button className="buttonAddObject" variant="contained">
          New Object
        </Button>
      </ObjectsData>
      <CityTab
        name="Kharkov"
        address="Ukraine"
        icon="/SVG/rainy.svg"
        rainProb={20}
        wind={20}
        temperature={30}
      />
    </MainApp>
  );
}
