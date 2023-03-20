import * as React from "react";
// material
import { Box } from "@mui/material";
import NavigationBar from "../src/layout/navigationBar";
import Detaling from "../src/components/Detaling";
import Hero from "../src/components/Hero";

export default function Index() {
  return (
    <Box sx={{ bgcolor: "#000" }}>
      <NavigationBar />
      <Hero />
      <Detaling />
    </Box>
  );
}
