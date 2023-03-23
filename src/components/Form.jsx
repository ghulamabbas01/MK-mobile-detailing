import React from "react";
// material
import {
  Container,
  Grid,
  TextField,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ContactCard from "./ContactCards";

const TextFieldStyle = styled(TextField)({
  background: "rgba(145, 158, 171, 0.12)",
  borderRadius: "8px 8px 0px 0px",
  "& .MuiInputBase-root": {
    "&:hover": {
      "&:before": {
        borderBottom: `1px solid #fff !important`,
      },
    },
    "&:before": {
      borderBottom: `1px solid #fff`,
    },
  },
  input: {
    color: "#fff",
    padding: "16px !important",
    "::placeholder ": {
      color: "#fff",
      opacity: "1",
    },
  },
  textarea: {
    color: "#fff",

    "::placeholder ": {
      color: "#fff",
      opacity: "1",
    },
  },
});
export default function Form() {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/car1.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        mt: 6,
        position: "relative",
        overflow: "hidden",
        zIndex: 0,
        "&:before": {
          content: '""',
          position: "absolute",
          height: "100%",
          width: "100%",
          background: "#000000bd",
          zIndex: 1,
          left: 0,
        },
      }}
    >
      <Container id={"ContactUs"}>
        <Box py={{ xs: 5, md: 10 }} sx={{ position: "relative", zIndex: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h3" fontWeight={700} mb={2}>
                Contact Us
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextFieldStyle
                    variant="filled"
                    color="warning"
                    type={"text"}
                    fullWidth
                    placeholder="First Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldStyle
                    variant="filled"
                    color="warning"
                    fullWidth
                    placeholder="Last Name"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldStyle
                    variant="filled"
                    color="warning"
                    fullWidth
                    placeholder="Email"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextFieldStyle
                    variant="filled"
                    color="warning"
                    fullWidth
                    placeholder="Number"
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <TextFieldStyle
                    variant="filled"
                    color="warning"
                    fullWidth
                    placeholder="Address"
                    multiline
                    rows={5}
                  />
                </Grid>
                <Grid item xs={12} md={12}>
                  <Button
                    variant="contained"
                    size="large"
                    color="warning"
                    fullWidth
                    sx={{
                      textTransform: "capitalize",
                      fontWeight: "bold",
                      fontSize: "16px",
                      py: 1.5,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
