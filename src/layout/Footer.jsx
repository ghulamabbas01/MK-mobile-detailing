import { Typography } from "@mui/material";
import React from "react";
// import { Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Container } from "@mui/system";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

const FotterStyle = styled(Stack)({
  color: WhiteColor,

  "&.FooterMain": {
    padding: "40px 0",
  },
  ".ContectUs": {
    color: "#fff",
  },
});

export default function Footer() {
  return (
    <Box
      sx={{
        background: "#2C354E",
        // backgroundImage:
        //   "linear-gradient(rgba(255, 48, 48, 0.16) 0%,rgba(0, 0, 0, 0.46) 100%)",
      }}
    >
      <Container>
        <FotterStyle className="FooterMain">
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Box className="ContectUs">
                  <Typography
                    variant="h4"
                    fontWeight={500}
                    fontSize={"24px"}
                    fontFamily={"Poppins"}
                  >
                    MK MOBILE DETAILING
                  </Typography>
                  <Box
                    className="hover-sec"
                    sx={{
                      width: "130px",
                      height: "3px",
                      bgcolor: GoldColor,
                      marginTop: "8px",
                      transition: " width 2s",
                    }}
                  ></Box>
                </Box>
                <Box>
                  <Typography variant="body1" fontFamily={"Poppins"}>
                    <span>Phone Number: </span>
                    <a>
                      <span> (0012792082992)</span>
                    </a>
                  </Typography>
                  <Typography variant="body1" fontFamily={"Poppins"}>
                    <span>Email: </span>
                    <span> g1mobileautodetail@gmail.com</span>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={4} className="ContectUs">
                <Box>1122</Box>
              </Grid>
              <Grid item xs={4} className="ContectUs">
                <Box>1122</Box>
              </Grid>
            </Grid>
          </Box>
        </FotterStyle>
      </Container>
    </Box>
  );
}
