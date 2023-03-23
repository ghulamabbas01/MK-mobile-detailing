import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Slider from "react-slick";
import { styled } from "@mui/material/styles";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

let GoldColor = "#ffb800";
let WhiteColor = "#fff";

const StackStyle = styled(Slider)({
  ".BorderSec": {
    border: "2px solid #fff",
  },

  ".slick-prev": {
    fill: WhiteColor,
    backgroundColor: GoldColor,
    border: "2px solid #fff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    zIndex: "2",
    padding: "4px",
    ":hover": {
      backgroundColor: "#e2a812",
      fill: WhiteColor,
      border: "2px solid #fff",
      transition: "all 0.3s ease-in-out",
    },
  },
  ".slick-next": {
    fill: WhiteColor,
    backgroundColor: GoldColor,
    border: "2px solid #fff",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    zIndex: "2",
    padding: "4px",
    ":hover": {
      backgroundColor: "#e2a812",
      fill: WhiteColor,
      border: "2px solid #fff",
      transition: "all 0.3s ease-in-out",
    },
  },
});
export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <KeyboardArrowRightIcon />,
    prevArrow: <KeyboardArrowLeftIcon />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Stack
        marginTop={5}
        sx={{
          cursor: "pointer",
          ":hover": {
            "& .hover-sec": {
              width: "250px",
              transition: " width 2s",
            },
          },
        }}
      >
        <Typography
          variant="h3"
          color={GoldColor}
          textAlign={"center"}
          fontWeight={500}
          letterSpacing={3}
          mt={4}
        >
          Our Work
        </Typography>
        <Box
          className="hover-sec"
          sx={{
            width: "150px",
            height: "3px",
            bgcolor: GoldColor,
            margin: "auto",
            transition: " width 2s",
            marginBottom: "40px",
          }}
        ></Box>
      </Stack>
      <StackStyle {...settings}>
        <Box className="BorderSec">
          <img src="../slider/sliderImg1.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg2.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg3.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg4.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg5.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg6.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg7.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg8.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg9.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg10.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg11.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg12.jpg" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg13.avif" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg14.avif" width={"100%"} height={200} />
        </Box>
        <Box className="BorderSec">
          <img src="../slider/sliderImg15.avif" width={"100%"} height={200} />
        </Box>
      </StackStyle>
    </Container>
  );
}
