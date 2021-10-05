import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box } from '@mui/material';
import StoreIcon from '@mui/icons-material/Store';

const Header = () => {
    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }} variant='h6'>
                        Magazynek
                    </Typography>
                    <Button color='inherit'>Zaloguj</Button>
                </Toolbar>
            </AppBar>
        </Box>

    );
}

export default Header;
