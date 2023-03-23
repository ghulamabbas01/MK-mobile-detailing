import { Card, CardContent } from "@mui/material";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>{" "}
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>
      <Card>
        <CardContent>Mohsin Dawood</CardContent>
      </Card>
    </Slider>
  );
}
