import * as React from "react";
// material
import { Box } from "@mui/material";
import NavigationBar from "../src/layout/navigationBar";
import Detaling from "../src/components/Detaling";

export default function Index() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <NavigationBar />
      <Detaling />
    </Box>
  );
}
