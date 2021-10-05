import { Typography } from "@mui/material";
import React from "react";

const Home = () => {
    return (
        <section>
            <Typography
                variant='h1'
                color='primary'
                sx={{
                    textAlign: 'center'
                }}
            >
                Witaj w swoim magazynku
            </Typography>
        </section>
    );
}

export default Home;