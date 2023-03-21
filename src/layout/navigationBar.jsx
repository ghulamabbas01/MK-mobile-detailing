import * as React from 'react';
import { Typography, Stack, Toolbar, Box, AppBar, Button, IconButton, Link, Container, styled } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const StackStyled = styled(Stack)(({ theme }) => ({
  "& .MuiLink-root": {
    color: "#fff",
    letterSpacing: 2,
    fontWeight: 400
  },
  svg: {
    fill: "#fff",
    fontSize: 35,
  }
}))

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{
          bgcolor: "#000",
          justifyContent: "space-between",
          px: "64px !important"
        }}>
          <Box sx={{
            position: 'relative',
            minWidth: 250,
            img: {
              position: "absolute",
              left: 0,
              top: 0,
              zIndex: 2,
              borderBottomRightRadius: "8px",
              borderBottomLeftRadius: "8px",

            }
          }}>
            <img src='/images/logo.png' height="200px" alt='logo' />
          </Box>
          <StackStyled direction="row" justifyContent="center" spacing={3}>

            <Link href="#" underline="none" >
              {'Home'}
            </Link>
            <Link href="#" underline="none">
              {'Services'}
            </Link>
            <Link href="#" underline="none">
              {'Reviews'}
            </Link>
            <Link href="#" underline="none">
              {'Gallery'}
            </Link>
            <Link href="#" underline="none">
              {'Contact Us'}
            </Link>
          </StackStyled>
          <StackStyled direction="row" justifyContent="center" spacing={1}>
            <IconButton>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <FacebookOutlinedIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <InstagramIcon />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://www.instagram.com/" target={"_blank"}>
                <WhatsAppIcon />
              </a>
            </IconButton>


          </StackStyled>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
