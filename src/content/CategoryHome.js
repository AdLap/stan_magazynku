// category list

import React from "react";
import Grid from "@mui/material/Grid";
import { connect } from 'react-redux';

const CategoryHome = ({ category }) => {
    console.log(category)
    return (
        <Grid container spacing={2}>
            {
                category && category.map(category => (
                    <Grid item key={category.id}>{category.name}</Grid>
                ))
            }
        </Grid>
    );
}

const mapStateToProps = state => {
    return {
        category: state.category.category
    }
}

export default connect(mapStateToProps)(CategoryHome);
