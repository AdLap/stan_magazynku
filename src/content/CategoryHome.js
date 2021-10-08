// category list

import React from "react";
import Grid from "@mui/material/Grid";

const CategoryHome = () => {
    return (
        <Grid container>
            <Grid item container>
                {/* CategoryItem.map  below */}
                <Grid item sm={2} />
                <Grid item>Kable</Grid>
                <Grid item>Narzędzia</Grid>
                <Grid item sm={2} />
            </Grid>
        </Grid>
    );
}

export default CategoryHome;
