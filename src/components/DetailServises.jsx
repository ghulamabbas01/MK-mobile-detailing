import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import { Typography } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddIcCallOutlinedIcon from "@mui/icons-material/AddIcCallOutlined";

let GoldColor = "#ff9500";
let WhiteColor = "#fff";

export default function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} mt={5} mb={7}>
        <Grid item xs={6} sm={6} md={3}>
          <Box textAlign={"center"} sx={{ cursor: "pointer" }}>
            <GroupIcon sx={{ fill: GoldColor, fontSize: "150px" }} />
            <Typography
              variant="h3"
              color={WhiteColor}
              fontSize={"24px"}
              fontWeight={600}
              fontFamily={"Poppins"}
              letterSpacing={1}
              lineHeight={"28px"}
              textTransform={"uppercase"}
              //   cursor={"pointer"}
            >
              Professional and Fully Trained
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Box textAlign={"center"} sx={{ cursor: "pointer" }}>
            <ThumbUpOutlinedIcon sx={{ fill: GoldColor, fontSize: "150px" }} />
            <Typography
              variant="h3"
              color={WhiteColor}
              fontSize={"24px"}
              fontWeight={600}
              fontFamily={"Poppins"}
              letterSpacing={1}
              lineHeight={"28px"}
              textTransform={"uppercase"}
              //   cursor={"pointer"}
            >
              Complete Satisfaction
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Box textAlign={"center"} sx={{ cursor: "pointer" }}>
            <EmojiEventsIcon sx={{ fill: GoldColor, fontSize: "150px" }} />
            <Typography
              variant="h3"
              color={WhiteColor}
              fontSize={"24px"}
              fontWeight={600}
              fontFamily={"Poppins"}
              letterSpacing={1}
              lineHeight={"28px"}
              textTransform={"uppercase"}
              //   cursor={"pointer"}
            >
              Licensed and Insured
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <Box textAlign={"center"} sx={{ cursor: "pointer" }}>
            <AddIcCallOutlinedIcon
              sx={{ fill: GoldColor, fontSize: "150px" }}
            />
            <Typography
              variant="h3"
              color={WhiteColor}
              fontSize={"24px"}
              fontWeight={600}
              fontFamily={"Poppins"}
              letterSpacing={1}
              lineHeight={"28px"}
              textTransform={"uppercase"}
              //   cursor={"pointer"}
            >
              Open and Easy To Reach
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
