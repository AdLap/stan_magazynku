import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';


const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h6'>
                        Magazynek
                    </Typography>
                    <Button color='inherit' href='/login'>Zaloguj</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Header;
