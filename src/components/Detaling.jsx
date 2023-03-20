import * as React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import DetailServises from "../components/DetailServises";
import Slider from "../components/Slider";
import Box from "@mui/material/Box";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

export default function SimpleContainer() {
  return (
    <>
      <Box
        sx={{
          img: {
            height: "100vh",
          },
        }}
      >
        <img src="/images/car.png" alt="car" width="100%" />
      </Box>
      <Container>
        <Stack
          textAlign={"center"}
          py={3}
          sx={{
            cursor: "pointer",
            ":hover": {
              "& .hover-sec": {
                width: "530px",
                transition: " width 2s",
              },
            },
          }}
        >
          <Typography
            variant="h3"
            fontWeight={400}
            fontFamily={"poppins"}
            fontSize={"48px"}
            color={WhiteColor}
          >
            Welcome To
          </Typography>
          <Typography
            variant="h1"
            fontWeight={600}
            fontFamily={"poppins"}
            fontSize={"48px"}
            color={GoldColor}
          >
            MK MOBILE DETAILING.
          </Typography>
          <Box
            className="hover-sec"
            sx={{
              width: "300px",
              height: "3px",
              bgcolor: GoldColor,
              margin: "auto",
              transition: " width 2s",
            }}
          ></Box>
        </Stack>
        <Box textAlign={"center"} height={"120px"} overflow={"hidden"}>
          <Typography
            variant="body1"
            fontFamily={"poppins"}
            mt={3}
            sx={{
              color: WhiteColor,
            }}
          >
            We operate three detailing vehicles throughout the Bay Area. Our
            goal is to provide our customers with the friendliest, most
            convenient detailing experience possible. We use the most modern &
            up-to-date water reclamation modules as a part of our detailing
            systems. Our products are eco-friendly.
          </Typography>
        </Box>
        <Stack>
          <DetailServises />
          <Slider />
        </Stack>
      </Container>
    </>
  );
}
