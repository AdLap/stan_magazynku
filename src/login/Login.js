import React from "react";
import { Box, Button, ButtonGroup, Container, TextField } from "@mui/material";
import { Create, Login } from "@mui/icons-material";

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
                        marginBottom: 5
                    }}
                />
                <TextField
                    variant='standard'
                    color='primary'
                    type='password'
                    label='hasło'
                />

                <ButtonGroup
                    size='normal'
                    color='primary'
                    sx={{
                        marginTop: 10,
                        gap: 5
                    }}
                >
                    <Button
                        variant='contained'
                        startIcon={<Login />}
                    >
                        Logowanie
                    </Button>
                    <Button
                        variant='contained'
                        startIcon={<Create />}
                    >
                        Rejestracja
                    </Button>
                </ButtonGroup>
            </Box>
        </Container>

    );
}

export default LogIn;
