import React from 'react';
import { AppBar, Button, Link, Toolbar, Typography, Box } from '@mui/material';


const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h6'>
                        <Button href='/' color='inherit'>Magazynek</Button>
                    </Typography>
                    <Button href='/login' color='inherit'>Zaloguj</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Header;
