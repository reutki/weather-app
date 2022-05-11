import { Box, Button } from "@mui/material";
import React from "react";
import { HomeIcon, ChatIcon, FeedbackIcon } from "../Icons";
import { BottomMenuStyle } from "./styled";
export const BottomMenu = () => {
  return (
    <Box>
      <BottomMenuStyle>
        <Button>
          <ChatIcon />
        </Button>
        <Button>
          <HomeIcon />
        </Button>
        <Button>
          <FeedbackIcon />
        </Button>
      </BottomMenuStyle>
    </Box>
  );
};
