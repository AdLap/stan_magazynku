import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Login } from "@mui/icons-material";

const LogIn = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            <Box
                sx={{
                    width: 400,
                    height: 400,
                    boxShadow: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <TextField
                    variant='standard'
                    color='primary'
                    type='email'
                    label='email'
                    sx={{
                        marginBottom: 3
                    }}
                />
                <TextField
                    variant='standard'
                    color='primary'
                    type='password'
                    label='hasło'
                />
                <Button
                    variant='contained'
                    size='normal'
                    color='primary'
                    startIcon={<Login />}
                    sx={{
                        marginTop: 5
                    }}
                >
                    Logowanie
                </Button>
            </Box>
        </Container>
    );
}

export default LogIn;
