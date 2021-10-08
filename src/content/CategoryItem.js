// sublist with category items
import React from "react";
import { Box, Button, Container, TextField } from "@mui/material";
import { Login } from "@mui/icons-material";
import { useFormik } from "formik";
import * as Yup from 'yup';

const validationSchema = Yup.object({
    item: Yup
        .string('Wpisz nazwę')
        .min(2, 'Minimum 2 znaki')
        .required('Wpisz'),
});

const CategoryItem = () => {
    const formik = useFormik({
        initialValues: {
            item: ''
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log(values)
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
                        name='item'
                        label='przedmiot'
                        type='string'
                        value={formik.values.item}
                        onChange={formik.handleChange}
                        error={formik.touched.item && Boolean(formik.errors.item)}
                        helperText={formik.touched.item && formik.errors.item}
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
                        Utwórz konto
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default CategoryItem;
