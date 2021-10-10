import { Grid, Typography } from "@mui/material";
import React from "react";
import AddCategory from "../content/AddCategory";
import AddItem from "../content/AddItem";
import CategoryHome from "../content/CategoryHome";

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
                <AddCategory />
            </Grid>
            <Grid item
                xs={6}
                sx={{ border: '1px solid green' }}
            >
                <CategoryHome />
            </Grid>
        </Grid>
    );
}

export default Home;