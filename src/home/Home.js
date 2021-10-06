import { Grid, Typography } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <Grid container>
            <Grid item>
                <Typography
                    variant='h1'
                    color='primary'
                    xs={12}
                    sx={{
                        textAlign: 'center'
                    }}
                >
                    Witaj w swoim magazynku
                </Typography>
            </Grid>
            <Grid item
                xs={6}
                sx={{ border: '1px solid red' }}
            >
                Lewy box
            </Grid>
            <Grid item
                xs={5}
                sx={{ border: '1px solid green' }}
            >
                Prawy box
            </Grid>
        </Grid>
    );
}

export default Home;