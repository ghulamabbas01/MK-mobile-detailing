import { Stack } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";

const PricingCardStyle = styled(Stack)({
  ".pricing_card": {
    flex: "1",
    maxWidth: "360px",
    backgroundColor: "#fff",
    margin: "20px 10px",
    textAlign: "center",
    cursor: "pointer",
    overflow: "hidden",
    color: "#2d2d2d",
    transition: ".3s linear",
  },
});

export default function Pricing() {
  return (
    <PricingCardStyle>
      <div class="pricing-card">
        <h3 class="pricing-card-header">Personal</h3>
        <div class="price">
          <sup>$</sup>15<span>/MO</span>
        </div>
        <ul>
          <li>
            <strong>3</strong> Websites
          </li>
          <li>
            <strong>20 GB</strong> SSD
          </li>
          <li>
            <strong>1</strong> Domain Name
          </li>
          <li>
            <strong>5</strong> Email
          </li>
          <li>
            <strong>1x</strong> CPU & RAM
          </li>
        </ul>
        <a href="#" class="order-btn">
          Order Now
        </a>
      </div>
    </PricingCardStyle>
  );
}
