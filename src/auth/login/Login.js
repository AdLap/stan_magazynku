import React, { useState } from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Create, Login } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    email: Yup
        .string('Wpisz swój email')
        .email('Wpisz prawidłowy email')
        .required('Wpisz email'),
    password: Yup
        .string('Wpisz hasło')
        .min(8, 'Wpsiz prawidłowe hasło')
        .required('Wpisz prawidłowe hasło'),
});

const LogIn = () => {
    const [user, setUser] = useState(null);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            setUser(values);
            console.log(user)
        }
    });

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
                    position: 'relative'
                }}
            >
                <Box
                    component='form'
                    onSubmit={formik.handleSubmit}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}

                >

                    <TextField
                        name='email'
                        label='email'
                        type='email'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                        variant='standard'
                        color='primary'
                        sx={{
                            marginBottom: 3
                        }}
                    />
                    <TextField
                        name='password'
                        label='hasło'
                        type='password'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        variant='standard'
                        color='primary'

                    />
                    <Button
                        type='submit'
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
                <Button
                    href='/rejestracja'
                    variant='contained'
                    size='small'
                    color='primary'
                    startIcon={<Create />}
                    sx={{
                        position: 'absolute',
                        bottom: '1rem',
                        right: '1rem'
                    }}
                >
                    Utwórz konto
                </Button>
            </Box>
        </Container >
    );
}

export default LogIn;
