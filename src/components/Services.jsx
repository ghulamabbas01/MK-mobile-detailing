import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container, Card, } from '@mui/system';
import { Button, Typography, Stack } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
let GoldColor = "#ffb800";


export default function RowAndColumnSpacing() {
    return (
        <Container>
            <Box mt={5} sx={{
                cursor: "pointer",
                ":hover": {
                    "& .hover-sec": {
                        width: "150px",
                        transition: " width 2s",
                    },
                },
            }}>
                <Typography variant='h4' color="#fff" textAlign="center" >Services</Typography>
                <Box
                    className="hover-sec"
                    sx={{
                        width: "80px",
                        height: "3px",
                        bgcolor: GoldColor,
                        margin: "auto",
                        transition: " width 2s",

                    }}
                >
                </Box>
            </Box>
            <Box sx={{ width: '100%' }}>
                <Grid container rowSpacing={3} mt={6} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services1.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Mobile Detailing</Button>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services2.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Mobile Detailing</Button>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services3.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Engin Cleaning</Button>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services4.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Mobile Detailing</Button>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }}>
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services5.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Mobile Detailing</Button>
                        </Stack>
                    </Grid>
                    <Grid item md={4} xs={6}>
                        <Stack spacing={2} sx={{ border: "3px solid #fff" }} >
                            <Box justifyContent="center" display="flex">
                                <img src='/images/services6.jpg' width="100%" height='274px' alt='perfume' />
                            </Box>
                            <Button variant='contained' size='large' fullWidth sx={{ bgcolor: GoldColor, borderRadius: 0, "&:hover": { background: GoldColor } }}>Interior Detailing</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

