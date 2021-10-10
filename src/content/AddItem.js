import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Login } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup
        .string('Wpisz nazwę przedmiotu')
        .min(2, 'Wpisz minimum 2 znaki')
        .required('Wpisz nazwę przemdmiotu')
});

const AddItem = () => {

    const formik = useFormik({
        initialValues: {
            name: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values);
            formik.resetForm();
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
                        name='name'
                        label='przedmiot'
                        type='string'
                        value={formik.values.string}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                        variant='standard'
                        color='primary'
                        sx={{
                            marginBottom: 3
                        }}
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
                        Wpisz przedmiot
                    </Button>
                </Box>
            </Box>
        </Container >
    );
}

export default AddItem;