import React from "react";
import Grid from "@mui/material/Grid";

const Category = () => {
    return (
        <Grid container>
            <Grid item container>
                <Grid item sm={2} />
                <Grid item>Kable</Grid>
                <Grid item>Narzędzia</Grid>
                <Grid item sm={2} />
            </Grid>
        </Grid>
    );
}

export default Category;