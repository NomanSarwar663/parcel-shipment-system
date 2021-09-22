import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@material-ui/core';

import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';


// 

import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { useState } from 'react';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
        marginTop: "150px",
        backgroundColor: "white",
        zIndex: 2
    },
});


const ChangePassword = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    function moveTO() { }

    //   

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const [showPassword1, setShowPassword1] = useState(false);
    const handleClickShowPassword1 = () => setShowPassword1(!showPassword1);

    const [showPassword2, setShowPassword2] = useState(false);
    const handleClickShowPassword2 = () => setShowPassword2(!showPassword2);
    

    return (
        <>
            <Helmet>
                <title>Login | Material Kit</title>
            </Helmet>

            <Container style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>

                <Card className={classes.root}>

                    <Box
                        sx={{
                            
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            justifyContent: 'center',

                        }}
                    >
                        <Container maxWidth="sm">
                            <Formik
                                initialValues={{
                                    email: 'demo@devias.io',
                                    password: 'Password123'
                                }}
                                validationSchema={Yup.object().shape({
                                    email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
                                    password: Yup.string().max(255).required('Password is required')
                                })}
                                onSubmit={() => {
                                    navigate('/app/dashboard', { replace: true });
                                }}
                            >
                                {({
                                    errors,
                                    handleBlur,
                                    handleChange,
                                    handleSubmit,
                                    isSubmitting,
                                    touched,
                                    values
                                }) => (
                                    <form onSubmit={handleSubmit}>
                                        <Box style={{ display: 'flex', justifyContent: "center", marginBottom: "20px", marginTop: "20px" }}>
                                            <img width="250px" src="static/images/avatars/logo.png" />
                                        </Box>
                                        <Box sx={{ mb: 3 }}>
                                            <Typography
                                                color="textPrimary"
                                                variant="h4"
                                                paddingLeft="10px"
                                            >
                                                Change Password
                                            </Typography>

                                        </Box>
                                        <Grid
                                            container
                                            spacing={3}
                                        >


                                        </Grid>



                                        <TextField
                                        margin="normal"
                                            fullWidth
                                            label='Current Password'
                                            variant="outlined"
                                            type={showPassword ? "text" : "password"} 
                                            onChange={handleChange}
                                            InputProps={{ 
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                        >
                                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />

                                        <TextField
                                        margin="normal"
                                            fullWidth
                                            label='New Password'
                                            variant="outlined"
                                            type={showPassword1 ? "text" : "password"} 
                                            onChange={handleChange}
                                            InputProps={{ 
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword1}
                                                        >
                                                            {showPassword1 ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />

                                        <TextField
                                        margin="normal"
                                            fullWidth
                                            label='Confirm Password'
                                            variant="outlined"
                                            type={showPassword2 ? "text" : "password"} 
                                            onChange={handleChange}
                                            InputProps={{ 
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword2}
                                                        >
                                                            {showPassword2 ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                )
                                            }}
                                        />





                                        <Box sx={{ py: 2 }}>
                                            <Button
                                                color="primary"
                                                disabled={isSubmitting}
                                                fullWidth
                                                size="large"
                                                type="submit"
                                                variant="contained"
                                                onClick={moveTO}
                                            >
                                                Save Password
                                            </Button>
                                        </Box>
                                        

                                    </form>
                                )}
                            </Formik>
                        </Container>
                    </Box>
                </Card>
            </Container>
        </>
    );
};

export default ChangePassword;